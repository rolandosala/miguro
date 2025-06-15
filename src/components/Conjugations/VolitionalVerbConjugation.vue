<template>
    <div class="row">
        <div class="col-12">
            <h4>The Volitional Form in Japanese ～しよう / ～こう / ～ろう</h4>
            <p>The <b>volitional form</b> is used to <i>express intention, suggestion, or invitation</i> — like
                saying <b>“Let’s do something” </b>or <b>“I will do something”</b> in English. <br>There are two
                styles:</p>
            <ol>
                <li><b>Casual (plain)</b>: ～しよう、～こう、～ろう</li>
                <li><b>Polite</b>: ～ましょう</li>
            </ol>
            <h5>How to Form the Volitional</h5>
        </div>
        <div class="col-12 mt-3">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>Group 1 Verbs (Godan verbs)</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>Change the u-ending to the corresponding <b>o-row + う (casual)</b>, or use the <b>ます
                                    stem + ましょう (polite)</b>.</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Dictionary</th>
                                        <th>Casual Volitional</th>
                                        <th>Polite Volitional</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group1">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.casual }}</td>
                                        <td>{{ data.polite }}</td>
                                        <td>{{ data.meaning }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b>Group 2 Verbs (Ichidan verbs)</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>Drop the final <b>る</b> and add:</p>
                            <ul>
                                <li><b>よう</b> for casual</li>
                                <li><b>ます</b> stem + <b>ましょう</b> for polite</li>
                            </ul>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Dictionary</th>
                                        <th>Casual Volitional</th>
                                        <th>Polite Volitional</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group2">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.casual }}</td>
                                        <td>{{ data.polite }}</td>
                                        <td>{{ data.meaning }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            <b>Irregular Verbs</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Dictionary</th>
                                        <th>Casual Volitional</th>
                                        <th>Polite Volitional</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group3">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.casual }}</td>
                                        <td>{{ data.polite }}</td>
                                        <td>{{ data.meaning }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3">
            <h5>Example Sentences (Casual & Polite)</h5>
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h6>Casual Style:</h6>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li v-for="data in casual_example"><b>{{ data.kana }}</b> <br>{{ data.romaji }}
                                    <br>{{
                                        data.meaning }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6 mt-3 mt-lg-0">
                    <div class="card">
                        <div class="card-header">
                            <h6>Polite Style:</h6>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li v-for="data in polite_example"><b>{{ data.kana }}</b> <br>{{ data.romaji }}
                                    <br>{{
                                        data.meaning }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="alert alert-info mt-3">
                <h5>Notes:</h5>
                <ul>
                    <li>Use <b>casual volitional</b> with friends, family, or in inner monologues. <br>
                        Example: <b>明日から頑張ろう。</b><br>
                        <i>Ashita kara ganbarou.</i><br>
                        I’ll do my best starting tomorrow.
                    </li>
                    <li>Use <b>polite volitional</b> in formal settings or when speaking respectfully.<br>
                        Example: <b> 一緒に勉強しましょう。</b><br>
                        <i>Issho ni benkyou shimashou.</i><br>
                        Let’s study together.
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            group1: [
                { dictionary: '行く（いく）iku', casual: '行こう（いこう）ikou', polite: '行きましょう（いきましょう）ikimashou', meaning: `Let's go` },
                { dictionary: '飲む（のむ）nomu', casual: '飲もう（のもう）nomou', polite: '飲みましょう（のみましょう）nomimashou', meaning: `Let's drink` },
                { dictionary: '話す（はなす）hanasu', casual: '話そう（はなそう）hanasou', polite: '話しましょう（はなしましょう）hanashimashou', meaning: `Let's talk` },
            ],
            group2: [
                { dictionary: '食べる（たべる）taberu', casual: '食べよう（たべよう）tabeyou', polite: '食べましょう（たべましょう）tabemashou', meaning: `Let's eat` },
                { dictionary: '見る（みる）miru', casual: '見よう（みよう）miyou', polite: '見ましょう（みましょう）mimashou', meaning: `Let's watch` },
            ],
            group3: [
                { dictionary: 'する suru', casual: 'しよう shiyou', polite: 'しましょう shimashou', meaning: `Let’s do` },
                { dictionary: '来る（くる）kuru', casual: '来よう（こよう）koyou', polite: '来ましょう（きましょう）kimashou', meaning: `Let’s come` },
            ],
            polite_example: [
                { kana: '明日、海に行きましょう。', romaji: 'Ashita, umi ni ikimashou.', meaning: `Let’s go to the beach tomorrow.` },
                { kana: '映画を見ましょうか？', romaji: 'Eiga o mimashou ka?', meaning: `Shall we watch a movie?` },
                { kana: '美味しいものを食べましょう。', romaji: 'Oishii mono o tabemashou.', meaning: `Let’s eat something delicious.` },
                { kana: '宿題をしましょう。', romaji: 'Shukudai o shimashou.', meaning: `Let’s do the homework.` },
            ],
            casual_example: [
                { kana: '明日、海に行こう！', romaji: 'Ashita, umi ni ikou!', meaning: `Let’s go to the beach tomorrow.` },
                { kana: '映画を見ようか？', romaji: 'Eiga o miyou ka?', meaning: `Shall we watch a movie?` },
                { kana: '美味しいものを食べよう！', romaji: 'Oishii mono o tabeyou!', meaning: `Let’s eat something delicious.` },
                { kana: '宿題をしよう。', romaji: 'Shukudai o shiyou.', meaning: `I’ll do the homework.` },
            ],
        }
    }
}
</script>