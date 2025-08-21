<template>
    <div class="row p-lg-4 d-flex justify-content-center align-items-center">
        <h4 class="fs-2">N5 Practice</h4>
        <hr>
        <div class="row ">
            <div class="col-sm-6 col-md-6 col-lg-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3 shadow" :data-bs-target="'#' + data.id" data-bs-toggle="modal"
                    @click="get_Index(index)">
                    <div class="d-flex justify-content-center flex-column align-items-center ">
                        <img :src="data.img" alt="" style="width: 90%;">
                        <h5>{{ data.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" v-for="(item, index) in cards" :id="item.id" data-bs-backdrop="static"
        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ item.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="resetTimer"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center align-items-center flex-column" v-if="index === 0">
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
                    <div class="d-flex justify-content-center align-items-center flex-column text-center"
                        v-if="index === 1">
                        <h4>{{ vocabulary_count }}/10</h4>
                        <hr>
                        <h5 class="" style="">{{ vocabulary }}</h5>
                        <div class="col-12 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                            <button class="btn btn-outline-primary col-5 m-1" v-for="ch in choices"
                                @click="checkAnswer(ch)" :disabled="disable_choices">{{ ch }}</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-column" v-if="index === 2">
                        <ReadingComponent />
                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-column" v-if="index === 3">
                        <ListeningComponent />
                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-column" v-if="index === 4">
                        <GrammarComponent />
                    </div>
                </div>
                <div class="modal-footer  d-flex justify-content-center align-items-center" v-if="preview_answer">
                    <button class="btn btn-success col-6" data-bs-dismiss="modal" data-bs-target="#previewResult"
                        data-bs-toggle="modal">Preview Answers</button>
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="resetTimer"></button>
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
                            <tr v-for="data in preview_answers" class="bg-primary">
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.meaning }}</td>
                                <td>{{ data.correct_answer }}</td>
                                <td>{{ data.user_answer }}
                                    <span v-if="data.correct_answer === data.user_answer"
                                        class="badge text-bg-success">Correct</span>
                                    <span v-else class="badge text-bg-danger">Wrong</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer  d-flex justify-content-center align-items-center">
                    <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="resetTimer">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GuessKanji from './GuessKanji.vue';
import ReadingComponent from './ReadingComponent.vue';
import ListeningComponent from './ListeningComponent.vue';
import GrammarComponent from './GrammarComponent.vue';
import axios from 'axios';
export default {
    components: {
        GuessKanji, ReadingComponent, ListeningComponent, GrammarComponent
    },
    data() {
        return {
            card_index: '',
            index: '',
            kanji: '',
            vocabulary: '',
            choices: [],
            difficulty: '',
            meaning: '',
            correct_answer: 0,
            wrong_answer: 0,
            user_answer: '',
            rand: '',
            time: 10,
            default_time: 10,
            intervalTime: null,
            preview_answer: false,
            disable_choices: false,
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.png', title: 'Kanji Flashcards',
                    /*  characters: [] */
                    characters: [
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
                    ]
                },
                {
                    id: 'cardTwo', img: '/miguro_2.png', title: 'Vocabularies',
                    vocabulary: [
                        {
                            difficulty: 'N5',
                            question: '_______ 、えいがをみにいきませんか？',
                            english: 'day, sun',
                            romaji: '_______ 、ie ga o mini ikimasenka?',
                            choices: ['ゆうべ', 'きのう', 'あした', 'おととい'],
                            correctAnswer: 'あした'
                        },
                        {
                            difficulty: 'N5',
                            question: 'わたしはいつも　_______ をききながらべんきょうします。',
                            english: 'day, sun',
                            romaji: 'watashi wa itsumo ________ o kikina ga raben kyoushimasu.',
                            choices: ['ぺん', 'ラジオ', 'テーブル', 'ストーブ'],
                            correctAnswer: 'ラジオ'
                        },
                        {
                            difficulty: 'N5',
                            question: 'わたしのすきなのみものは　_______ です。',
                            english: 'day, sun',
                            romaji: 'watashi no sukina nomimono wa ______ desu.',
                            choices: ['おかし', 'こうちゃ', 'みかん', 'ねこ'],
                            correctAnswer: 'ラジオ'
                        },
                        {
                            difficulty: 'N5',
                            question: 'わたしはじてんしゃを　_______ もっています。',
                            english: 'day, sun',
                            romaji: 'watashi wa  jitensha o ______ motte imasu.',
                            choices: ['にだい', 'にさつ', 'にほん', 'にまい'],
                            correctAnswer: 'ラジオ'
                        },
                        {
                            difficulty: 'N5',
                            question: `この　_______ じしょはだれのですか？`,
                            english: 'day, sun',
                            romaji: 'kono ______ jijo wa dare no desu ka?',
                            choices: ['ほそい', 'まるい', 'みじかい', 'ちいさい'],
                            correctAnswer: 'ラジオ'
                        },
                    ]
                },
                {
                    id: 'cardThree', img: '/miguro_3.png', title: 'Reading',
                    paragraph: {
                        "japanese": "これは たなかさん の いぬ です。いぬ の なまえ は ポチ です。ポチ は しろい いぬ です。まいにち こうえん へ いきます。",
                        "romaji": "Kore wa Tanaka-san no inu desu. Inu no namae wa Pochi desu. Pochi wa shiroi inu desu. Mainichi kōen e ikimasu.",
                        "english": "This is Mr. Tanaka’s dog. The dog’s name is Pochi. Pochi is a white dog. He goes to the park every day."
                    },
                    questions: [
                        {
                            question: "いぬ の なまえ は なん ですか？",
                            romaji: "Inu no namae wa nan desu ka?",
                            english: "What is the dog's name?",
                            answer: "Pochi desu."
                        },
                        {
                            question: "ポチ は なにいろ ですか？",
                            romaji: "Pochi wa nani iro desu ka?",
                            english: "What color is Pochi?",
                            answer: "Shiroi desu."
                        },
                        {
                            question: "ポチ は まいにち どこへ いきますか？",
                            romaji: "Pochi wa mainichi doko e ikimasu ka?",
                            english: "Where does Pochi go every day?",
                            answer: "Kōen e ikimasu."
                        }
                    ]
                },
                {
                    id: 'cardFour', img: '/miguro_4.png', title: 'Listening',
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
                    id: 'cardFive', img: '/miguro_1.png', title: 'Grammar',
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
            preview_answers: [],
            vocabulary_count: 1,
        }
    },
    methods: {
        get_Index(id) {
            switch (id) {
                case 0:
                    this.getRandomKanji(id);
                    this.correct_answer = 0;
                    this.wrong_answer = 0;
                    this.preview_answer = false;
                    this.disable_choices = false;
                    this.timer();
                    break;
                case 1:
                    this.getRandomVocabulary(id);
                    break;

            }
            this.card_index = id;
        }, 
        checkAnswer(text) {
            if (this.card_index === 0) {
                text === this.cards[this.index].characters[this.rand].correctAnswer ? this.correct_answer++ : this.wrong_answer++;
                this.preview_answers.push(
                    { kanji: this.cards[this.index].characters[this.rand].character, meaning: this.cards[this.index].characters[this.rand].meaning, correct_answer: this.cards[this.index].characters[this.rand].correctAnswer, user_answer: text }
                );
                console.log(this.preview_answers);
                this.getRandomKanji(this.index);
            } else if (this.card_index === 1) {
                if (this.vocabulary_count === 10) {
                    this.preview_answer = true;
                    this.disable_choices = true;
                    this.preview_answers.push(
                        { kanji: this.cards[this.index].vocabulary[this.rand].question, correct_answer: this.cards[this.index].vocabulary[this.rand].correctAnswer, user_answer: text }
                    );
                } else {
                    this.vocabulary_count++;
                    this.preview_answers.push(
                        { kanji: this.cards[this.index].vocabulary[this.rand].question, correct_answer: this.cards[this.index].vocabulary[this.rand].correctAnswer, user_answer: text }
                    );
                    this.getRandomVocabulary(this.index);
                }


            }

        },
        getRandomKanji(id) {
            this.index = id;
            this.rand = Math.floor(Math.random() * this.cards[this.index].characters.length);
            this.kanji = this.cards[this.index].characters[this.rand].character;
            this.meaning = this.cards[this.index].characters[this.rand].meaning;
            this.choices = this.cards[this.index].characters[this.rand].choices;
            this.difficulty = this.cards[this.index].characters[this.rand].difficulty;

        },
        getRandomVocabulary(id) {
            this.index = id;
            this.rand = Math.floor(Math.random() * this.cards[this.index].vocabulary.length);
            this.vocabulary = this.cards[this.index].vocabulary[this.rand].question;
            this.meaning = this.cards[this.index].vocabulary[this.rand].english;
            this.choices = this.cards[this.index].vocabulary[this.rand].choices;

        },
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
            this.vocabulary_count = 1;
            /* console.log('Timer reset'); */
        },
        /* async getRandomKanji(id) {
            this.index = id;
            try {
                const result = await axios.get(`http://localhost:3000/getRandomKanji`);
 
                this.cards[this.index].characters.push(result.data);
                this.rand = Math.floor(Math.random() * this.cards[this.index].characters[0].length);
                this.kanji = this.cards[this.index].characters[0][this.rand].kanji;
                this.choices = this.cards[this.index].characters[0][this.rand].choices.split(',');
                /*                 console.log('Length: ', this.cards[this.index].characters[0].length)
                                console.log('Random: ', this.rand)
                                console.log('Index: ', this.index);
                                console.log('Kanji: ', this.kanji); 
            } catch (error) {
                console.error('There is an error calling the API.', error);
            }
        } */

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
