<template>
    <div class=" col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-column"
        v-if="!submit">
        <audio id="birdAudio" :src="'/audio/' + audio + '.mp3'" type="audio/mp3" autoplay>
            <!-- <source   /> -->
        </audio>

        <button class="btn btn-outline-success fs-1" @click="showQuestions">
            <i class="bi bi-play"></i></button>
        <p>Voice No. {{ count }}</p>
        <div class="form-floating mt-4 mb-3 col-12">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                v-model="user_answer">
            <label for="floatingInput">Your Answer</label>
        </div>
    </div>
    <div class=" col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-column"
        v-if="submit">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Correct Answer</th>
                    <th>Your Answer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in preview_answer">
                    <td>{{ data.no }}</td>
                    <td>{{ data.correctAnswer }}</td>
                    <td>{{ data.userAnswer }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal-footer col-sm-12 col-md-12 col-lg-12">
        <button class="btn btn-outline-info col-4" @click="nextQuestion" v-if="!submit">Next</button>
        <button class="btn btn-outline-danger col-4" @click="reset" v-if="submit">Reset</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            audio: '',
            answer: '',
            count: 1,
            user_answer: '',
            submit: false,
            preview_answer: [],
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.png', title: 'Basic Translation',
                    questions: [
                        {
                            audio: "Please",
                            answer: "Please"
                        },
                        {
                            audio: "Good Afternoon",
                            answer: "Good Afternoon"
                        },
                        {
                            audio: "Good Evening",
                            answer: "Good Evening"
                        },
                        {
                            audio: "Good Morning",
                            answer: "Good Morning"
                        },
                        {
                            audio: "Goodbye",
                            answer: "Goodbye"
                        },
                        {
                            audio: "Thank you",
                            answer: "Thank you"
                        },
                        {
                            audio: "Thats right",
                            answer: "Thats right"
                        },
                        {
                            audio: "Welcome",
                            answer: "Your Welcome"
                        },
                    ]

                }
            ],
        };
    },
    mounted() {
        //this.showQuestions();
    },
    methods: {
        showQuestions() {
            this.count;
            const rand = Math.floor(Math.random() * this.cards[0].questions.length)
            this.audio = this.cards[0].questions[rand].audio;
            this.answer = this.cards[0].questions[rand].answer;
        },
        nextQuestion() {
            if (this.count === this.cards[0].questions.length) {
                this.preview_answer.push({
                    no: this.count, userAnswer: this.user_answer, correctAnswer: this.answer
                });
                this.submit = true;
                console.log(this.count);
                console.log(this.preview_answer);
                return false;
            } else {
                this.showQuestions();
                this.preview_answer.push({
                    no: this.count, userAnswer: this.user_answer, correctAnswer: this.answer
                });
                this.count++;
                
                console.log(this.count)
                this.user_answer = '';
            }
        },
        reset() {
            this.count = 1;
            this.user_answer = '';
            this.submit = false;
            this.preview_answer = [];
        }
    }

};

</script>