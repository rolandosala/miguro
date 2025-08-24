<template>
    <div class="row p-4">
        <h4>Flashcards</h4>
        <div class="row">
            <div class="col-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3" :data-bs-target="'#' + data.id" data-bs-toggle="modal" @click="get_Index(index)">
                    <div class="d-flex justify-content-center flex-column align-items-center ">
                        <img :src="data.img" alt="" style="width: 100%;">
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
                                <h5 class="">{{ meaning }}</h5>
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
                            <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="resetTimer">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GuessKanji from './GuessKanji.vue';
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
            time: 10,
            default_time: 10,
            intervalTime: null,
            preview_answer: false,
            disable_choices: false,
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Basic Kanji',
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
            ],
            preview_answers: []

        }
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
           text === this.cards[this.index].characters[this.rand].correctAnswer ? this.correct_answer++ : this.wrong_answer++;
            
            this.preview_answers.push(
                { kanji: this.cards[this.index].characters[this.rand].character, meaning: this.cards[this.index].characters[this.rand].meaning, correct_answer: this.cards[this.index].characters[this.rand].correctAnswer, user_answer: text }
            );
            console.log(this.preview_answers);
            this.getRandomKanji(this.index);

        },
        getRandomKanji(id) {
            this.index = id;
            this.rand = Math.floor(Math.random() * this.cards[this.index].characters.length);
            this.kanji = this.cards[this.index].characters[this.rand].character;
            this.meaning = this.cards[this.index].characters[this.rand].meaning;
            this.choices = this.cards[this.index].characters[this.rand].choices;
            this.difficulty = this.cards[this.index].characters[this.rand].difficulty;
            /* this.preview_answers.push(
                { kanji: this.kanji, correct_answer: this.cards[this.index].characters[this.rand].correctAnswer }
            ); */
            
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
