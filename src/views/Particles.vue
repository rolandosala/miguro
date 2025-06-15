<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center">
                    <img src="/miguro_4.png" alt="" style="width: 80%;">
                </div>
                <div class="col-sm-12 col-lg-8">
                    <h4>Mastering Japanese Particles: Guide, Tips & Techniques</h4>
                    <p>Japanese particles (助詞 joshi) are the glue that holds sentences together. They may seem small,
                        but
                        they carry BIG meaning. Mastering them is key to sounding natural and understanding native
                        Japanese.
                    </p>
                    <h5>What Are Particles?</h5>
                    <p>Particles are short words that come after nouns, verbs, adjectives, or phrases to indicate their
                        grammatical function. Think of them like prepositions or markers in English—words like to, from,
                        with, about, etc.</p>
                </div>

            </div>
        </div>
        <div class="col-12">
            <h5> Common Japanese Particles</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th>Particle</th>
                        <th>Function</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in particles">
                        <td>{{ data.particle }}</td>
                        <td>{{ data.function }}</td>
                        <td>{{ data.example }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 alert alert-info">
            <h5>Pro Tips for Learning Particles</h5>
            <ol>
                <li v-for="data in tip"><b>{{ data.tip }}</b>
                    <ul>
                        <li>{{ data.description }}</li>
                    </ul>
                </li>
            </ol>
            <h5>Practice Technique: “Swap It Out”</h5>
            <p>Take a simple sentence and swap particles to see how the meaning changes:</p>
            <ul>
                <li>私はパンを食べます。 (I eat bread.)</li>
                <li>Change を to で:
                    <ul>
                        <li>私はパンで食べます。 (I eat with bread — weird, but now you see how particle changes meaning!)</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col-12">
            <h5>Quick Memory Hack</h5>
            <ul>
                <li>は vs. が:
                    <ul>
                        <li>は = what you're talking about.</li>
                        <li>が = what you're identifying or emphasizing.</li>
                    </ul>
                </li>
                <li>Try:
                    <ul>
                        <li>犬は可愛い。 (Dogs are cute [in general].)</li>
                        <li>犬が可愛い！ (That dog is cute!)</li>
                    </ul>
                </li>
            </ul>
            <p>Particles might feel like a puzzle at first, but with exposure, practice, and good examples, they start
                to click. Be patient—learning them is like learning rhythm in music. Once you feel it, you flow with it!
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            particles: [
                { "particle": "は", "function": "Topic marker", "example": "私は学生です。(*Watashi wa gakusei desu.*) — I am a student." },
                { "particle": "が", "function": "Subject marker (emphasizes subject)", "example": "猫が好きです。(*Neko ga suki desu.*) — I like cats." },
                { "particle": "を", "function": "Direct object marker", "example": "パンを食べます。(*Pan o tabemasu.*) — I eat bread." },
                { "particle": "に", "function": "Time, direction, target", "example": "学校に行きます。(*Gakkō ni ikimasu.*) — I go to school." },
                { "particle": "で", "function": "Location of action", "example": "家で勉強します。(*Ie de benkyō shimasu.*) — I study at home." },
                { "particle": "の", "function": "Possession or description", "example": "彼の本です。(*Kare no hon desu.*) — It’s his book." },
                { "particle": "へ", "function": "Direction (softer than に)", "example": "東京へ行きます。(*Tōkyō e ikimasu.*) — I’m going to Tokyo." },
                { "particle": "と", "function": "'And', 'with' (connecting)", "example": "友達と話します。(*Tomodachi to hanashimasu.*) — I talk with a friend." },
                { "particle": "も", "function": "'Also', 'too'", "example": "私も行きます。(*Watashi mo ikimasu.*) — I’ll go too." },
                { "particle": "から", "function": "'From' or 'because'", "example": "学校から帰ります。(*Gakkō kara kaerimasu.*) — I come home from school." },
                { "particle": "まで", "function": "'Until' or 'to (a place)'", "example": "三時まで働きます。(*Sanji made hatarakimasu.*) — I work until 3." }
            ],
            tip:
                [
                    { "tip": "Don't Translate Directly", "description": "Particles often don’t have one-to-one English equivalents. Learn them in context instead of trying to force a translation." },
                    { "tip": "Learn in Sentences, Not Isolation", "description": "Memorize particles with full example sentences. Your brain will start picking up patterns naturally." },
                    { "tip": "Pay Attention to Context", "description": "The same particle can have different meanings based on the situation. For example, 'に' can mean 'to' (direction) or 'at' (time)." },
                    { "tip": "Use Mnemonics or Visuals", "description": "Create simple visuals or stories to remember functions. E.g., think of 'で' as a stage where the action happens." },
                    { "tip": "Shadowing & Listening", "description": "Imitate native speakers. When you hear particles used naturally, you’ll start to 'feel' when they sound right." },
                    { "tip": "Drills, Quizzes & Games", "description": "Repetition works. Make it fun with matching games, fill-in-the-blank, or sentence puzzles." }
                ]

        }
    }
}
</script>