<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
            <h6>Basic Sentence Structure: [Subject] + [Verb of motion] + へ + [Destination]</h6>
        </div>
        <div class="col-12 mt-2">
            <h6>Examples: </h6>
            <ol>
                <li v-for="data in example" class="mt-3"><b>{{ data.kana }}</b><br><em>{{ data.romaji }}</em><br>{{
                    data.translation }} <br>
                    <b>Breakdown</b>
                    <ul>
                        <li v-for="breakdown in data.breakdown"><b>{{ breakdown.word }}</b> – <em>{{ breakdown.meaning
                                }}</em></li>
                    </ul>
                </li>
            </ol>
        </div>
        <div class="col-12 mt-2">
            <h5><b>へ</b> vs <b>に</b> – What's the Difference?</h5>
            <span>Both <b>へ</b> and <b>に</b> can indicate direction, but:</span>
            <ul>
                <li><b>へ</b> emphasizes the direction or movement toward a place.</li>
                <li><b>に</b> emphasizes the arrival at or existence in a place.</li>
            </ul>
            <span>Both are often interchangeable when talking about direction, but: <br>Examples:</span>
            <ul>
                <li><b>学校へ行きます</b> – I'm heading toward school. (more directional nuance)</li>
                <li><b>学校に行きます</b> – I'm going to school. (more neutral/common)</li>
            </ul>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <div class="alert alert-info">
                        <span>Tip: In most cases, に is more common, but へ is still perfectly correct and often used in
                            formal writing or poetic/literary expressions.</span><br>
                        <span><b>Use it with motion verbs like:</b></span>
                        <ul>
                            <li>行く (iku) – to go</li>
                            <li>来る (kuru) – to come</li>
                            <li>帰る (kaeru) – to return</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center ">
                    <img src="/miguro_3.png" alt="" style="width: 60%;">
                    <button class="btn btn-outline-success">Would you like a practice?</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Japanese Particle 「へ」(pronounced e)',
            description: 'The particle へ is one of the basic direction particles in Japanese. While it is written as へ, it is pronounced "e" (not "he"). This often trips up beginners, so remember: written へ, spoken え!. The particle へ marks the direction or destination of a movement. Think of it like the English word “to” when saying "go to", "come to", "head to", etc.',
            example: [
                {
                    kana: '学校へ行きます。', romaji: 'Gakkou e ikimasu. ', translation: 'I go to school.', breakdown: [
                        { word: '学校 (gakkou)', meaning: 'school' },
                        { word: 'へ (e)', meaning: 'to (destination marker)' },
                        { word: '行きます (ikimasu)', meaning: 'go' },
                    ]
                },
                {
                    kana: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', translation: 'I want to go to Japan.', breakdown: [
                        { word: '日本 (Nihon)', meaning: 'Japan' },
                        { word: 'へ (e)', meaning: 'to (destination marker)' },
                        { word: '行きたい (ikitai)', meaning: 'want to go' },
                        { word: 'です (desu)', meaning: 'polite ending' },
                    ]
                },
                {
                    kana: '友だちの家へ来ました。', romaji: 'Tomodachi no ie e kimashita.', translation: 'I came to my friend’s house.', breakdown: [
                        { word: '友だちの家 (tomodachi no ie)', meaning: 'friend’s house' },
                        { word: 'へ (e)', meaning: 'to (destination marker)' },
                        { word: '来ました (kimashita)', meaning: 'came' },
                    ]
                },
            ]
        }
    }
}
</script>