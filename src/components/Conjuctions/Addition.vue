<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ introduction }}</p>
            <p>{{ explanation.definition }}</p>
            <p><b>Usage</b> </p>
            <span v-for="data in explanation.usage">{{ data }} <br></span>

        </div>
        <div class="col-12 mt-2">
            <p><b>Examples:</b></p>
            <ol>
                <li class="mt-2" v-for="data in examples">{{ data.kana }} <br>{{ data.romaji }} <br>{{ data.english }}
                    <br>
                    <b>Breakdown:</b>
                    <ul>
                        <li v-for="breakdown in data.breakdown">{{ breakdown.word }} - {{ breakdown.translation }}</li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "Japanese Addition Conjunction (と - to)",
            introduction: "In Japanese, conjunctions are used to connect words, phrases, or clauses. One of the most common addition conjunctions is 'と' (to), which is used to express the meaning of 'and' or 'with' when linking nouns or actions.",
            explanation: {
                definition: "The particle 'と' (to) is primarily used to connect two or more nouns, and it can also be used in some other contexts to express accompaniment, similarity, or condition. It’s very similar to the English word 'and'.",
                usage: [
                    "1. Connecting two or more nouns",
                    "2. Indicating an action done together",
                    "3. Expressing similarity or condition"
                ]
            },
            examples: [
                {
                    kana: "りんごとバナナを食べました。",
                    romaji: "Ringo to banana o tabemashita.",
                    english: "I ate an apple and a banana.",
                    breakdown: [
                        { word: "りんご", translation: "apple" },
                        { word: "と", translation: "and" },
                        { word: "バナナ", translation: "banana" },
                        { word: "を", translation: "object marker" },
                        { word: "食べました", translation: "ate" }
                    ],
                    explanation: "This example shows how 'と' is used to connect two nouns ('りんご' / apple and 'バナナ' / banana). It indicates that both were eaten together."
                },
                {
                    kana: "私は友達と映画を見に行きました。",
                    romaji: "Watashi wa tomodachi to eiga o mini ikimashita.",
                    english: "I went to watch a movie with my friend.",
                    breakdown: [
                        { word: "私", translation: "I" },
                        { word: "は", translation: "topic marker" },
                        { word: "友達", translation: "friend" },
                        { word: "と", translation: "with" },
                        { word: "映画", translation: "movie" },
                        { word: "を", translation: "object marker" },
                        { word: "見に行きました", translation: "went to watch" }
                    ],
                    explanation: "In this sentence, 'と' shows the relationship of accompaniment, meaning the speaker went to the movie with their friend."
                },
                {
                    kana: "彼は私と同じくらい速いです。",
                    romaji: "Kare wa watashi to onaji kurai hayai desu.",
                    english: "He is as fast as I am.",
                    breakdown: [
                        { word: "彼", translation: "he" },
                        { word: "は", translation: "topic marker" },
                        { word: "私", translation: "I" },
                        { word: "と", translation: "with" },
                        { word: "同じくらい", translation: "the same as" },
                        { word: "速い", translation: "fast" },
                        { word: "です", translation: "is" }
                    ],
                    explanation: "'と' is used here to indicate similarity, meaning the speaker is comparing the speed of 'he' and 'I'."
                }
            ]
        };
    }
};

</script>