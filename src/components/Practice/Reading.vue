<template>
    <div class="row p-4">
        <h4>Reading Practice</h4>
        <hr>
        <div class="row">
            <div class="col-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3" :data-bs-target="'#' + data.id" data-bs-toggle="modal">
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
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center align-items-center flex-column">
                                <p><strong>{{ data.paragraph.japanese }}</strong></p>
                                <p v-if="show_romaji"><em>{{ data.paragraph.romaji }}</em></p>
                                <p v-if="show_english">{{ data.paragraph.english }}</p>
                                <div class="col-12 p-2">
                                    <div class="row ">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="switchRomaji" @change="showRomaji">
                                            <label class="form-check-label" for="switchRomaji">Romaji</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="switchEnglish" @change="showEnglish">
                                            <label class="form-check-label" for="switchEnglish">English</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-info col-6" data-bs-dismiss="modal" data-bs-target="#previewResult"
                                data-bs-toggle="modal">Questions</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="previewResult" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Questions</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center align-items-center flex-column"
                            v-if="!submit">
                            <strong>{{ question }}</strong>
                            <em v-if="show_romaji">{{ romaji }}</em>
                            <span v-if="show_english">( {{ english }} )</span>
                            <div class="form-floating mt-4 mb-3 col-12">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name@example.com" v-model="user_answer">
                                <label for="floatingInput">Your Answer</label>
                            </div>
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="switchEnglish"
                                            @change="showRomaji">
                                        <label class="form-check-label" for="switchEnglish">Romaji</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="switchEnglish"
                                            @change="showEnglish">
                                        <label class="form-check-label" for="switchEnglish">English</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body" v-if="submit">
                            <h3>Answer</h3>
                            <div>
                                <ol>
                                    <li v-for="data in preview_answer" class="mt-2">
                                        <b>{{ data.question }}</b><br>
                                        <em>{{ data.romaji }}</em><br>
                                        {{ data.english }} <br>
                                        Correct Answer: <b>{{ data.answer }}</b><br>
                                        Your Answer: <u>{{ data.userAnswer }}</u>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-info col-4" @click="nextQuestion" v-if="!submit">Next</button>
                            <button class="btn btn-danger  col-4" data-bs-dismiss="modal" @click="SubmitandPreview" v-if="submit">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show_romaji: true,
            show_romaji_text: '',
            show_english_text: '',
            show_english: true,
            question: '',
            romaji: '',
            english: '',
            answer: '',
            count: 1,
            user_answer: '',
            submit: false,
            preview_answer: [],
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.png', title: 'N5 Kanji',
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
                }
            ],
        };
    },
    mounted() {
        this.showRomaji();
        this.showEnglish();
        this.showQuestions();
        console.log(this.cards[0].questions);
    },
    methods: {
        showRomaji() {
            this.show_romaji = !this.show_romaji;
            this.show_romaji_text = this.show_romaji ? 'Hide Romaji' : 'Show Romaji';
        },
        showEnglish() {
            this.show_english = !this.show_english;
            this.show_english_text = this.show_english ? 'Hide English' : 'Show English';
        },
        showQuestions() {
            this.question = this.cards[0].questions[this.count].question;
            this.romaji = this.cards[0].questions[this.count].romaji;
            this.english = this.cards[0].questions[this.count].english;
            this.answer = this.cards[0].questions[this.count].answer;
        },
        nextQuestion() {
            if (this.user_answer == '') {
                alert('Please write your answer')
            } else {
                console.log(this.count);
                this.preview_answer.push({ question: this.question, romaji: this.romaji, english: this.english, answer: this.answer, userAnswer: this.user_answer });
                if (this.count == this.cards[0].questions.length - 1) {
                    //this.count = this.cards[0].questions.length - 1;

                    this.submit = true;
                } else {
                    this.count++;
                }
                this.showQuestions();

                this.user_answer = '';
            }
        },
        SubmitandPreview() {
            console.log(this.preview_answer);
        }
    }

};

</script>