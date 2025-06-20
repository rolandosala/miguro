<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ pageTitle }}</h4>
            <p>{{ introduction }}</p>
        </div>
        <div class="col-12">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="data in emphasisConjunctions">
                    <h2 class="accordion-header">
                        <button class="accordion-button z-0" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + data.id" aria-expanded="true" aria-controls="collapseOne">
                            <b>{{ data.conjunction }}</b>
                        </button>
                    </h2>
                    <div :id="data.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{{ data.description }}</p>
                            <b>Example:</b>
                            <ul>
                                <li class="mt-3" v-for="ex in data.examples"><b>{{ ex.kana }}</b> <br> {{ ex.romaji }}
                                    <br>{{
                                        ex.english }} <br>
                                    <b>Breakdown</b>
                                    <ul>
                                        <li v-for="breakdown in ex.breakdown"><b>{{ breakdown.word }}</b> - <i>{{
                                                breakdown.translation }}</i></li>
                                    </ul>
                                </li>
                            </ul>
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
            pageTitle: "Emphasis Conjunctions in Nihongo (Japanese)",
            introduction: `
        In Japanese, conjunctions are used to link clauses or sentences, and some of them carry an emphasis meaning. 
        These conjunctions can help to stress the importance of certain elements or ideas in a conversation. 
        In this section, we will focus on common conjunctions used for emphasis in Japanese with examples.
      `,
            emphasisConjunctions: [
                {
                    id: 'collapseOne',
                    conjunction: "やっぱり (yappari)",
                    description: `
                         "やっぱり" is used to emphasize something that was expected or assumed to be true. It can mean "as expected" 
                         or "after all," and is often used when confirming something that aligns with expectations or previous thoughts.
                        `,
                    examples: [
                        {
                            kana: "やっぱりこれが一番おいしい。",
                            romaji: "Yappari kore ga ichiban oishii.",
                            english: "As expected, this is the most delicious.",
                            breakdown: [
                                { word: "やっぱり (Yappari)", translation: "As expected / After all" },
                                { word: "これ (Kore)", translation: "This" },
                                { word: "が (Ga)", translation: "Subject marker" },
                                { word: "一番 (Ichiban)", translation: "Most / Number one" },
                                { word: "おいしい (Oishii)", translation: "Delicious" }
                            ]
                        },
                        {
                            kana: "やっぱり彼は来なかった。",
                            romaji: "Yappari kare wa konakatta.",
                            english: "After all, he didn't come.",
                            breakdown: [
                                { word: "やっぱり (Yappari)", translation: "After all / As expected" },
                                { word: "彼 (Kare)", translation: "He" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "来なかった (Konakatta)", translation: "Didn’t come (past negative)" }
                            ]
                        }
                    ]
                },
                {
                    id: 'collapseTwo',
                    conjunction: "つまり (tsumari)",
                    description: `
                                    "つまり" is used to clarify or summarize a statement. It can be translated as "in other words," "that is to say," or "namely."
                                    This conjunction emphasizes the conclusion or meaning behind something that was said.
                                `,
                    examples: [
                        {
                            kana: "彼は忙しい。つまり、今日は来られない。",
                            romaji: "Kare wa isogashii. Tsumari, kyou wa korarenai.",
                            english: "He's busy. In other words, he can't come today.",
                            breakdown: [
                                { word: "彼 (Kare)", translation: "He" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "忙しい (Isogashii)", translation: "Busy" },
                                { word: "つまり (Tsumari)", translation: "In other words / That is to say" },
                                { word: "今日 (Kyou)", translation: "Today" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "来られない (Korarenai)", translation: "Can't come (negative potential form)" }
                            ]
                        },
                        {
                            kana: "この店は安い。つまり、品質はそれほど高くない。",
                            romaji: "Kono mise wa yasui. Tsumari, hinshitsu wa sore hodo takakunai.",
                            english: "This store is cheap. In other words, the quality isn't that high.",
                            breakdown: [
                                { word: "この (Kono)", translation: "This" },
                                { word: "店 (Mise)", translation: "Store" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "安い (Yasui)", translation: "Cheap" },
                                { word: "つまり (Tsumari)", translation: "In other words / That is to say" },
                                { word: "品質 (Hinshitsu)", translation: "Quality" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "それほど (Sore hodo)", translation: "That much" },
                                { word: "高くない (Takakunai)", translation: "Not high" }
                            ]
                        }
                    ]
                },
                {
                    id: 'collapseThree',
                    conjunction: "やはり (yahari)",
                    description: `
                                "やはり" is similar to "やっぱり" and is used to emphasize something that was expected or assumed. It carries a more formal tone.
                                It can be translated as "as expected" or "after all."
                            `,
                    examples: [
                        {
                            kana: "やはり、彼は来なかった。",
                            romaji: "Yahari, kare wa konakatta.",
                            english: "After all, he didn’t come.",
                            breakdown: [
                                { word: "やはり (Yahari)", translation: "As expected / After all (formal)" },
                                { word: "彼 (Kare)", translation: "He" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "来なかった (Konakatta)", translation: "Didn’t come" }
                            ]
                        },
                        {
                            kana: "やはり彼女は上手だ。",
                            romaji: "Yahari kanojo wa jouzu da.",
                            english: "As expected, she is good (at it).",
                            breakdown: [
                                { word: "やはり (Yahari)", translation: "As expected / After all" },
                                { word: "彼女 (Kanojo)", translation: "She" },
                                { word: "は (Wa)", translation: "Topic marker" },
                                { word: "上手 (Jouzu)", translation: "Good / Skillful" },
                                { word: "だ (Da)", translation: "Copula (is)" }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};

</script>