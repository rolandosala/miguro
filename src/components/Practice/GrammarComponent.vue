<template>
    <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-column">
        <h3>{{ count }} /10</h3>
        <h5 class="mt-3">{{ sentence }}</h5>
        <h6>{{ kana }}</h6>
        <div class="col-12 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
            <button class="btn btn-outline-primary col-5 m-1" v-for="ch in choices" @click="nextSentence(ch)">{{ ch
                }}</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 1,
            sentence: '',
            kana: '',
            answer: '',
            choices: [],
            preview_answer: [],
            sentence_array: [
                { japanese: 'デパート _______ 行きます。', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                { japanese: 'ケーキ _______  作ります。', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '新聞 _______ 読みます。', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '映画 _______ 見ます。', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '洋服 _______ 買います。', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                {
                    japanese: "本 _______ 読みます。",
                    kana: "Hon _____ yomimasu.",
                    english: "I read a book.",
                    answer: "を",
                    choices: ["を", "に", "で", "が"]
                },
                {
                    japanese: "学校 _______ 行きます。",
                    kana: "Gakkou _____ ikimasu.",
                    english: "I go to school.",
                    answer: "に",
                    choices: ["に", "を", "が", "で"]
                },
                {
                    japanese: "先生 _______ 話します。",
                    kana: "Sensei _____ hanashimasu.",
                    english: "I talk to the teacher.",
                    answer: "に",
                    choices: ["に", "と", "が", "を"]
                },
                {
                    japanese: "日本語 _______ 勉強します。",
                    kana: "Nihongo _____ benkyou shimasu.",
                    english: "I study Japanese.",
                    answer: "を",
                    choices: ["を", "に", "が", "で"]
                },
                {
                    japanese: "図書館 _______ 勉強します。",
                    kana: "Toshokan _____ benkyou shimasu.",
                    english: "I study at the library.",
                    answer: "で",
                    choices: ["で", "に", "を", "が"]
                },
                {
                    japanese: "友だち _______ 会います。",
                    kana: "Tomodachi _____ aimasu.",
                    english: "I meet my friend.",
                    answer: "に",
                    choices: ["に", "と", "で", "が"]
                },
                {
                    japanese: "音楽 _______ 聞きます。",
                    kana: "Ongaku _____ kikimasu.",
                    english: "I listen to music.",
                    answer: "を",
                    choices: ["を", "に", "で", "が"]
                },
                {
                    japanese: "バス _______ 学校へ行きます。",
                    kana: "Basu _____ gakkou e ikimasu.",
                    english: "I go to school by bus.",
                    answer: "で",
                    choices: ["で", "を", "に", "が"]
                },
                {
                    japanese: "猫 _______ 好きです。",
                    kana: "Neko _____ suki desu.",
                    english: "I like cats.",
                    answer: "が",
                    choices: ["が", "を", "に", "で"]
                },
                {
                    japanese: "家 _______ 帰ります。",
                    kana: "Ie _____ kaerimasu.",
                    english: "I return home.",
                    answer: "に",
                    choices: ["に", "で", "を", "が"]
                }
            ]
        }
    },
    mounted() {
        this.getSentence();
    },
    methods: {
        getSentence() {
            let random = Math.floor(Math.random() * this.sentence_array.length);
            this.sentence = this.sentence_array[random].japanese;
            this.kana = this.sentence_array[random].kana;
            this.answer = this.sentence_array[random].answer;
            this.choices = this.sentence_array[random].choices;
        },
        nextSentence(userAnswer) {
            if (this.count == 10) {
                console.log('limit reached');
                this.preview_answer.push(
                    { sentence: this.sentence, answer: this.answer, user_answer: userAnswer }
                )
                console.log(this.preview_answer);
            } else {
                this.preview_answer.push(
                    { sentence: this.sentence, answer: this.answer, user_answer: userAnswer }
                )
                this.count++;
                this.getSentence();
            }

        }
    }
}
</script>