<template>
    <div class="row p-4">
        <h4>Translation</h4>
        <hr>
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
                            <div class="d-flex justify-content-center align-items-center flex-column" v-if="hide">
                                <h3>{{ count }} / {{ limit }}</h3>
                                <hr/>
                                <h1 class="" style="font-size: 1.5em;">{{ kana }}</h1>
                                <h6 class="">{{ romaji }}</h6>
                                <div class="form-floating mt-3 col-12">
                                    <input type="text" class="form-control" id="floatingInput"
                                        placeholder="name@example.com" v-model="user_answer">
                                    <label for="floatingInput">Your English Translation</label>
                                </div>

                                <div class="col-8 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                                    <button class="btn btn-outline-primary m-1 form-control" @click="checkAnswer">{{ btn_check }}</button>
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
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Preview Answers</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Kana</th>
                                        <th>Romaji</th>
                                        <th>Meaning</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in preview_answers">
                                        <td>{{ data.kana }}</td>
                                        <td>{{ data.romaji }}</td>
                                        <td>{{ data.meaning }}</td>
                                        <td>{{ data.userAnswer }}</td>
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
export default {
    components: {
        GuessKanji
    },
    data() {
        return {
            index: '',
            kana: '',
            romaji: '',
            meaning: '',
            user_answer: '',
            rand: '',
            time: 10,
            default_time: 10,
            intervalTime: null,
            preview_answer: false,
            hide: true,
            limit: 10,
            count: 1,
            btn_check: 'Next',
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.png', title: 'Level 1',
                    translations: [
                        {
                            id: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                {
                    id: 'cardTwo', img: '/miguro_1.png', title: 'Level 2',
                    translations: [
                        {
                            id: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                {
                    id: 'cardThree', img: '/miguro_1.png', title: 'Level 3',
                    translations: [
                        {
                            id: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                {
                    id: 'cardFour', img: '/miguro_1.png', title: 'Level 4',
                    translations: [
                        {
                            id: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                {
                    id: 'cardFive', img: '/miguro_1.png', title: 'Level 5',
                    translations: [
                        {
                            id: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                
            ],
            preview_answers: []

        }
    },
    methods: {
        get_Index(id) {
            this.getRandomSentence(id);
            this.preview_answer = false;
        },
        checkAnswer() {
            this.preview_answers.push(
                { kana: this.cards[this.index].translations[this.rand].japanese, romaji: this.cards[this.index].translations[this.rand].romaji, meaning: this.cards[this.index].translations[this.rand].english, userAnswer: this.user_answer }
            );
            console.log(this.preview_answers);
            this.getRandomSentence(this.index);
            this.count++;
            this.user_answer = '';
            if(this.count > this.limit){
                //this.kana = 'Limit Reached';
                this.hide = false;
                this.preview_answer = true;
            } else if(this.count == this.limit){
                this.btn_check = 'Submit'
            }

        },
        getRandomSentence(id) {
            this.index = id;
            this.rand = Math.floor(Math.random() * this.cards[this.index].translations.length);
            this.kana = this.cards[this.index].translations[this.rand].japanese;
            this.romaji = this.cards[this.index].translations[this.rand].romaji;
            this.meaning = this.cards[this.index].translations[this.rand].english;

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
