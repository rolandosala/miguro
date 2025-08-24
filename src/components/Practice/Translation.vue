<template>
    <div class="row p-4">
        <h4 class="fs-4">Translation Exercise</h4>
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
                                @click="reset"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center align-items-center flex-column" v-if="hide">
                                <h3>{{ count }} / {{ limit }}</h3>
                                <hr />
                                <h1 class="" style="font-size: 1.5em;">{{ kana }}</h1>
                                <h6 class="">{{ romaji }}</h6>
                                <div class="form-floating mt-3 col-12">
                                    <input type="text" class="form-control" id="floatingInput"
                                        placeholder="name@example.com" v-model="user_answer">
                                    <label for="floatingInput">Your English Translation</label>
                                </div>

                                <div class="col-8 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                                    <button class="btn btn-outline-primary m-1 form-control" @click="checkAnswer">{{
                                        btn_check }}</button>
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
                                @click="reset">Close</button>
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
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Translation 1',
                    translations: [
                        {
                            id: 1,
                            level: 1,
                            japanese: "これは　りんごです。",
                            romaji: "Kore wa ringo desu.",
                            english: "This is an apple."
                        },
                        {
                            id: 2,
                            level: 1,
                            japanese: "ねこが　います。",
                            romaji: "Neko ga imasu.",
                            english: "There is a cat."
                        },
                        {
                            id: 3,
                            level: 1,
                            japanese: "わたしは　がくせいです。",
                            romaji: "Watashi wa gakusei desu.",
                            english: "I am a student."
                        },
                        {
                            id: 4,
                            level: 1,
                            japanese: "いぬは　そとに　います。",
                            romaji: "Inu wa soto ni imasu.",
                            english: "The dog is outside."
                        },
                        {
                            id: 5,
                            level: 1,
                            japanese: "でんしゃで　いきます。",
                            romaji: "Densha de ikimasu.",
                            english: "I go by train."
                        },
                        {
                            id: 6,
                            level: 1,
                            japanese: "みずを　のみます。",
                            romaji: "Mizu o nomimasu.",
                            english: "I drink water."
                        },
                        {
                            id: 7,
                            level: 1,
                            japanese: "きのう、えいがを　みました。",
                            romaji: "Kinō, eiga o mimashita.",
                            english: "I watched a movie yesterday."
                        },
                        {
                            id: 8,
                            level: 1,
                            japanese: "としょかんは　どこですか？",
                            romaji: "Toshokan wa doko desu ka?",
                            english: "Where is the library?"
                        },
                        {
                            id: 9,
                            level: 1,
                            japanese: "あさごはんを　たべましたか？",
                            romaji: "Asagohan o tabemashita ka?",
                            english: "Did you eat breakfast?"
                        },
                        {
                            id: 10,
                            level: 1,
                            japanese: "にほんごを　べんきょうしています。",
                            romaji: "Nihongo o benkyō shiteimasu.",
                            english: "I am studying Japanese."
                        }
                    ]
                },
                {
                    id: 'cardTwo', img: '/miguro_1.webp', title: 'Translation 2',
                    translations: [
                        {
                            id: 11,
                            level: 2,
                            japanese: "このほんは　おもしろいです。",
                            romaji: "Kono hon wa omoshiroi desu.",
                            english: "This book is interesting."
                        },
                        {
                            id: 12,
                            level: 2,
                            japanese: "きょうは　あついですから、みずを　たくさん　のみましょう。",
                            romaji: "Kyō wa atsui desu kara, mizu o takusan nomimashō.",
                            english: "Since it is hot today, let’s drink a lot of water."
                        },
                        {
                            id: 13,
                            level: 2,
                            japanese: "バスより　でんしゃのほうが　はやいです。",
                            romaji: "Basu yori densha no hō ga hayai desu.",
                            english: "The train is faster than the bus."
                        },
                        {
                            id: 14,
                            level: 2,
                            japanese: "スーパーで　やさいと　くだものを　かいました。",
                            romaji: "Sūpā de yasai to kudamono o kaimashita.",
                            english: "I bought vegetables and fruits at the supermarket."
                        },
                        {
                            id: 15,
                            level: 2,
                            japanese: "ともだちと　いっしょに　こうえんで　さんぽしました。",
                            romaji: "Tomodachi to issho ni kōen de sanpo shimashita.",
                            english: "I took a walk in the park with my friend."
                        },
                        {
                            id: 16,
                            level: 2,
                            japanese: "こんばん、いっしょに　ばんごはんを　たべませんか？",
                            romaji: "Konban, issho ni bangohan o tabemasen ka?",
                            english: "Shall we eat dinner together tonight?"
                        },
                        {
                            id: 17,
                            level: 2,
                            japanese: "にほんの　りょうりを　つくってみたいです。",
                            romaji: "Nihon no ryōri o tsukutte mitai desu.",
                            english: "I want to try making Japanese food."
                        },
                        {
                            id: 18,
                            level: 2,
                            japanese: "せんしゅう、ふじさんに　のぼりました。",
                            romaji: "Senshū, Fujisan ni noborimashita.",
                            english: "I climbed Mt. Fuji last week."
                        },
                        {
                            id: 19,
                            level: 2,
                            japanese: "にほんへ　いったら、きょうとに　いきたいです。",
                            romaji: "Nihon e ittara, Kyōto ni ikitai desu.",
                            english: "If I go to Japan, I want to visit Kyoto."
                        },
                        {
                            id: 20,
                            level: 2,
                            japanese: "しゅくだいを　してから、テレビを　みます。",
                            romaji: "Shukudai o shite kara, terebi o mimasu.",
                            english: "I will watch TV after doing my homework."
                        }
                    ]

                },
                {
                    id: 'cardThree', img: '/miguro_1.webp', title: 'Translation 3',
                    translations: [
                        {
                            id: 21,
                            level: 3,
                            japanese: "おんがくを　ききながら　べんきょうします。",
                            romaji: "Ongaku o kikinagara benkyō shimasu.",
                            english: "I study while listening to music."
                        },
                        {
                            id: 22,
                            level: 3,
                            japanese: "にほんへ　いったことが　ありますか？",
                            romaji: "Nihon e itta koto ga arimasu ka?",
                            english: "Have you ever been to Japan?"
                        },
                        {
                            id: 23,
                            level: 3,
                            japanese: "おかしを　たべすぎて　おなかが　いたいです。",
                            romaji: "Okashi o tabesugite onaka ga itai desu.",
                            english: "I ate too many sweets, and now my stomach hurts."
                        },
                        {
                            id: 24,
                            level: 3,
                            japanese: "かぜを　ひいてしまいました。",
                            romaji: "Kaze o hiite shimaimashita.",
                            english: "I caught a cold (unfortunately)."
                        },
                        {
                            id: 25,
                            level: 3,
                            japanese: "あしたまでに　このしごとを　しなければなりません。",
                            romaji: "Ashita made ni kono shigoto o shinakereba narimasen.",
                            english: "I must finish this work by tomorrow."
                        },
                        {
                            id: 26,
                            level: 3,
                            japanese: "あめが　ふるかもしれません。",
                            romaji: "Ame ga furu kamoshiremasen.",
                            english: "It might rain."
                        },
                        {
                            id: 27,
                            level: 3,
                            japanese: "まいにち、はやく　おきるように　しています。",
                            romaji: "Mainichi, hayaku okiru yō ni shiteimasu.",
                            english: "I try to wake up early every day."
                        },
                        {
                            id: 28,
                            level: 3,
                            japanese: "ここで　たばこを　すってはいけません。",
                            romaji: "Koko de tabako o sutte wa ikemasen.",
                            english: "You must not smoke here."
                        },
                        {
                            id: 29,
                            level: 3,
                            japanese: "ともだちに　ほんを　かしてあげました。",
                            romaji: "Tomodachi ni hon o kashite agemashita.",
                            english: "I lent a book to my friend."
                        },
                        {
                            id: 30,
                            level: 3,
                            japanese: "せんせいに　にほんごを　おしえてもらいました。",
                            romaji: "Sensei ni Nihongo o oshiete moraimashita.",
                            english: "I was taught Japanese by my teacher."
                        }
                    ]

                },
                {
                    id: 'cardFour', img: '/miguro_1.webp', title: 'Translation 4',
                    translations: [
                        {
                            id: 31,
                            level: 4,
                            japanese: "じかんが　あれば、ほんを　よみます。",
                            romaji: "Jikan ga areba, hon o yomimasu.",
                            english: "If I have time, I will read a book."
                        },
                        {
                            id: 32,
                            level: 4,
                            japanese: "にほんに　いくなら、きょうとに　いったほうがいいですよ。",
                            romaji: "Nihon ni iku nara, Kyōto ni itta hō ga ii desu yo.",
                            english: "If you go to Japan, you should visit Kyoto."
                        },
                        {
                            id: 33,
                            level: 4,
                            japanese: "らいねん　にほんへ　りゅうがくしようと　おもっています。",
                            romaji: "Rainen Nihon e ryūgaku shiyō to omotteimasu.",
                            english: "I’m thinking of studying abroad in Japan next year."
                        },
                        {
                            id: 34,
                            level: 4,
                            japanese: "ともだちが　くるまえに、へやを　そうじしておきます。",
                            romaji: "Tomodachi ga kuru mae ni, heya o sōji shite okimasu.",
                            english: "I will clean the room before my friend comes (in preparation)."
                        },
                        {
                            id: 35,
                            level: 4,
                            japanese: "このくつを　はいてみても　いいですか？",
                            romaji: "Kono kutsu o haite mite mo ii desu ka?",
                            english: "May I try on these shoes?"
                        },
                        {
                            id: 36,
                            level: 4,
                            japanese: "わたしは　せんせいに　ほめられました。",
                            romaji: "Watashi wa sensei ni homeraremashita.",
                            english: "I was praised by my teacher."
                        },
                        {
                            id: 37,
                            level: 4,
                            japanese: "かいしゃは　あたらしいルールを　まもらせます。",
                            romaji: "Kaisha wa atarashii rūru o mamorasemasu.",
                            english: "The company makes us follow the new rules."
                        },
                        {
                            id: 38,
                            level: 4,
                            japanese: "あしたは　あめが　ふるそうです。",
                            romaji: "Ashita wa ame ga furu sō desu.",
                            english: "I heard it will rain tomorrow."
                        },
                        {
                            id: 39,
                            level: 4,
                            japanese: "せんせいは　わたしたちに　べんきょうするように　いいました。",
                            romaji: "Sensei wa watashitachi ni benkyō suru yō ni iimashita.",
                            english: "The teacher told us to study."
                        },
                        {
                            id: 40,
                            level: 4,
                            japanese: "もっと　やさいを　たべたほうが　いいですよ。",
                            romaji: "Motto yasai o tabeta hō ga ii desu yo.",
                            english: "You had better eat more vegetables."
                        }
                    ]

                },
                {
                    id: 'cardFive', img: '/miguro_1.webp', title: 'Translation 5',
                    translations: [
                        {
                            id: 41,
                            level: 5,
                            japanese: "あめがふっても、さんぽに　いきます。",
                            romaji: "Ame ga futte mo, sanpo ni ikimasu.",
                            english: "Even if it rains, I will go for a walk."
                        },
                        {
                            id: 42,
                            level: 5,
                            japanese: "べんきょうすればするほど、にほんごが　たのしくなります。",
                            romaji: "Benkyō sureba suru hodo, Nihongo ga tanoshiku narimasu.",
                            english: "The more I study, the more fun Japanese becomes."
                        },
                        {
                            id: 43,
                            level: 5,
                            japanese: "らいしゅうから　まいにち　はしることにしました。",
                            romaji: "Raishū kara mainichi hashiru koto ni shimashita.",
                            english: "I decided to run every day starting next week."
                        },
                        {
                            id: 44,
                            level: 5,
                            japanese: "けんこうのために、まいにち　やさいを　たべるようにしています。",
                            romaji: "Kenkō no tame ni, mainichi yasai o taberu yō ni shiteimasu.",
                            english: "For my health, I try to eat vegetables every day."
                        },
                        {
                            id: 45,
                            level: 5,
                            japanese: "かれは　もうすぐ　けっこんするらしいです。",
                            romaji: "Kare wa mōsugu kekkon suru rashii desu.",
                            english: "It seems he will get married soon."
                        },
                        {
                            id: 46,
                            level: 5,
                            japanese: "こんどのしあいで　ぜったい　かってみせます。",
                            romaji: "Kondo no shiai de zettai katte misemasu.",
                            english: "In the next match, I’ll definitely win (I’ll show you I can)."
                        },
                        {
                            id: 47,
                            level: 5,
                            japanese: "あさごはんを　たべずに　がっこうへ　いきました。",
                            romaji: "Asagohan o tabezu ni gakkō e ikimashita.",
                            english: "I went to school without eating breakfast."
                        },
                        {
                            id: 48,
                            level: 5,
                            japanese: "にほんじんだからといって、みんなが　さしみを　すきなわけではありません。",
                            romaji: "Nihonjin dakara to itte, minna ga sashimi o suki na wake de wa arimasen.",
                            english: "Just because someone is Japanese doesn’t mean everyone likes sashimi."
                        },
                        {
                            id: 49,
                            level: 5,
                            japanese: "あのひとは　ゆうめいに　ちがいありません。",
                            romaji: "Ano hito wa yūmei ni chigai arimasen.",
                            english: "That person must be famous."
                        },
                        {
                            id: 50,
                            level: 5,
                            japanese: "せんせいの　おかげで、にほんごが　じょうずに　なりました。",
                            romaji: "Sensei no okage de, Nihongo ga jōzu ni narimashita.",
                            english: "Thanks to my teacher, my Japanese has improved."
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
            console.log(id)
            console.log(this.kana)
        },
        checkAnswer() {
            this.preview_answers.push(
                { kana: this.cards[this.index].translations[this.rand].japanese, romaji: this.cards[this.index].translations[this.rand].romaji, meaning: this.cards[this.index].translations[this.rand].english, userAnswer: this.user_answer }
            );
            this.getRandomSentence(this.index);
            this.count++;
            this.user_answer = '';
            if (this.count > this.limit) {
                //this.kana = 'Limit Reached';
                this.hide = false;
                this.preview_answer = true;
            } else if (this.count == this.limit) {
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
        reset() {
            this.count = 1;
            this.hide = true
            this.preview_answers = [];
            this.btn_check = 'Next'
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
