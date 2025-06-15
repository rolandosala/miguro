<template>
    <div class="row p-lg-4 d-flex justify-content-center align-items-center">
        <h4 class="fs-1">Flashcards</h4>
        <div class="row ">
            <div class="col-sm-12 col-lg-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3 shadow" :data-bs-target="'#' + data.id" data-bs-toggle="modal" @click="get_Index(index)">
                    <div class="d-flex justify-content-center flex-column align-items-center ">
                        <img :src="data.img" alt="" style="width: 90%;">
                        <h5>{{ data.title }}</h5>
                    </div>
                </div>
            </div>
            <div class="modal fade" v-for="data in cards" :id="data.id" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ data.title }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click="resetTimer"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center align-items-center flex-column">
                                <h1 class="" style="font-size: 4em;">{{ kanji }}</h1>
                                <!-- <h5 class="">{{ meaning }}</h5> -->
                                <div
                                    class="col-10 border border-top d-flex justify-content-center align-items-center flex-column">
                                    <h5 class="">{{ time }}</h5>
                                    <h6 class="">Correct: {{ correct_answer }} | Wrong: {{ wrong_answer }}</h6>
                                </div>

                                <div class="col-12 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                                    <button class="btn btn-outline-primary col-5 m-1" v-for="ch in choices"
                                        @click="checkAnswer(ch)" :disabled="disable_choices">{{ ch }}</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer  d-flex justify-content-center align-items-center"
                            v-if="preview_answer">
                            <button class="btn btn-success col-6" data-bs-dismiss="modal"
                                data-bs-target="#previewResult" data-bs-toggle="modal">Preview Answers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="previewResult" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Preview Answers</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Kanji</th>
                                        <th>Meaning</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in preview_answers">
                                        <td>{{ data.kanji }}</td>
                                        <td>{{ data.meaning }}</td>
                                        <td>{{ data.correct_answer }}</td>
                                        <td>{{ data.user_answer }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer  d-flex justify-content-center align-items-center">
                            <button class="btn btn-danger col-4" data-bs-dismiss="modal"
                                @click="resetTimer">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GuessKanji from './GuessKanji.vue';
import axios from 'axios';
export default {
    components: {
        GuessKanji
    },
    data() {
        return {
            index: '',
            kanji: '',
            choices: [],
            difficulty: '',
            meaning: '',
            correct_answer: 0,
            wrong_answer: 0,
            user_answer: '',
            rand: '',
            time: 60,
            default_time: 60,
            intervalTime: null,
            preview_answer: false,
            disable_choices: false,
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.png', title: 'Random Kanji',
                    characters: []
                    /* characters: [
                        {
                            difficulty: 'N5',
                            character: '日',
                            meaning: 'sun / day',
                            onyomi: 'ニチ, ジツ',
                            kunyomi: 'ひ, び, か',
                            choices: ['tsuki', 'hi', 'hi, bi', 'hikari'],
                            correctAnswer: 'hi'
                        },
                        {
                            difficulty: 'N5',
                            character: '月',
                            meaning: 'moon / month',
                            onyomi: 'ゲツ, ガツ',
                            kunyomi: 'つき',
                            choices: ['taiyo', 'tsuki', 'kawa', 'hane'],
                            correctAnswer: 'tsuki'
                        },
                        {
                            difficulty: 'N5',
                            character: '火',
                            meaning: 'fire',
                            onyomi: 'カ',
                            kunyomi: 'ひ, ほ',
                            choices: ['mizu', 'hi', 'kaze', 'tori'],
                            correctAnswer: 'hi'
                        },
                        {
                            difficulty: 'N5',
                            character: '水',
                            meaning: 'water',
                            onyomi: 'スイ',
                            kunyomi: 'みず',
                            choices: ['kaze', 'mizu', 'tsuki', 'hi'],
                            correctAnswer: 'mizu'
                        },
                        {
                            difficulty: 'N5',
                            character: '木',
                            meaning: 'tree / wood',
                            onyomi: 'モク, ボク',
                            kunyomi: 'き, こ',
                            choices: ['ki', 'tori', 'kawa', 'hikari'],
                            correctAnswer: 'ki'
                        },
                        {
                            difficulty: 'N5',
                            character: '金',
                            meaning: 'gold / money',
                            onyomi: 'キン, コン',
                            kunyomi: 'かね, かな',
                            choices: ['kaze', 'kin', 'tsuki', 'mizu'],
                            correctAnswer: 'kin'
                        },
                        {
                            difficulty: 'N5',
                            character: '土',
                            meaning: 'earth / soil',
                            onyomi: 'ド, ト',
                            kunyomi: 'つち',
                            choices: ['hi', 'tsuchi', 'mizu', 'yama'],
                            correctAnswer: 'tsuchi'
                        },
                        {
                            difficulty: 'N5',
                            character: '人',
                            meaning: 'person',
                            onyomi: 'ジン, ニン',
                            kunyomi: 'ひと',
                            choices: ['hito', 'neko', 'tori', 'inu'],
                            correctAnswer: 'hito'
                        },
                        {
                            difficulty: 'N5',
                            character: '女',
                            meaning: 'woman / female',
                            onyomi: 'ジョ, ニョ',
                            kunyomi: 'おんな, め',
                            choices: ['neko', 'onna', 'tori', 'hito'],
                            correctAnswer: 'onna'
                        },
                        {
                            difficulty: 'N5',
                            character: '男',
                            meaning: 'man / male',
                            onyomi: 'ダン, ナン',
                            kunyomi: 'おとこ',
                            choices: ['otoko', 'onna', 'hito', 'neko'],
                            correctAnswer: 'otoko'
                        },
                        {
                            difficulty: 'N5',
                            character: '子',
                            meaning: 'child',
                            onyomi: 'シ',
                            kunyomi: 'こ, ね',
                            choices: ['neko', 'hito', 'ko', 'tori'],
                            correctAnswer: 'ko'
                        },
                        {
                            difficulty: 'N5',
                            character: '大',
                            meaning: 'big / large',
                            onyomi: 'ダイ, タイ',
                            kunyomi: 'おお, おおきい',
                            choices: ['chiisai', 'ookii', 'takai', 'samui'],
                            correctAnswer: 'ookii'
                        },
                        {
                            difficulty: 'N5',
                            character: '小',
                            meaning: 'small',
                            onyomi: 'ショウ',
                            kunyomi: 'ちいさい, こ',
                            choices: ['chiisai', 'ookii', 'takai', 'samui'],
                            correctAnswer: 'chiisai'
                        },
                        {
                            difficulty: 'N5',
                            character: '上',
                            meaning: 'up / above',
                            onyomi: 'ジョウ, ショウ',
                            kunyomi: 'うえ, うわ',
                            choices: ['shita', 'ue', 'mizu', 'soto'],
                            correctAnswer: 'ue'
                        },
                        {
                            difficulty: 'N5',
                            character: '下',
                            meaning: 'down / below',
                            onyomi: 'カ, ゲ',
                            kunyomi: 'した, さげる',
                            choices: ['ue', 'mizu', 'shita', 'hane'],
                            correctAnswer: 'shita'
                        },
                        {
                            difficulty: 'N5',
                            character: '左',
                            meaning: 'left',
                            onyomi: 'サ',
                            kunyomi: 'ひだり',
                            choices: ['migi', 'hidari', 'soto', 'yama'],
                            correctAnswer: 'hidari'
                        },
                        {
                            difficulty: 'N5',
                            character: '右',
                            meaning: 'right',
                            onyomi: 'ウ',
                            kunyomi: 'みぎ',
                            choices: ['migi', 'hidari', 'yama', 'kawa'],
                            correctAnswer: 'migi'
                        },
                        {
                            difficulty: 'N5',
                            character: '食',
                            meaning: 'eat / food',
                            onyomi: 'ショク',
                            kunyomi: 'たべる',
                            choices: ['tabe', 'nomi', 'kawa', 'ne'],
                            correctAnswer: 'tabe'
                        },
                        {
                            difficulty: 'N5',
                            character: '行',
                            meaning: 'go / do',
                            onyomi: 'コウ, ギョウ',
                            kunyomi: 'いく, ゆく',
                            choices: ['iku', 'aruku', 'kawa', 'taberu'],
                            correctAnswer: 'iku'
                        },
                        {
                            difficulty: 'N5',
                            character: '見る',
                            meaning: 'see / look',
                            onyomi: 'ケン',
                            kunyomi: 'みる',
                            choices: ['miru', 'kiku', 'taberu', 'aruku'],
                            correctAnswer: 'miru'
                        }
                    ] */
                },
                {
                    id: 'cardTwo', img: '/miguro_2.png', title: 'N4 Kanji',
                    characters: [
                        {
                            difficulty: 'N4',
                            character: '日',
                            meaning: 'day, sun',
                            onyomi: 'ニチ, ジツ',
                            kunyomi: 'ひ, か',
                            choices: ['hi', 'nichi', 'bi', 'ka'],
                            correctAnswer: 'nichi'
                        },
                        {
                            difficulty: 'N4',
                            character: '人',
                            meaning: 'person',
                            onyomi: 'ジン, ニン',
                            kunyomi: 'ひと',
                            choices: ['hito', 'jin', 'nin', 'bito'],
                            correctAnswer: 'hito'
                        },
                        {
                            difficulty: 'N4',
                            character: '大',
                            meaning: 'big, large',
                            onyomi: 'ダイ, タイ',
                            kunyomi: 'おおきい',
                            choices: ['oo', 'dai', 'tai', 'ookii'],
                            correctAnswer: 'ookii'
                        },
                        {
                            difficulty: 'N4',
                            character: '学',
                            meaning: 'study, learning',
                            onyomi: 'ガク',
                            kunyomi: 'まなぶ',
                            choices: ['gaku', 'manabu', 'gakuo', 'gakun'],
                            correctAnswer: 'gaku'
                        },
                        {
                            difficulty: 'N4',
                            character: '本',
                            meaning: 'book, origin',
                            onyomi: 'ホン',
                            kunyomi: 'もと',
                            choices: ['hon', 'moto', 'honno', 'hono'],
                            correctAnswer: 'hon'
                        },
                        {
                            difficulty: 'N4',
                            character: '車',
                            meaning: 'car, vehicle',
                            onyomi: 'シャ',
                            kunyomi: 'くるま',
                            choices: ['kuruma', 'sha', 'shari', 'kuramama'],
                            correctAnswer: 'kuruma'
                        },
                        {
                            difficulty: 'N4',
                            character: '時',
                            meaning: 'time, hour',
                            onyomi: 'ジ',
                            kunyomi: 'とき',
                            choices: ['toki', 'ji', 'jikan', 'jutsu'],
                            correctAnswer: 'toki'
                        },
                        {
                            difficulty: 'N4',
                            character: '見',
                            meaning: 'see, look',
                            onyomi: 'ケン',
                            kunyomi: 'みる',
                            choices: ['ken', 'miru', 'mi', 'kenmizu'],
                            correctAnswer: 'miru'
                        },
                        {
                            difficulty: 'N4',
                            character: '話',
                            meaning: 'talk, story',
                            onyomi: 'ワ',
                            kunyomi: 'はなす',
                            choices: ['hanasu', 'wa', 'wasure', 'hanashi'],
                            correctAnswer: 'hanasu'
                        },
                        {
                            difficulty: 'N4',
                            character: '食',
                            meaning: 'eat, food',
                            onyomi: 'ショク',
                            kunyomi: 'たべる',
                            choices: ['taberu', 'shoku', 'shokuji', 'shokumono'],
                            correctAnswer: 'taberu'
                        },
                        {
                            difficulty: 'N4',
                            character: '行',
                            meaning: 'go, act',
                            onyomi: 'コウ, ギョウ',
                            kunyomi: 'いく, おこなう',
                            choices: ['ikou', 'gyou', 'iku', 'okonau'],
                            correctAnswer: 'iku'
                        },
                        {
                            difficulty: 'N4',
                            character: '天',
                            meaning: 'heaven, sky',
                            onyomi: 'テン',
                            kunyomi: 'あめ, あま',
                            choices: ['ten', 'ama', 'tama', 'tenn'],
                            correctAnswer: 'ten'
                        },
                        {
                            difficulty: 'N4',
                            character: '川',
                            meaning: 'river',
                            onyomi: 'セン',
                            kunyomi: 'かわ',
                            choices: ['kawa', 'sen', 'sawa', 'kako'],
                            correctAnswer: 'kawa'
                        },
                        {
                            difficulty: 'N4',
                            character: '雨',
                            meaning: 'rain',
                            onyomi: 'ウ',
                            kunyomi: 'あめ',
                            choices: ['ame', 'u', 'umi', 'aomi'],
                            correctAnswer: 'ame'
                        },
                        {
                            difficulty: 'N4',
                            character: '右',
                            meaning: 'right, direction',
                            onyomi: 'ウ, ユウ',
                            kunyomi: 'みぎ',
                            choices: ['migi', 'yu', 'u', 'wa'],
                            correctAnswer: 'migi'
                        },
                        {
                            difficulty: 'N4',
                            character: '左',
                            meaning: 'left',
                            onyomi: 'サ',
                            kunyomi: 'ひだり',
                            choices: ['hidari', 'sa', 'sai', 'hisa'],
                            correctAnswer: 'hidari'
                        },
                        {
                            difficulty: 'N4',
                            character: '新',
                            meaning: 'new',
                            onyomi: 'シン',
                            kunyomi: 'あたらしい',
                            choices: ['atarashii', 'shin', 'shinken', 'arashi'],
                            correctAnswer: 'atarashii'
                        },
                        {
                            difficulty: 'N4',
                            character: '古',
                            meaning: 'old',
                            onyomi: 'コ',
                            kunyomi: 'ふるい',
                            choices: ['furui', 'ko', 'koji', 'kore'],
                            correctAnswer: 'furui'
                        },
                        {
                            difficulty: 'N4',
                            character: '前',
                            meaning: 'before, in front',
                            onyomi: 'ゼン',
                            kunyomi: 'まえ',
                            choices: ['mae', 'zen', 'zento', 'mai'],
                            correctAnswer: 'mae'
                        },
                        {
                            difficulty: 'N4',
                            character: '後',
                            meaning: 'after, later',
                            onyomi: 'ゴ, コウ',
                            kunyomi: 'あと, うしろ',
                            choices: ['ato', 'go', 'kou', 'ushiro'],
                            correctAnswer: 'ato'
                        }
                    ]
                },
                {
                    id: 'cardThree', img: '/miguro_3.png', title: 'N3 Kanji',
                    characters: [
                        {
                            difficulty: 'N3',
                            character: '学',
                            meaning: 'study, learning',
                            onyomi: 'ガク',
                            kunyomi: 'まなぶ',
                            choices: ['gaku', 'manabu', 'kaku', 'gamu'],
                            correctAnswer: 'gaku'
                        },
                        {
                            difficulty: 'N3',
                            character: '家',
                            meaning: 'house, home',
                            onyomi: 'カ',
                            kunyomi: 'いえ, や',
                            choices: ['ka', 'ie', 'ya', 'na'],
                            correctAnswer: 'ka'
                        },
                        {
                            difficulty: 'N3',
                            character: '車',
                            meaning: 'car, vehicle',
                            onyomi: 'シャ',
                            kunyomi: 'くるま',
                            choices: ['sha', 'kuruma', 'kuramo', 'ka'],
                            correctAnswer: 'kuruma'
                        },
                        {
                            difficulty: 'N3',
                            character: '食',
                            meaning: 'eat, food',
                            onyomi: 'ショク',
                            kunyomi: 'たべる',
                            choices: ['shoku', 'taberu', 'shoka', 'tabe'],
                            correctAnswer: 'taberu'
                        },
                        {
                            difficulty: 'N3',
                            character: '飲',
                            meaning: 'drink',
                            onyomi: 'イン',
                            kunyomi: 'のむ',
                            choices: ['in', 'nomu', 'nimu', 'ino'],
                            correctAnswer: 'nomu'
                        },
                        {
                            difficulty: 'N3',
                            character: '見',
                            meaning: 'see, look at',
                            onyomi: 'ケン',
                            kunyomi: 'みる',
                            choices: ['ken', 'miru', 'me', 'kino'],
                            correctAnswer: 'miru'
                        },
                        {
                            difficulty: 'N3',
                            character: '話',
                            meaning: 'talk, story',
                            onyomi: 'ワ',
                            kunyomi: 'はなす',
                            choices: ['wa', 'hanasu', 'hazu', 'waka'],
                            correctAnswer: 'hanasu'
                        },
                        {
                            difficulty: 'N3',
                            character: '音',
                            meaning: 'sound, noise',
                            onyomi: 'オン',
                            kunyomi: 'おと',
                            choices: ['on', 'oto', 'ose', 'an'],
                            correctAnswer: 'oto'
                        },
                        {
                            difficulty: 'N3',
                            character: '力',
                            meaning: 'power, strength',
                            onyomi: 'リョク',
                            kunyomi: 'ちから',
                            choices: ['ryoku', 'chikara', 'riki', 'rikura'],
                            correctAnswer: 'chikara'
                        },
                        {
                            difficulty: 'N3',
                            character: '天',
                            meaning: 'heaven, sky',
                            onyomi: 'テン',
                            kunyomi: 'あめ',
                            choices: ['ten', 'ame', 'tenkai', 'amega'],
                            correctAnswer: 'ame'
                        },
                        {
                            difficulty: 'N3',
                            character: '休',
                            meaning: 'rest, break',
                            onyomi: 'キュウ',
                            kunyomi: 'やすむ',
                            choices: ['kyuu', 'yasumu', 'yasu', 'kyou'],
                            correctAnswer: 'yasumu'
                        },
                        {
                            difficulty: 'N3',
                            character: '新',
                            meaning: 'new',
                            onyomi: 'シン',
                            kunyomi: 'あたらしい',
                            choices: ['shin', 'atarashii', 'atarashi', 'shinrai'],
                            correctAnswer: 'atarashii'
                        },
                        {
                            difficulty: 'N3',
                            character: '古',
                            meaning: 'old',
                            onyomi: 'コ',
                            kunyomi: 'ふるい',
                            choices: ['ko', 'furui', 'kora', 'furu'],
                            correctAnswer: 'furui'
                        },
                        {
                            difficulty: 'N3',
                            character: '高',
                            meaning: 'high, tall',
                            onyomi: 'コウ',
                            kunyomi: 'たかい',
                            choices: ['kou', 'takai', 'taka', 'taika'],
                            correctAnswer: 'takai'
                        },
                        {
                            difficulty: 'N3',
                            character: '低',
                            meaning: 'low',
                            onyomi: 'テイ',
                            kunyomi: 'ひくい',
                            choices: ['tei', 'hikui', 'tekai', 'tekuru'],
                            correctAnswer: 'hikui'
                        },
                        {
                            difficulty: 'N3',
                            character: '明',
                            meaning: 'bright, clear',
                            onyomi: 'メイ',
                            kunyomi: 'あかるい',
                            choices: ['mei', 'akarui', 'akari', 'min'],
                            correctAnswer: 'akarui'
                        },
                        {
                            difficulty: 'N3',
                            character: '暗',
                            meaning: 'dark',
                            onyomi: 'アン',
                            kunyomi: 'くらい',
                            choices: ['an', 'kurai', 'ankoku', 'ko'],
                            correctAnswer: 'kurai'
                        },
                        {
                            difficulty: 'N3',
                            character: '早',
                            meaning: 'early, fast',
                            onyomi: 'ソウ',
                            kunyomi: 'はやい',
                            choices: ['sou', 'hayai', 'sora', 'haya'],
                            correctAnswer: 'hayai'
                        },
                        {
                            difficulty: 'N3',
                            character: '正',
                            meaning: 'correct, right',
                            onyomi: 'セイ',
                            kunyomi: 'ただしい',
                            choices: ['sei', 'tadashii', 'seikou', 'tada'],
                            correctAnswer: 'tadashii'
                        },
                        {
                            difficulty: 'N3',
                            character: '長',
                            meaning: 'long, leader',
                            onyomi: 'チョウ',
                            kunyomi: 'ながい',
                            choices: ['chou', 'nagai', 'taka', 'nagu'],
                            correctAnswer: 'nagai'
                        }
                    ]

                },
                {
                    id: 'cardFour', img: '/miguro_4.png', title: 'N2 Kanji',
                    characters: [
                        {
                            difficulty: 'N2',
                            character: '食',
                            meaning: 'eat, food',
                            onyomi: 'ショク',
                            kunyomi: 'たべる, くう',
                            choices: ['taberu', 'iku', 'aruku', 'miru'],
                            correctAnswer: 'taberu'
                        },
                        {
                            difficulty: 'N2',
                            character: '行',
                            meaning: 'go, conduct',
                            onyomi: 'コウ, ギョウ',
                            kunyomi: 'いく, おこなう',
                            choices: ['iku', 'kuru', 'aruku', 'taberu'],
                            correctAnswer: 'iku'
                        },
                        {
                            difficulty: 'N2',
                            character: '大',
                            meaning: 'big, large',
                            onyomi: 'ダイ, タイ',
                            kunyomi: 'おおきい',
                            choices: ['chiisai', 'takai', 'ookii', 'kawaii'],
                            correctAnswer: 'ookii'
                        },
                        {
                            difficulty: 'N2',
                            character: '出',
                            meaning: 'exit, go out',
                            onyomi: 'シュツ, スイ',
                            kunyomi: 'でる, だす',
                            choices: ['deru', 'iku', 'aruku', 'miru'],
                            correctAnswer: 'deru'
                        },
                        {
                            difficulty: 'N2',
                            character: '人',
                            meaning: 'person',
                            onyomi: 'ジン, ニン',
                            kunyomi: 'ひと',
                            choices: ['hito', 'kanojo', 'dare', 'neko'],
                            correctAnswer: 'hito'
                        },
                        {
                            difficulty: 'N2',
                            character: '見る',
                            meaning: 'see, look',
                            onyomi: 'ケン',
                            kunyomi: 'みる',
                            choices: ['miru', 'aruku', 'taberu', 'kiku'],
                            correctAnswer: 'miru'
                        },
                        {
                            difficulty: 'N2',
                            character: '新',
                            meaning: 'new',
                            onyomi: 'シン',
                            kunyomi: 'あたらしい, あらた',
                            choices: ['atarashii', 'furui', 'takai', 'kawaii'],
                            correctAnswer: 'atarashii'
                        },
                        {
                            difficulty: 'N2',
                            character: '自',
                            meaning: 'self',
                            onyomi: 'ジ',
                            kunyomi: 'みずから',
                            choices: ['jiko', 'hito', 'neko', 'kawa'],
                            correctAnswer: 'jiko'
                        },
                        {
                            difficulty: 'N2',
                            character: '作',
                            meaning: 'make, produce',
                            onyomi: 'サク, サ',
                            kunyomi: 'つくる',
                            choices: ['tsukuru', 'kiku', 'taberu', 'iku'],
                            correctAnswer: 'tsukuru'
                        },
                        {
                            difficulty: 'N2',
                            character: '学',
                            meaning: 'study, learning',
                            onyomi: 'ガク',
                            kunyomi: 'まなぶ',
                            choices: ['manabu', 'taberu', 'miru', 'aruku'],
                            correctAnswer: 'manabu'
                        },
                        {
                            difficulty: 'N2',
                            character: '高',
                            meaning: 'high, expensive',
                            onyomi: 'コウ',
                            kunyomi: 'たかい',
                            choices: ['takai', 'chiisai', 'kawaii', 'atarashii'],
                            correctAnswer: 'takai'
                        },
                        {
                            difficulty: 'N2',
                            character: '休',
                            meaning: 'rest, vacation',
                            onyomi: 'キュウ',
                            kunyomi: 'やすむ',
                            choices: ['yasumu', 'miru', 'aruku', 'taberu'],
                            correctAnswer: 'yasumu'
                        },
                        {
                            difficulty: 'N2',
                            character: '車',
                            meaning: 'car',
                            onyomi: 'シャ',
                            kunyomi: 'くるま',
                            choices: ['kuruma', 'neko', 'hito', 'kawa'],
                            correctAnswer: 'kuruma'
                        },
                        {
                            difficulty: 'N2',
                            character: '何',
                            meaning: 'what',
                            onyomi: 'カ, ナニ',
                            kunyomi: 'なに',
                            choices: ['nani', 'dare', 'itsu', 'kore'],
                            correctAnswer: 'nani'
                        },
                        {
                            difficulty: 'N2',
                            character: '週',
                            meaning: 'week',
                            onyomi: 'シュウ',
                            kunyomi: 'しゅう',
                            choices: ['shuu', 'tsuki', 'nen', 'jikan'],
                            correctAnswer: 'shuu'
                        },
                        {
                            difficulty: 'N2',
                            character: '年',
                            meaning: 'year',
                            onyomi: 'ネン',
                            kunyomi: 'とし',
                            choices: ['toshi', 'kawa', 'kanojo', 'hito'],
                            correctAnswer: 'toshi'
                        },
                        {
                            difficulty: 'N2',
                            character: '早',
                            meaning: 'early, fast',
                            onyomi: 'ソウ',
                            kunyomi: 'はやい',
                            choices: ['hayai', 'osoi', 'mizu', 'neko'],
                            correctAnswer: 'hayai'
                        },
                        {
                            difficulty: 'N2',
                            character: '分',
                            meaning: 'minute, understand',
                            onyomi: 'ブン, フン',
                            kunyomi: 'わかる, ふん',
                            choices: ['wakaru', 'kiku', 'aruku', 'taberu'],
                            correctAnswer: 'wakaru'
                        },
                        {
                            difficulty: 'N2',
                            character: '店',
                            meaning: 'store, shop',
                            onyomi: 'テン',
                            kunyomi: 'みせ',
                            choices: ['mise', 'kawa', 'neko', 'hito'],
                            correctAnswer: 'mise'
                        },
                        {
                            difficulty: 'N2',
                            character: '話',
                            meaning: 'talk, story',
                            onyomi: 'ワ',
                            kunyomi: 'はなす',
                            choices: ['hanasu', 'miru', 'aruku', 'kiku'],
                            correctAnswer: 'hanasu'
                        }
                    ]

                },
                {
                    id: 'cardFive', img: '/miguro_1.png', title: 'N1 Kanji',
                    characters: [
                        {
                            character: '儒',
                            meaning: 'Confucianism',
                            onyomi: 'ジュ',
                            kunyomi: '',
                            choices: ['Buddhism', 'Confucianism', 'Daoism', 'Law'],
                            correctAnswer: 'Confucianism'
                        },
                        {
                            character: '謹',
                            meaning: 'discreet / reverent',
                            onyomi: 'キン',
                            kunyomi: 'つつし.む',
                            choices: ['careless', 'arrogant', 'discreet / reverent', 'wild'],
                            correctAnswer: 'discreet / reverent'
                        },
                        {
                            character: '曖',
                            meaning: 'unclear / vague',
                            onyomi: 'アイ',
                            kunyomi: '',
                            choices: ['bright', 'unclear / vague', 'serene', 'obvious'],
                            correctAnswer: 'unclear / vague'
                        },
                        {
                            character: '諦',
                            meaning: 'resignation / clarity',
                            onyomi: 'テイ',
                            kunyomi: 'あきら.める',
                            choices: ['hope', 'resignation / clarity', 'denial', 'confusion'],
                            correctAnswer: 'resignation / clarity'
                        },
                        {
                            character: '謎',
                            meaning: 'riddle / puzzle',
                            onyomi: '',
                            kunyomi: 'なぞ',
                            choices: ['truth', 'history', 'riddle / puzzle', 'fact'],
                            correctAnswer: 'riddle / puzzle'
                        },
                        {
                            character: '曽',
                            meaning: 'formerly / once',
                            onyomi: 'ソウ, ソ',
                            kunyomi: 'かつ.て',
                            choices: ['never', 'formerly / once', 'tomorrow', 'recently'],
                            correctAnswer: 'formerly / once'
                        },
                        {
                            character: '燥',
                            meaning: 'dry up',
                            onyomi: 'ソウ',
                            kunyomi: 'はしゃ.ぐ',
                            choices: ['dry up', 'burn', 'soak', 'cool'],
                            correctAnswer: 'dry up'
                        },
                        {
                            character: '謙',
                            meaning: 'humble',
                            onyomi: 'ケン',
                            kunyomi: 'へりくだ.る',
                            choices: ['proud', 'boastful', 'humble', 'angry'],
                            correctAnswer: 'humble'
                        },
                        {
                            character: '醜',
                            meaning: 'ugly',
                            onyomi: 'シュウ',
                            kunyomi: 'みにく.い',
                            choices: ['ugly', 'beautiful', 'clean', 'strong'],
                            correctAnswer: 'ugly'
                        },
                        {
                            character: '襲',
                            meaning: 'attack / inherit',
                            onyomi: 'シュウ',
                            kunyomi: 'おそ.う',
                            choices: ['defend', 'attack / inherit', 'hide', 'escape'],
                            correctAnswer: 'attack / inherit'
                        },
                        {
                            character: '譲',
                            meaning: 'yield / defer',
                            onyomi: 'ジョウ',
                            kunyomi: 'ゆず.る',
                            choices: ['argue', 'yield / defer', 'take', 'ignore'],
                            correctAnswer: 'yield / defer'
                        },
                        {
                            character: '懲',
                            meaning: 'penal / chastise',
                            onyomi: 'チョウ',
                            kunyomi: 'こ.りる, こ.らす',
                            choices: ['reward', 'penal / chastise', 'ignore', 'assist'],
                            correctAnswer: 'penal / chastise'
                        },
                        {
                            character: '譜',
                            meaning: 'score / genealogy',
                            onyomi: 'フ',
                            kunyomi: '',
                            choices: ['plan', 'score / genealogy', 'history', 'music'],
                            correctAnswer: 'score / genealogy'
                        },
                        {
                            character: '謄',
                            meaning: 'copy / transcribe',
                            onyomi: 'トウ',
                            kunyomi: '',
                            choices: ['original', 'erase', 'copy / transcribe', 'print'],
                            correctAnswer: 'copy / transcribe'
                        },
                        {
                            character: '鎮',
                            meaning: 'tranquilize / subdue',
                            onyomi: 'チン',
                            kunyomi: 'しず.める',
                            choices: ['agitate', 'run', 'tranquilize / subdue', 'fight'],
                            correctAnswer: 'tranquilize / subdue'
                        },
                        {
                            character: '懐',
                            meaning: 'bosom / cherish',
                            onyomi: 'カイ',
                            kunyomi: 'ふところ, なつ.かしい',
                            choices: ['hate', 'bosom / cherish', 'run away', 'clean'],
                            correctAnswer: 'bosom / cherish'
                        },
                        {
                            character: '曇',
                            meaning: 'cloudy weather',
                            onyomi: 'ドン',
                            kunyomi: 'くも.る',
                            choices: ['clear sky', 'foggy', 'cloudy weather', 'storm'],
                            correctAnswer: 'cloudy weather'
                        },
                        {
                            character: '瞭',
                            meaning: 'clear / obvious',
                            onyomi: 'リョウ',
                            kunyomi: '',
                            choices: ['uncertain', 'dim', 'clear / obvious', 'lost'],
                            correctAnswer: 'clear / obvious'
                        },
                        {
                            character: '藍',
                            meaning: 'indigo',
                            onyomi: 'ラン',
                            kunyomi: 'あい',
                            choices: ['blue', 'green', 'red', 'indigo'],
                            correctAnswer: 'indigo'
                        },
                        {
                            character: '罷',
                            meaning: 'quit / resign',
                            onyomi: 'ヒ',
                            kunyomi: 'や.める',
                            choices: ['start', 'fight', 'quit / resign', 'join'],
                            correctAnswer: 'quit / resign'
                        }
                    ]
                },
            ],
            preview_answers: []

        }
    },
    mounted() {
        //this.getRandomKanji();
    },
    methods: {
        get_Index(id) {
            this.getRandomKanji(id);
            this.correct_answer = 0;
            this.wrong_answer = 0;
            this.preview_answer = false;
            this.disable_choices = false;
            this.timer();

        },
        checkAnswer(text) {
            text === this.cards[this.index].characters[0][this.rand].correctAnswer ? this.correct_answer++ : this.wrong_answer++;

            this.preview_answers.push(
                { kanji: this.cards[this.index].characters[0][this.rand].kanji, meaning: this.cards[this.index].characters[0][this.rand].meaning, correct_answer: this.cards[this.index].characters[0][this.rand].correctAnswer, user_answer: text }
            );
            console.log(this.preview_answers);
            this.getRandomKanji(this.index);

        },
        /* getRandomKanji(id) {
            this.index = id;
            this.rand = Math.floor(Math.random() * this.cards[this.index].characters.length);
            this.kanji = this.cards[this.index].characters[this.rand].character;
            this.meaning = this.cards[this.index].characters[this.rand].meaning;
            this.choices = this.cards[this.index].characters[this.rand].choices;
            this.difficulty = this.cards[this.index].characters[this.rand].difficulty;
            this.preview_answers.push(
                { kanji: this.kanji, correct_answer: this.cards[this.index].characters[this.rand].correctAnswer }
            );

        }, */
        timer() {
            if (this.intervalTime) {
                clearInterval(this.intervalTime);
            }
            this.intervalTime = setInterval(() => {
                if (this.time === 0) {
                    clearInterval(this.intervalTime);
                    this.preview_answer = true;
                    this.disable_choices = true;
                } else {
                    this.time--;
                }
            }, 1000);
            console.log('Interval started:', this.intervalTime);
            console.log('Initial time:', this.time);
        },
        resetTimer() {
            if (this.intervalTime) {
                clearInterval(this.intervalTime);
                this.intervalTime = null;
            }
            this.time = this.default_time;
            this.preview_answer = false;
            this.disable_choices = false;
            this.correct_answer = 0;
            this.wrong_answer = 0;
            this.preview_answers = [];
            console.log('Timer reset');
        },
        async getRandomKanji(id) {
            this.index = id;
            try {
                const result = await axios.get(`http://localhost:3000/getRandomKanji`);

                this.cards[this.index].characters.push(result.data);
                this.rand = Math.floor(Math.random() * this.cards[this.index].characters[0].length);
                this.kanji = this.cards[this.index].characters[0][this.rand].kanji;
                this.choices = this.cards[this.index].characters[0][this.rand].choices.split(',');
                console.log('Length: ', this.cards[this.index].characters[0].length)
                console.log('Random: ', this.rand)
                console.log('Index: ', this.index);
                console.log('Kanji: ', this.kanji);
            } catch (error) {
                console.error('There is an error calling the API.', error);
            }
        }

    }
}
</script>
<style scoped>
.card:hover {
    box-shadow: 1px 1px 5px gray, -1px -1px 5px gray;
    transition: .3s ease-in;
    cursor: pointer;
}

h2 {
    font-size: 4em;
}
</style>
