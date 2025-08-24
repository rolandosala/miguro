<template>
    <div class="row p-4">
        <h4 class="fs-4">Grammar Exercise</h4>
        <hr>
        <div class="row">
            <div class="col-3 mt-4" v-for="(data, index) in cards">
                <div class="card p-3" :data-bs-target="'#' + data.id" data-bs-toggle="modal">
                    <div class="d-flex justify-content-center flex-column align-items-center " @click="getItem(index)">
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
                                @click="reset"></button>
                        </div>
                        <div class="modal-body">
                            <div
                                class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-column">
                                <h3>{{ count }} /{{ limit }}</h3>
                                <h5 class="mt-3">{{ sentence }}</h5>
                                <h6>{{ kana }}</h6>
                                <div class="col-12 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                                    <button class="btn btn-outline-primary col-5 m-1" v-for="(choice, index) in choices"
                                        @click="nextItem(choice)" :disabled="btnPreview">
                                        {{ choice }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer  d-flex justify-content-center align-items-center"
                            v-if="preview_answer">
                            <button class="btn btn-success col-6" data-bs-dismiss="modal"
                                data-bs-target="#previewResult" data-bs-toggle="modal" v-if="btnPreview">Preview
                                Answers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="previewResult" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header d-flex justify-content-between align-item-center">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Preview Answers</h1>
                            <h3>{{ correctCount }} / {{ limit }}</h3>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Sentence</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data, index) in preview_answer">
                                        <td>{{ index + 1 }}. {{ data.sentence }}</td>
                                        <td>{{ data.answer }}</td>
                                        <td>{{ data.userAnswer }}
                                            <i class="bi bi-check-circle-fill text-success"
                                                v-if="data.answer === data.userAnswer"></i>
                                            <i class="bi bi-x-circle-fill text-danger" v-else></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer  d-flex justify-content-center align-items-center">
                            <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="reset">Close</button>
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
            index: 0,
            correctCount: 0,
            count: 1,
            limit: 10,
            sentence: '',
            kana: '',
            answer: '',
            choices: [],
            user_answer: '',
            btnPreview: false,
            preview_answer: [],
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Level 1',
                    phrase: [
                        { japanese: 'デパート _______ 行きます。', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'ケーキ _______  作ります。', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: '新聞 _______ 読みます。', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: '映画 _______ 見ます。', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: '洋服 _______ 買います。', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                    ]
                },
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Level 2',
                    phrase: [
                        { japanese: 'sdf', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                    ]
                },
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Level 3',
                    phrase: [
                        { japanese: 'sdf', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                    ]
                },
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Level 4',
                    phrase: [
                        { japanese: 'sdf', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                    ]
                },
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Level 5',
                    phrase: [
                        { japanese: 'sdf', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                        { japanese: 'sdf', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                    ]
                },
            ],
        }
    },
    methods: {
        getItem() {
            let random = Math.floor(Math.random() * this.cards[this.index].phrase.length);
            this.sentence = this.cards[this.index].phrase[random].japanese;
            this.choices = this.cards[this.index].phrase[random].choices;
            this.answer = this.cards[this.index].phrase[random].answer;
        },
        nextItem(item) {
            this.answer === item ? this.correctCount++ : ''
            this.preview_answer.push({ sentence: this.sentence, answer: this.answer, userAnswer: item })
            if (this.count === this.limit) {
                this.btnPreview = true
            } else {
                this.count++
                this.getItem()
            }

        },
        reset() {
            this.preview_answer = []
            this.count = 1
            this.btnPreview = false
            this.correctCount = 0
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
