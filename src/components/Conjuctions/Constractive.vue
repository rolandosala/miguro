<template>
    <div class="row">
        <div class="col-12" v-for="data in contrastiveConjunctionsGuide">
            <h4>{{ data.title }}</h4>
            <p>{{ data.description }}</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="conj in data.conjunctions">
                    <h2 class="accordion-header">
                        <button :class="'accordion-button z-0 ' + conj.collapse" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + conj.id" :aria-expanded="conj.expanded" >
                            <b>{{ conj.conjunction }} - {{ conj.meaning }}</b>
                        </button>
                    </h2>
                    <div :id="conj.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{{ conj.usage }}<br><b>Example</b></p>
                            <ul>
                                <li><b> {{ conj.example.sentence }}</b>
                                    <br>{{ conj.example.romaji }}<br>{{ conj.example.translation }} <br>
                                    <b>Breakdown:</b>
                                    <ul>
                                        <li v-for="breakdown in conj.example.breakdown">{{ breakdown.phrase }}({{
                                            breakdown.romaji }}) - {{ breakdown.meaning }}</li>
                                    </ul>
                                </li>
                            </ul>
                            <b>Why use it?</b>
                            <p>{{ data.notes }}</p>
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
            contrastiveConjunctionsGuide: [
                { title: "Constructive Conjunctions in Japanese (逆接の接続詞)" },
                { description: "Constructive or contrastive conjunctions are used to connect two clauses or ideas that contrast or conflict with each other. These conjunctions help express contradiction, opposition, or unexpected outcomes." },
                {
                    conjunctions: [
                        {
                            id: 'collapseOne',
                            collapse: '',
                            expanded: true,
                            conjunction: "でも",
                            meaning: "but / however",
                            usage: "Used at the beginning of a sentence or clause to contrast with the previous one.",
                            example: {
                                sentence: "今日は寒いです。でも、外で遊びたいです。",
                                translation: "It's cold today. But I want to play outside.",
                                romaji: "Kyō wa samui desu. Demo, soto de asobitai desu.",
                                breakdown: [
                                    { phrase: "今日は", romaji: "Kyō wa", meaning: "Today (topic marker)" },
                                    { phrase: "寒いです", romaji: "samui desu", meaning: "is cold" },
                                    { phrase: "でも、外で遊びたいです", romaji: "demo, soto de asobitai desu", meaning: "but I want to play outside" }
                                ]
                            }
                        },
                        {
                            id: 'collapseTwo',
                            conjunction: "しかし",
                            collapse: 'collapsed',
                            expanded: false,
                            meaning: "however / but",
                            usage: "Formal equivalent of 'でも', often used in written language or formal speech.",
                            example: {
                                sentence: "彼は努力した。しかし、試験に合格できなかった。",
                                translation: "He made an effort. However, he couldn't pass the exam.",
                                romaji: "Kare wa doryoku shita. Shikashi, shiken ni gōkaku dekinakatta.",
                                breakdown: [
                                    { phrase: "彼は", romaji: "Kare wa", meaning: "He (topic marker)" },
                                    { phrase: "努力した", romaji: "doryoku shita", meaning: "made an effort" },
                                    { phrase: "しかし、試験に合格できなかった", romaji: "shikashi, shiken ni gōkaku dekinakatta", meaning: "however, couldn't pass the exam" }
                                ]
                            }
                        },
                        {
                            id: 'collapseThree',
                            conjunction: "けれども",
                            collapse: 'collapsed',
                            expanded: false,
                            meaning: "although / though / but",
                            usage: "Polite form, often used mid-sentence or to soften contrast. Can be shortened to けど or けれど.",
                            example: {
                                sentence: "行きたいけれども、時間がありません。",
                                translation: "I want to go, but I don’t have time.",
                                romaji: "Ikitai keredomo, jikan ga arimasen.",
                                breakdown: [
                                    { phrase: "行きたい", romaji: "ikitai", meaning: "want to go" },
                                    { phrase: "けれども", romaji: "keredomo", meaning: "but / although" },
                                    { phrase: "時間がありません", romaji: "jikan ga arimasen", meaning: "don't have time" }
                                ]
                            }
                        },
                        {
                            id: 'collapseFour',
                            conjunction: "それでも",
                            collapse: 'collapsed',
                            expanded: false,
                            meaning: "even so / nevertheless",
                            usage: "Used to express that the second clause happens in spite of the first.",
                            example: {
                                sentence: "雨が降っています。それでも、彼は出かけました。",
                                translation: "It’s raining. Even so, he went out.",
                                romaji: "Ame ga futte imasu. Soredemo, kare wa dekakemashita.",
                                breakdown: [
                                    { phrase: "雨が降っています", romaji: "ame ga futte imasu", meaning: "it is raining" },
                                    { phrase: "それでも", romaji: "soredemo", meaning: "even so / nevertheless" },
                                    { phrase: "彼は出かけました", romaji: "kare wa dekakemashita", meaning: "he went out" }
                                ]
                            }
                        },
                        {
                            id: 'collapseFive',
                            conjunction: "なのに",
                            collapse: 'collapsed',
                            expanded: false,
                            meaning: "despite that / even though",
                            usage: "Indicates strong contrast or unexpected outcome; often used to express surprise or dissatisfaction.",
                            example: {
                                sentence: "たくさん勉強したのに、試験に落ちた。",
                                translation: "Even though I studied a lot, I failed the exam.",
                                romaji: "Takusan benkyō shita noni, shiken ni ochita.",
                                breakdown: [
                                    { phrase: "たくさん勉強した", romaji: "takusan benkyō shita", meaning: "studied a lot" },
                                    { phrase: "のに", romaji: "noni", meaning: "even though / despite that" },
                                    { phrase: "試験に落ちた", romaji: "shiken ni ochita", meaning: "failed the exam" }
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