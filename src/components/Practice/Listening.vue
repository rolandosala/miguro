<template>
    <div class="row p-4">
        <h4>Listening Practice</h4>
        <hr>
        <div class="row">
            <div class="col-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3" :data-bs-target="'#' + data.id" data-bs-toggle="modal">
                    <div class="d-flex justify-content-center flex-column align-items-center " @click="showQuestions">
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
                                <audio id="birdAudio" :src="'/audio/' + audio + '.mp3'" type="audio/mp3" autoplay>
                                    <!-- <source   /> -->
                                </audio>

                                <button class="btn btn-outline-success fs-1"
                                    onclick="document.getElementById('birdAudio').play()">
                                    <i class="bi bi-play"></i></button>
                                <p>{{ count }}</p>
                                <div class="form-floating mt-4 mb-3 col-12">
                                    <input type="text" class="form-control" id="floatingInput"
                                        placeholder="name@example.com" v-model="user_answer">
                                    <label for="floatingInput">Your Answer</label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-info col-4" @click="nextQuestion"
                                v-if="!submit">Next</button>
                            <button class="btn btn-outline-info col-4" @click="reset" v-if="submit"
                                data-bs-dismiss="modal" data-bs-target="#previewResult"
                                data-bs-toggle="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="previewResult" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Result</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
                        <div class="modal-footer">
                            <button class="btn btn-danger col-4" data-bs-dismiss="modal">Close</button>
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
            if (this.count >= this.cards[0].questions.length) {
                this.count++;
                this.preview_answer.push({
                    no: this.count - 1, userAnswer: this.user_answer, correctAnswer: this.answer
                });
                this.submit = true;
                return false;
            } else {
                this.count++;
                this.preview_answer.push({
                    no: this.count - 1, userAnswer: this.user_answer, correctAnswer: this.answer
                });
                this.showQuestions();
                this.user_answer = '';
                console.log(this.preview_answer);
            }
        },
        reset() {
            this.count = 1;
            this.user_answer = '';
            this.submit = false;
        }
    }

};

</script>