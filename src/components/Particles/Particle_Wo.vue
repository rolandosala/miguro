<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ introduction }}</p>
        </div>
        <div class="col-12">
            <h5>Basic Sentence Structure</h5>
            <h6>[Subject] は [Object] を [Verb]</h6>
            Here’s a breakdown:
            <ul>
                <li>Subject (は) – the one doing the action</li>
                <li>Object (を) – the thing receiving the action</li>
                <li>Verb – the action being done</li>
            </ul>
        </div>
        <div class="col-12">
            <h5>Example Sentences</h5>
            <ol>
                <li v-for="data in examples" class="mt-3"><b>{{ data.kana }}</b><br><em>{{ data.romaji }}</em><br>{{
                    data.translation }}
                    <ul>
                        <li v-for="breakdown in data.breakdown"><b>{{ breakdown.word }}</b> = <em>{{ breakdown.meaning
                        }}</em></li>
                    </ul>
                </li>
            </ol>
        </div>
        <div class="col-12 ">
            <div class="row">
                <div class="col-sm-12 col-lg-8 alert alert-info">
                    <h5>Quick Tips</h5>
                    <ul>
                        <li>を always comes right after the object.</li>
                        <li>Even if the subject is dropped (which is common in Japanese), を still marks the object
                            clearly.
                        </li>
                    </ul>
                    <span>Example with dropped subject: <br><b>りんごを食べます。</b><br><em>(I) eat an apple.</em></span>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex flex-column align-items-center">
                    <img src="/miguro_3.png" alt="" style="width: 80%;">
                    <button class="btn btn-outline-success form-control">Would you like a practice?</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'The を (wo) Particle – The Direct Object Marker',
            introduction: 'The を particle, pronounced "o" (not "wo"), is one of the most essential particles in Japanese. It marks the direct object of a sentence — the thing that is directly affected by the action. In simple terms: [Something] を [Action] - "Do [action] to [something]"',
            examples: [
                {
                    kana: '本を読みます。', romaji: 'Hon o yomimasu.', translation: 'I read a book.', breakdown: [
                        { word: '本 (ほん)', meaning: 'book' },
                        { word: '読みます (よみます)', meaning: 'read “(I) read a book.”' },
                    ]
                },
                {
                    kana: 'ごはんを食べます。', romaji: 'Gohan o tabemasu.', translation: 'I eat rice / a meal.', breakdown: [
                        { word: 'ごはん', meaning: 'rice/meal' },
                        { word: '食べます (たべます)', meaning: 'eat “(I) eat rice.”' },
                    ]
                },
                {
                    kana: '映画を見ます。', romaji: 'Eiga o mimasu.', translation: 'I watch a movie.', breakdown: [
                        { word: '映画 (えいが)', meaning: 'movie' },
                        { word: '見ます (みます)', meaning: 'watch “(I) watch a movie.”' },
                    ]
                },
            ]
        }
    }
}
</script>