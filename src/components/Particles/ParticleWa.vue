<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <h4>Understanding the Japanese Particle は (wa)</h4>
                    <p>In Japanese, <b style="font-size: 1.2em;">は</b> is one of the
                        most common particles you'll come across. Although it's written as <b
                            style="font-size: 1.2em;">は</b> in
                        hiragana, it's pronounced <strong>"wa"</strong> when used as a particle. Its main job? To mark
                        the
                        <strong>topic</strong> of a sentence. Think of it like this: <b style="font-size: 1.2em;">は</b>
                        tells us
                        what the sentence is about.
                    </p>
                    <h5>Basic Sentence Structure</h5>
                    <p><strong>[Topic] + は + [Information about the topic]</strong></p>
                </div>
                <!-- <div class="col-4">
                    <img src="/miguro_1.png" alt="" style="width: 80%;">
                </div> -->
            </div>
        </div>
        <div class="col-12">
            <p><strong>Example:</strong></p>
            <ol>
                <li v-for="data in examples" class="mt-2"><b>{{ data.kana }}</b><br><em>{{ data.romaji }}</em><br>{{
                    data.translation }} <br>
                    <b>Breakdown</b>
                    <ul>
                        <li v-for="breakdown in data.breakdown"><strong>{{ breakdown.word }}</strong> = {{
                            breakdown.translation }}</li>
                    </ul>
                </li>
            </ol>
        </div>
        <div class="col-12 mt-2">
            <h5><b>は</b> vs. <b>が?</b> (Quick Tip)</h5>
            <p>Beginners often confuse <b>は</b> and <b>が</b>, since both can seem similar. A simple way to remember
                the difference at first: </p>
            <ul>
                <li><b>は</b> (wa) = Topic</li>
                <li><b>が</b> (ga) = Subject (often introduces <strong>new</strong> or <strong>important</strong>
                    information)</li>
            </ul>
            <div class="col-12">
                <p><strong>Examples:</strong></p>
                <ol>
                    <li v-for="data in wa_vs_ga_examples"><b>{{ data.kana }}</b><br><em>{{ data.romaji }}
                        </em><br>{{ data.translation }}</li>
                </ol>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <h5>When to Use は (wa)</h5>
                    <p>Use <span style="font-family: 'Courier New', Courier, monospace;">は</span> when:</p>
                    <ul>
                        <li>You're introducing a new topic</li>
                        <li>You want to talk <strong>about</strong> something or someone</li>
                        <li>You’re contrasting two things</li>
                    </ul>

                    <p><strong>Example of contrast:</strong></p>
                    <div class="example">
                        <p><b>さかな は すき です。でも にく は すきじゃない です。</b><br>
                            <em>Sakana wa suki desu. Demo niku wa suki janai desu.</em><br>
                            I like fish. But I don’t like meat.
                        </p>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
                    <img src="/miguro_3.png" alt="" style="width: 80%;">
                    <button class="btn btn-outline-success form-control">Would you like a practice?</button>
                </div>
            </div>

        </div>
        <div class="col-12 alert alert-info mt-4">
            <h5>Final Tip: <b>は</b> ≠ "is"</h5>
            <p>While in English we say <b>“A is B”</b>, in Japanese <b>は</b> doesn’t mean<b> “is”</b>. It just
                shows what we’re talking about. The <strong>です (desu)</strong> part usually does
                the job of “is” or “am”.</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            examples: [
                {
                    kana: 'わたし は がくせい です。', romaji: 'Watashi wa gakusei desu.', translation: 'I am a student.', breakdown: [
                        { word: 'わたし (watashi)', translation: 'I' },
                        { word: 'は (wa)', translation: 'topic marker' },
                        { word: 'がくせい (gakusei)', translation: 'student' },
                        { word: 'です (desu)', translation: 'polite ending meaning "is/am/are"' },
                    ]
                },
                {
                    kana: 'にほんご は むずかしい です。', romaji: 'Nihongo wa muzukashii desu.', translation: 'Japanese is difficult.', breakdown: [
                        { word: 'にほんご (Nihongo)', translation: 'Japanese (language)' },
                        { word: 'は (wa)', translation: 'topic marker' },
                        { word: 'むずかしい (muzukashii)', translation: 'difficult' },
                        { word: 'です (desu)', translation: 'polite ending meaning "is/am/are"' },
                    ]
                },
            ],
            wa_vs_ga_examples: [
                { kana: 'わたし は たなか です。', romaji: 'Watashi wa Tanaka desu.', translation: ' As for me, I’m Tanaka. (Topic = "me")' },
                { kana: 'だれ が たなか です か？', romaji: 'Dare ga Tanaka desu ka?', translation: ' Who is Tanaka? (Subject = "Who")' },
            ]
        }
    }
}
</script>