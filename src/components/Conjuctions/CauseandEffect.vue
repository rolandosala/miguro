<template>

    <div class="row">
        <div class="col-12" v-for="data in causeEffectConjunctions">
            <h4>{{ data.title }}</h4>
            <p>{{ data.description }}</p>
            <div class="col-12 mt-3">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" v-for="conj in data.conjunctions">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#' + conj.id" :aria-expanded="conj.expand" :aria-controls="conj.id">
                                <b>{{ conj.name }} - {{ conj.meaning }}</b> <i> ({{ conj.politeness }})</i>
                            </button>
                        </h2>
                        <div :id="conj.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p><b>Example</b></p>
                                <ul>
                                    <li><b>{{ conj.example.kana }}</b> <br>
                                        {{ conj.example.romaji }} <br>
                                        {{ conj.example.english }} <br>

                                    </li>
                                </ul>
                                <b>Breakdown</b>
                                <ul>
                                    <li v-for="breakdown in conj.example.breakdown"><b>{{ breakdown.word }}</b> -
                                        <i>{{ breakdown.meaning }}</i>
                                    </li>
                                </ul>
                            </div>
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
            causeEffectConjunctions: [
                { title: "Cause and Effect Conjunctions in Japanese (にほんごの因果関係接続詞)" },
                { description: "Learn how to express cause and effect in Japanese using common conjunctions like から, ので, だから, 〜ために, and 〜によって. Includes kana, romaji, and breakdowns." },
                {
                    conjunctions: [
                        {
                            id: 'collapseOne',
                            expand: true,
                            name: "から (kara)",
                            meaning: "because",
                            politeness: "casual",
                            example: {
                                kana: "おなかがすいたから、たべます。",
                                romaji: "Onaka ga suita kara, tabemasu.",
                                english: "I will eat because I’m hungry.",
                                breakdown: [
                                    { word: "おなか (onaka)", meaning: "stomach" },
                                    { word: "が (ga)", meaning: "subject marker" },
                                    { word: "すいた (suita)", meaning: "became empty (past tense of すく)" },
                                    { word: "から (kara)", meaning: "because" },
                                    { word: "たべます (tabemasu)", meaning: "eat (polite form)" }
                                ]
                            }
                        },
                        {
                            id: 'collapseTwo',
                            expand: false,
                            name: "ので (node)",
                            meaning: "because / so",
                            politeness: "polite",
                            example: {
                                kana: "あめがふっているので、でかけません。",
                                romaji: "Ame ga futte iru node, dekakemasen.",
                                english: "I won’t go out because it’s raining.",
                                breakdown: [
                                    { word: "あめ (ame)", meaning: "rain" },
                                    { word: "が (ga)", meaning: "subject marker" },
                                    { word: "ふっている (futte iru)", meaning: "is falling (て-form + いる)" },
                                    { word: "ので (node)", meaning: "because" },
                                    { word: "でかけません (dekakemasen)", meaning: "won’t go out (polite negative)" }
                                ]
                            }
                        },
                        {
                            id: 'collapseThree',
                            expand: false,
                            name: "だから (dakara)",
                            meaning: "so / therefore",
                            politeness: "casual",
                            example: {
                                kana: "ねむい。だから、ねます。",
                                romaji: "Nemui. Dakara, nemasu.",
                                english: "I’m sleepy. So, I’ll sleep.",
                                breakdown: [
                                    { word: "ねむい (nemui)", meaning: "sleepy" },
                                    { word: "だから (dakara)", meaning: "so / therefore" },
                                    { word: "ねます (nemasu)", meaning: "sleep" }
                                ]
                            }
                        },
                        {
                            id: 'collapseFour',
                            expand: false,
                            name: "〜ために (tame ni)",
                            meaning: "because of / due to",
                            politeness: "formal",
                            example: {
                                kana: "びょうきのために、がっこうをやすみました。",
                                romaji: "Byouki no tame ni, gakkou o yasumimashita.",
                                english: "I missed school because of illness.",
                                breakdown: [
                                    { word: "びょうき (byouki)", meaning: "illness" },
                                    { word: "のために (no tame ni)", meaning: "due to / because of" },
                                    { word: "がっこう (gakkou)", meaning: "school" },
                                    { word: "を (o)", meaning: "object marker" },
                                    { word: "やすみました (yasumimashita)", meaning: "took a break / missed (past polite)" }
                                ]
                            }
                        },
                        {
                            id: 'collapseFive',
                            expand: false,
                            name: "〜によって (ni yotte) ",
                            meaning: "due to / because of",
                            politeness: "formal",
                            example: {
                                kana: "じしんによって、たくさんのひとがひなんしました。",
                                romaji: "Jishin ni yotte, takusan no hito ga hinan shimashita.",
                                english: "Due to the earthquake, many people evacuated.",
                                breakdown: [
                                    { word: "じしん (jishin)", meaning: "earthquake" },
                                    { word: "によって (ni yotte)", meaning: "due to / by" },
                                    { word: "たくさんのひと (takusan no hito)", meaning: "many people" },
                                    { word: "が (ga)", meaning: "subject marker" },
                                    { word: "ひなんしました (hinan shimashita)", meaning: "evacuated (past polite)" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
}
</script>