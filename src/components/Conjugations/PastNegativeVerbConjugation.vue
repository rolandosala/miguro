<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Japanese Verb Conjugation: Polite and Casual Past Negative</h4>
            <section>
                <h5>1. Polite Past Negative Form（丁寧語 過去否定形）</h5>
                <p>
                    The polite past negative form is used in formal situations to say that something did not happen.
                    It is formed by conjugating the verb into its ます-form negative, then making it past tense:
                </p>
                <ul>
                    <li>Verb stem + <strong>ませんでした</strong></li>
                </ul>
                <p><strong>Examples:</strong></p>
                <div class="table-reponsive">
                    <table class="table table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th>Verb</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                                <th>Polite Past Negative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="verb in politeExamples" :key="verb.base">
                                <td>{{ verb.base }}</td>
                                <td>{{ verb.kana }}</td>
                                <td>{{ verb.romaji }}</td>
                                <td>{{ verb.meaning }}</td>
                                <td>{{ verb.politePastNegative }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
        <div class="col-sm-12">
            <section>
                <h5>2. Casual Past Negative Form（普通形 過去否定形）</h5>
                <p>
                    The casual past negative is used in informal conversation. It's formed by taking the negative (ない)
                    form
                    and replacing
                    <strong>ない</strong> with <strong>なかった</strong>.
                </p>
                <ul>
                    <li>Negative stem + <strong>なかった</strong></li>
                </ul>
                <p><strong>Examples:</strong></p>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th>Verb</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                                <th>Casual Past Negative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="verb in casualExamples" :key="verb.base">
                                <td>{{ verb.base }}</td>
                                <td>{{ verb.kana }}</td>
                                <td>{{ verb.romaji }}</td>
                                <td>{{ verb.meaning }}</td>
                                <td>{{ verb.casualPastNegative }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
        <!-- <div class="col-sm-12">
            <section>
                <h5>3. Practice Questions</h5>
                <p><strong>Fill in the blanks with the correct conjugation (romaji):</strong></p>

                <div v-for="(question, index) in practiceQuestions" :key="index" class="mb-3">
                    <label>{{ question.text }}</label>
                    <input type="text" v-model="question.answer" class="form-control"
                        placeholder="Enter the correct romaji" />
                    <button @click="checkAnswer(index)" class="btn btn-primary mt-2">
                        Check Answer
                    </button>
                    <p v-if="question.feedback" class="mt-2"
                        :class="{ 'text-success': question.feedback.correct, 'text-danger': !question.feedback.correct }">
                        {{ question.feedback.message }}
                    </p>
                </div>
            </section>
        </div> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            politeExamples: [
                {
                    base: "食べる",
                    kana: "たべる",
                    romaji: "taberu",
                    meaning: "to eat",
                    politePastNegative: "tabemasen deshita"
                },
                {
                    base: "行く",
                    kana: "いく",
                    romaji: "iku",
                    meaning: "to go",
                    politePastNegative: "ikimasen deshita"
                },
                {
                    base: "する",
                    kana: "する",
                    romaji: "suru",
                    meaning: "to do",
                    politePastNegative: "shimasen deshita"
                },
                {
                    base: "見る",
                    kana: "みる",
                    romaji: "miru",
                    meaning: "to see/watch",
                    politePastNegative: "mimasen deshita"
                }
            ],
            casualExamples: [
                {
                    base: "飲む",
                    kana: "のむ",
                    romaji: "nomu",
                    meaning: "to drink",
                    casualPastNegative: "nomanakatta"
                },
                {
                    base: "買う",
                    kana: "かう",
                    romaji: "kau",
                    meaning: "to buy",
                    casualPastNegative: "kawanakatta"
                },
                {
                    base: "話す",
                    kana: "はなす",
                    romaji: "hanasu",
                    meaning: "to speak",
                    casualPastNegative: "hanasanakatta"
                },
                {
                    base: "する",
                    kana: "する",
                    romaji: "suru",
                    meaning: "to do",
                    casualPastNegative: "shinakatta"
                }
            ],
            practiceQuestions: [
                {
                    text: "I didn't eat (polite form).",
                    correctAnswer: "tabemasen deshita",
                    answer: "",
                    feedback: null
                },
                {
                    text: "I didn't go (polite form).",
                    correctAnswer: "ikimasen deshita",
                    answer: "",
                    feedback: null
                },
                {
                    text: "I didn't drink (casual form).",
                    correctAnswer: "nomanakatta",
                    answer: "",
                    feedback: null
                },
                {
                    text: "I didn't buy (casual form).",
                    correctAnswer: "kawanakatta",
                    answer: "",
                    feedback: null
                }
            ]
        };
    },
    methods: {
        checkAnswer(index) {
            const question = this.practiceQuestions[index];
            if (question.answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
                question.feedback = {
                    correct: true,
                    message: "Correct! Well done."
                };
            } else {
                question.feedback = {
                    correct: false,
                    message: "Oops, that's incorrect. Try again."
                };
            }
        }
    }
};
</script>