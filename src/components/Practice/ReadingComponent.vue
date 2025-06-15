<template>
    <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="paragraph" v-if="questions">
            <p><strong>{{ paragraph }}</strong></p>
            <div class="col-12 p-2">
                <div class="row ">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="switchRomaji"
                            @change="showRomaji">
                        <label class="form-check-label" for="switchRomaji">Romaji</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="switchEnglish"
                            @change="showEnglish">
                        <label class="form-check-label" for="switchEnglish">English</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="question d-flex justify-content-center align-items-center flex-column" v-if="!questions && !submit">
            <strong>Question {{ count }}</strong>
            <strong>{{ question }}</strong>
            <em v-if="show_romaji">{{ romaji }}</em>
            <span v-if="show_english">( {{ english }} )</span>
            <div class="form-floating mt-4 mb-3 col-12">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="user_answer">
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
        <div class="answers" v-if="submit">
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
        <div class="modal-footer" v-if="questions">
            <!-- <button class="btn btn-info col-6" data-bs-dismiss="modal" data-bs-target="#previewResult"
                data-bs-toggle="modal">Questions</button> -->
            <button class="btn btn-info col-6" @click="startQuestion">Questions</button>
        </div>
        <div class="modal-footer" v-if="!questions">
            <button class="btn btn-outline-primary col-4" @click="nextQuestion" v-if="!submit">Next</button>
            <!--  <button class="btn btn-info col-4" @click="SubmitandPreview" v-if="submit">Check Answer</button> -->
            <button class="btn btn-danger  col-4" data-bs-dismiss="modal" v-if="submit" @click="reset">Close</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            paragraph: '',
            questions: true,
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
            paragraphs: [
                {
                    japanese: "これは たなかさん の いぬ です。いぬ の なまえ は ポチ です。ポチ は しろい いぬ です。まいにち こうえん へ いきます。",
                    romaji: "Kore wa Tanaka-san no inu desu. Inu no namae wa Pochi desu. Pochi wa shiroi inu desu. Mainichi kōen e ikimasu.",
                    english: "This is Mr. Tanaka’s dog. The dog’s name is Pochi. Pochi is a white dog. He goes to the park every day.",
                    questions: [
                        {
                            question: "",
                            romaji: "",
                            english: "",
                            answer: ""
                        },
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
                    japanese: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni molestias vitae rem alias exercitationem earum, minima quia dicta expedita repellat dolorem maxime natus! Repudiandae sed quia dolore similique corrupti.",
                    romaji: "Kore wa Tanaka-san no inu desu. Inu no namae wa Pochi desu. Pochi wa shiroi inu desu. Mainichi kōen e ikimasu.",
                    english: "This is Mr. Tanaka’s dog. The dog’s name is Pochi. Pochi is a white dog. He goes to the park every day.",
                    questions: [
                        {
                            question: "",
                            romaji: "",
                            english: "",
                            answer: ""
                        },
                        {
                            question: "Lorem, ipsum dolor sit",
                            romaji: "Inu no namae wa nan desu ka?",
                            english: "What is the dog's name?",
                            answer: "Pochi desu."
                        },
                        {
                            question: "consectetur adipisicing elit.",
                            romaji: "Pochi wa nani iro desu ka?",
                            english: "What color is Pochi?",
                            answer: "Shiroi desu."
                        },
                        {
                            question: "Repudiandae magni molestias vitae",
                            romaji: "Pochi wa mainichi doko e ikimasu ka?",
                            english: "Where does Pochi go every day?",
                            answer: "Kōen e ikimasu."
                        }
                    ]
                },
            ],

        }
    },
    mounted() {
        this.showRomaji();
        this.showEnglish();
        this.showQuestions();
        this.showRandomParagraph();
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
        showRandomParagraph(){
            let random = Math.floor(Math.random() * this.paragraphs.length);
            this.paragraph = this.paragraphs[random].japanese;
            console.log(random);
        },
        startQuestion() {
            this.questions = false;
        },
        showQuestions() {
            this.question = this.paragraphs[0].questions[this.count].question;
            this.romaji = this.paragraphs[0].questions[this.count].romaji;
            this.english = this.paragraphs[0].questions[this.count].english;
            this.answer = this.paragraphs[0].questions[this.count].answer;
        },

        nextQuestion() {
            if (this.user_answer == '') {
                alert('Please write your answer')
            } else {
                /*                 console.log(this.count); */
                this.preview_answer.push({ question: this.question, romaji: this.romaji, english: this.english, answer: this.answer, userAnswer: this.user_answer });
                if (this.count == this.paragraphs[0].questions.length - 1) {
                    //this.count = this.paragraph[0].questions.length - 1;
                    console.log(this.count)
                    this.submit = true;
                } else {
                    this.count++;
                    console.log(this.count)
                }
                this.showQuestions();

                this.user_answer = '';
            }
        },
        reset() {
            this.count = 1;
            this.preview_answer = [];
            this.submit = false;
            this.questions = true;
        }
    }

};

</script>