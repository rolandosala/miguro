<template>
    <div class="row">
        <div class="col-12">
            <h4>Japanese Sequential Conjunctions</h4>
            <p>These conjunctions show a <b>sequence of events, actions, or logic</b>. They're useful when telling
                stories,
                giving instructions, or explaining thoughts in order.</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="data in collapsecontent">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + data.id" aria-expanded="false" :aria-controls="data.id">
                            <b>{{ data.title }}</b>
                        </button>
                    </h2>
                    <div :id="data.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{{ data.paragraph }}<br><b>Example</b></p>
                            <ul>
                                <li v-for="example in data.example"><b> {{ example.kana }}</b>
                                    <br>{{ example.romaji }}<br>{{ example.meaning }} <br>
                                    <b>Breakdown:</b>
                                    <ul>
                                        <li v-for="breakdown in data.breakdown">{{ breakdown }}</li>
                                    </ul>
                                </li>
                            </ul>
                            <b>Why use it?</b>
                            <p>{{ data.notes }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-striped mt-4">
                    <thead class="table-dark">
                        <tr>
                            <th>Japanese</th>
                            <th>Romaji</th>
                            <th>English Meaning</th>
                            <th>Key Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in summarytable">
                            <td>{{ data.kana }}</td>
                            <td>{{ data.romaji }}</td>
                            <td>{{ data.meaning }}</td>
                            <td>{{ data.use }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            summarytable: [
                { kana: 'それから', romaji: 'sore kara', meaning: 'and then, after that', use: 'Chronological order' },
                { kana: 'そして', romaji: 'soshite', meaning: 'and, and then', use: 'Additions in sequence' },
                { kana: 'それに', romaji: 'sore ni', meaning: 'moreover, besides that', use: '	Adding stronger or supporting reasons' },
                { kana: 'そのあと', romaji: 'sono ato', meaning: 'after that', use: '	Specific time order between two events' },
                { kana: 'それでも', romaji: 'sore demo', meaning: 'even so, nevertheless', use: 'Contradiction or unexpected result' },
            ],
            collapsecontent: [
                {
                    id: 'collapseOne',
                    title: '1. それから (sore kara) – "And then" / "After that"',
                    paragraph: 'Used to connect two actions or events that happen in order, one after another. It focuses on chronological sequence.',
                    example: [
                        {
                            kana: '朝ごはんを食べました。それから、学校に行きました。',
                            romaji: 'Asagohan o tabemashita. Sorekara, gakkō ni ikimashita.',
                            meaning: 'I ate breakfast. Then, I went to school.'
                        }
                    ],
                    breakdown: [
                        '朝ごはん (asagohan) – breakfast',
                        'を – direct object particle',
                        '食べました (tabemashita) – ate (polite past of taberu)',
                        'それから – then / after that',
                        '学校 (gakkō) – school',
                        'に – direction particle',
                        '行きました (ikimashita) – went (polite past of iku)'
                    ],
                    notes: 'To clearly show that going to school happened after eating breakfast.'
                },
                {
                    id: 'collapseTwo',
                    title: '2. そして (soshite) – "And then" / "Also"',
                    paragraph: 'Used to connect sentences logically when actions or qualities follow one another. Often used for lists or adding information.',
                    example: [
                        {
                            kana: '彼はピアノをひきます。そして、歌も上手です。',
                            romaji: 'Kare wa piano o hikimasu. Soshite, uta mo jōzu desu.',
                            meaning: 'He plays the piano. And also, he is good at singing.'
                        }
                    ],
                    breakdown: [
                        '彼 (kare) – he',
                        'は – topic particle',
                        'ピアノ (piano) – piano',
                        'を – object particle',
                        'ひきます (hikimasu) – plays (a stringed instrument)',
                        'そして – and / also',
                        '歌 (uta) – song / singing',
                        'も – also / too',
                        '上手です (jōzu desu) – is good at'
                    ],
                    notes: 'Used to smoothly continue listing facts about the same subject.'
                },
                {
                    id: 'collapseThree',
                    title: '3. それに (sore ni) – "Moreover" / "In addition"',
                    paragraph: 'Adds additional supporting information to the previous sentence. Often used to emphasize or strengthen the point.',
                    example: [
                        {
                            kana: 'この店のラーメンは安いです。それに、美味しいです。',
                            romaji: 'Kono mise no rāmen wa yasui desu. Soreni, oishii desu.',
                            meaning: 'The ramen at this shop is cheap. Moreover, it’s delicious.'
                        }
                    ],
                    breakdown: [
                        'この店 (kono mise) – this shop',
                        'の – possessive particle',
                        'ラーメン (rāmen) – ramen',
                        'は – topic marker',
                        '安いです (yasui desu) – is cheap',
                        'それに – moreover / in addition',
                        '美味しいです (oishii desu) – is delicious'
                    ],
                    notes: 'Use when giving more positive reasons or details.'
                },
                {
                    id: 'collapseFour',
                    title: '4. そのあと (sono ato) – "After that"',
                    paragraph: 'Refers specifically to the time after a previous event. Used for clear chronological storytelling or instructions.',
                    example: [
                        {
                            kana: '映画を見ました。そのあと、レストランに行きました。',
                            romaji: 'Eiga o mimashita. Sono ato, resutoran ni ikimashita.',
                            meaning: 'I watched a movie. After that, I went to a restaurant.'
                        }
                    ],
                    breakdown: [
                        '映画 (eiga) – movie',
                        'を – object particle',
                        '見ました (mimashita) – watched',
                        'そのあと – after that',
                        'レストラン (resutoran) – restaurant',
                        'に – to',
                        '行きました (ikimashita) – went'
                    ],
                    notes: 'Highlights time flow between separate actions.'
                },
                {
                    id: 'collapseFive',
                    title: '5. それでも (sore demo) – "Even so" / "Nevertheless"',
                    paragraph: 'Expresses a contrast or unexpected result despite the previous situation. Used like "but still" or "even so."',
                    example: [
                        {
                            kana: '雨が降っていました。それでも、彼は来ました。',
                            romaji: 'Ame ga futte imashita. Soredemo, kare wa kimashita.',
                            meaning: 'It was raining. Even so, he came.'
                        }
                    ],
                    breakdown: [
                        '雨 (ame) – rain',
                        'が – subject particle',
                        '降っていました (futte imashita) – was raining',
                        'それでも – even so / nevertheless',
                        '彼 (kare) – he',
                        'は – topic marker',
                        '来ました (kimashita) – came'
                    ],
                    notes: 'Used when the outcome is unexpected based on the first sentence.'
                }
            ]

        }
    }
}
</script>