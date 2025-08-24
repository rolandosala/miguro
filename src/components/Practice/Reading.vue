<template>
    <div class="row p-4">
        <h4 class="fs-4">Reading Exercise</h4>
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
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ data.title }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center align-items-center flex-column">
                                <p style="text-align: justify"><strong>{{ data.paragraph.japanese }}</strong></p>
                                <p style="text-align: justify" v-if="show_romaji"><em>{{ data.paragraph.romaji }}</em>
                                </p>
                                <p style="text-align: justify" v-if="show_english">{{ data.paragraph.english }}</p>
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
                            <button class="btn btn-info col-6" data-bs-dismiss="modal" data-bs-target="#modalQuestions"
                                data-bs-toggle="modal" @click="showQuestions">Questions</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalQuestions" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Question</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="reset"></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                            <strong>{{ question }}</strong>
                            <em v-if="show_romaji">{{ romaji }}</em>
                            <span v-if="show_english">( {{ english }} )</span>
                            <div class="form-floating mt-4 mb-3 col-12">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name@example.com" v-model="user_answer">
                                <label for="floatingInput">Your Answer in Romaji</label>
                            </div>
                            <!-- <div class="row d-flex justify-content-start align-items-start">
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
                            </div> -->
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-info col-4" @click="nextQuestion" v-if="!submit">Next</button>
                            <button class="btn btn-success  col-4" data-bs-dismiss="modal" data-bs-target="#modalAnswer"
                                data-bs-toggle="modal" v-if="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalAnswer" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Answer</h1>
                        </div>
                        <div class="modal-body" v-if="submit">
                            <div>
                                <ol>
                                    <li v-for="(data, index) in preview_answer" class="mt-2">
                                        <b>{{ data.question }}</b><br>
                                        <em>{{ data.romaji }}</em><br>
                                        {{ data.english }} <br>
                                        Correct Answer: <b>{{ data.answer }}</b><br>
                                        Your Answer: <b><u>{{ data.userAnswer }}</u></b>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger  col-4" data-bs-dismiss="modal" @click="reset"
                                v-if="submit">Close</button>
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
            count: 0,
            user_answer: '',
            submit: false,
            preview_answer: [],
            index: 0,
            cards: [
                {
                    id: 'cardOne', img: '/miguro_1.webp', title: 'Reading 1',
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
                    id: 'cardTwo', img: '/miguro_1.webp', title: 'Reading 2',
                    paragraph: {
                        "japanese": "これは 山田さん の ねこ です。ねこ の 名前 は ミケ です。ミケ は 小さい ねこ です。まいにち 牛乳 を のみます。そして よく ねます。",
                        "romaji": "Kore wa Yamada-san no neko desu. Neko no namae wa Mike desu. Mike wa chiisai neko desu. Mainichi gyūnyū o nomimasu. Soshite yoku nemasu.",
                        "english": "This is Mr. Yamada’s cat. The cat’s name is Mike. Mike is a small cat. She drinks milk every day. And she often sleeps."
                    },
                    questions: [
                        {
                            "question": "ねこ の 名前 は なん ですか？",
                            "romaji": "Neko no namae wa nan desu ka?",
                            "english": "What is the cat's name?",
                            "answer": "Mike desu."
                        },
                        {
                            "question": "ミケ は 大きい ですか 小さい ですか？",
                            "romaji": "Mike wa ōkii desu ka chiisai desu ka?",
                            "english": "Is Mike big or small?",
                            "answer": "Chiisai desu."
                        },
                        {
                            "question": "ミケ は まいにち なに を のみますか？",
                            "romaji": "Mike wa mainichi nani o nomimasu ka?",
                            "english": "What does Mike drink every day?",
                            "answer": "Gyūnyū o nomimasu."
                        },
                        {
                            "question": "ミケ は よく なに を しますか？",
                            "romaji": "Mike wa yoku nani o shimasu ka?",
                            "english": "What does Mike often do?",
                            "answer": "Nemasu."
                        },
                        {
                            "question": "これは だれ の ねこ ですか？",
                            "romaji": "Kore wa dare no neko desu ka?",
                            "english": "Whose cat is this?",
                            "answer": "Yamada-san no neko desu."
                        }
                    ]

                },
                {
                    id: 'cardThree', img: '/miguro_1.webp', title: 'Reading 3',
                    paragraph: {
                        "japanese": "これは 田中さん の 家族 です。田中さん は 父 と 母 と 弟 が います。父 は 会社員 です。母 は 先生 です。弟 は 中学生 で、サッカー が すき です。",
                        "romaji": "Kore wa Tanaka-san no kazoku desu. Tanaka-san wa chichi to haha to otōto ga imasu. Chichi wa kaishain desu. Haha wa sensei desu. Otōto wa chūgakusei de, sakkā ga suki desu.",
                        "english": "This is Mr. Tanaka’s family. Mr. Tanaka has a father, a mother, and a younger brother. His father is a company employee. His mother is a teacher. His younger brother is a junior high school student, and he likes soccer."
                    },
                    questions: [
                        {
                            "question": "田中さん の 家族 に だれ が いますか？",
                            "romaji": "Tanaka-san no kazoku ni dare ga imasu ka?",
                            "english": "Who is in Mr. Tanaka’s family?",
                            "answer": "Chichi to haha to otōto ga imasu."
                        },
                        {
                            "question": "田中さん の 父 は しごと は なん ですか？",
                            "romaji": "Tanaka-san no chichi wa shigoto wa nan desu ka?",
                            "english": "What is Mr. Tanaka’s father’s job?",
                            "answer": "Kaishain desu."
                        },
                        {
                            "question": "田中さん の 母 は 何 を していますか？",
                            "romaji": "Tanaka-san no haha wa nani o shiteimasu ka?",
                            "english": "What does Mr. Tanaka’s mother do?",
                            "answer": "Sensei desu."
                        },
                        {
                            "question": "田中さん の 弟 は なんねんせい ですか？",
                            "romaji": "Tanaka-san no otōto wa nan-nensei desu ka?",
                            "english": "What grade is Mr. Tanaka’s younger brother?",
                            "answer": "Chūgakusei desu."
                        },
                        {
                            "question": "田中さん の 弟 は 何 が すき ですか？",
                            "romaji": "Tanaka-san no otōto wa nani ga suki desu ka?",
                            "english": "What does Mr. Tanaka’s younger brother like?",
                            "answer": "Sakkā ga suki desu."
                        }
                    ]

                },
                {
                    id: 'cardFour', img: '/miguro_1.webp', title: 'Reading 4',
                    paragraph: {
                        "japanese": "これは 木村さん の １日 です。木村さん は 毎朝 ６時 に おきます。朝 ごはん を たべて から、会社 へ 行きます。会社 で は パソコン を つかって 仕事 を します。ひる ごはん の とき、同僚 と レストラン へ 行きます。よる は 家 に かえって、テレビ を 見たり 本 を 読んだり します。",
                        "romaji": "Kore wa Kimura-san no ichinichi desu. Kimura-san wa maiasa roku-ji ni okimasu. Asa gohan o tabete kara, kaisha e ikimasu. Kaisha de wa pasokon o tsukatte shigoto o shimasu. Hiru gohan no toki, dōryō to resutoran e ikimasu. Yoru wa ie ni kaette, terebi o mitari hon o yondari shimasu.",
                        "english": "This is Mr. Kimura’s day. He wakes up at 6 o’clock every morning. After eating breakfast, he goes to the company. At the company, he works using the computer. At lunchtime, he goes to a restaurant with colleagues. In the evening, he returns home and watches TV or reads books."
                    },
                    questions: [
                        {
                            "question": "木村さん は まいあさ なんじ に おきますか？",
                            "romaji": "Kimura-san wa maiasa nan-ji ni okimasu ka?",
                            "english": "What time does Mr. Kimura wake up every morning?",
                            "answer": "Roku-ji ni okimasu."
                        },
                        {
                            "question": "朝 ごはん を たべて から、木村さん は どこ へ 行きますか？",
                            "romaji": "Asa gohan o tabete kara, Kimura-san wa doko e ikimasu ka?",
                            "english": "After eating breakfast, where does Mr. Kimura go?",
                            "answer": "Kaisha e ikimasu."
                        },
                        {
                            "question": "会社 で 木村さん は なに を しますか？",
                            "romaji": "Kaisha de Kimura-san wa nani o shimasu ka?",
                            "english": "What does Mr. Kimura do at the company?",
                            "answer": "Pasokon o tsukatte shigoto o shimasu."
                        },
                        {
                            "question": "ひる ごはん の とき、木村さん は だれ と レストラン へ 行きますか？",
                            "romaji": "Hiru gohan no toki, Kimura-san wa dare to resutoran e ikimasu ka?",
                            "english": "At lunchtime, who does Mr. Kimura go to the restaurant with?",
                            "answer": "Dōryō to ikimasu."
                        },
                        {
                            "question": "よる、木村さん は 家 で なに を しますか？",
                            "romaji": "Yoru, Kimura-san wa ie de nani o shimasu ka?",
                            "english": "In the evening, what does Mr. Kimura do at home?",
                            "answer": "Terebi o mitari hon o yondari shimasu."
                        }
                    ]

                },
                {
                    id: 'cardFive', img: '/miguro_1.webp', title: 'Reading 5',
                    paragraph: {
                        "japanese": "これは 佐藤さん の 週末 です。土曜日 の 朝、佐藤さん は ７時 に おきて、ジョギング を します。走りながら 音楽 を きく の が 好き です。午前中 に スーパー で 食べ物 を かって、昼 は 家族 と いっしょ に 料理 を します。日曜日 に は ときどき 友達 と 映画 を 見に 行きます。雨 の 日 は 家 に いて、本 を 読んだり ゲーム を したり します。佐藤さん は 日本 を 旅行 したい と 思っています。",
                        "romaji": "Kore wa Satō-san no shūmatsu desu. Doyōbi no asa, Satō-san wa shichi-ji ni okite, jogingu o shimasu. Hashirinagara ongaku o kiku no ga suki desu. Gozenchū ni sūpā de tabemono o katte, hiru wa kazoku to issho ni ryōri o shimasu. Nichiyōbi ni wa tokidoki tomodachi to eiga o mi ni ikimasu. Ame no hi wa ie ni ite, hon o yondari gēmu o shitari shimasu. Satō-san wa Nihon o ryokō shitai to omotteimasu.",
                        "english": "This is Mr. Sato’s weekend. On Saturday morning, he wakes up at 7 o’clock and goes jogging. He likes listening to music while running. In the morning, he buys food at the supermarket, and for lunch, he cooks together with his family. On Sundays, he sometimes goes to watch movies with friends. On rainy days, he stays at home, reading books or playing games. Mr. Sato wants to travel to Japan."
                    },
                    questions: [
                        {
                            "question": "佐藤さん は 土曜日 の 朝 なんじ に おきますか？",
                            "romaji": "Satō-san wa Doyōbi no asa nan-ji ni okimasu ka?",
                            "english": "What time does Mr. Sato wake up on Saturday morning?",
                            "answer": "Shichi-ji ni okimasu."
                        },
                        {
                            "question": "佐藤さん は 走りながら なに を ききますか？",
                            "romaji": "Satō-san wa hashirinagara nani o kikimasu ka?",
                            "english": "What does Mr. Sato listen to while running?",
                            "answer": "Ongaku o kikimasu."
                        },
                        {
                            "question": "ひる、佐藤さん は だれ と 料理 を しますか？",
                            "romaji": "Hiru, Satō-san wa dare to ryōri o shimasu ka?",
                            "english": "At lunch, who does Mr. Sato cook with?",
                            "answer": "Kazoku to ryōri o shimasu."
                        },
                        {
                            "question": "日曜日 に、佐藤さん は ときどき 何 を しますか？",
                            "romaji": "Nichiyōbi ni, Satō-san wa tokidoki nani o shimasu ka?",
                            "english": "On Sundays, what does Mr. Sato sometimes do?",
                            "answer": "Tomodachi to eiga o mi ni ikimasu."
                        },
                        {
                            "question": "佐藤さん は 何 を したい と 思っていますか？",
                            "romaji": "Satō-san wa nani o shitai to omotteimasu ka?",
                            "english": "What does Mr. Sato want to do?",
                            "answer": "Nihon o ryokō shitai to omotteimasu."
                        }
                    ]

                }
            ],
        };
    },
    mounted() {
        this.showRomaji();
        this.showEnglish();
    },
    methods: {
        get_Index(id) {
            this.index = id
        },
        showRomaji() {
            this.show_romaji = !this.show_romaji;
            this.show_romaji_text = this.show_romaji ? 'Hide Romaji' : 'Show Romaji';
        },
        showEnglish() {
            this.show_english = !this.show_english;
            this.show_english_text = this.show_english ? 'Hide English' : 'Show English';
        },
        showQuestions() {
            this.question = this.cards[this.index].questions[this.count].question;
            this.romaji = this.cards[this.index].questions[this.count].romaji;
            this.english = this.cards[this.index].questions[this.count].english;
            this.answer = this.cards[this.index].questions[this.count].answer;
        },
        nextQuestion() {
            if (this.user_answer == '') {
                alert('Please write your answer')
            } else {
                this.preview_answer.push({ question: this.question, romaji: this.romaji, english: this.english, answer: this.answer, userAnswer: this.user_answer });
                if (this.count == this.cards[this.index].questions.length - 1) {
                    this.submit = true;
                } else {
                    this.user_answer = ''
                    this.count++;
                    this.showQuestions(this.index);
                }
                this.user_answer = '';
            }
        },
        reset() {
            this.preview_answer = []
            this.count = 0
            this.question = ''
            this.romaji = ''
            this.submit = false
            this.show_romaji = false
            this.show_romaji_text = ''
            this.show_english_text = ''
            this.show_english = false
            this.user_answer = ''
        }
    }

};

</script>