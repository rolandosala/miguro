<template>
    <div class="row">
        <div class="col-12">
            <h4>Japanese Potential Form Verb Conjugation</h4>
            <p>In Japanese, the potential form of a verb expresses the ability or possibility to do something. It’s
                equivalent to saying <strong>“can”</strong> or <strong>“able to”</strong> in English. The potential
                form is used when talking about
                actions you can perform or things that can happen.</p>
            <h5>How to Form the Potential Form</h5>
            <p>The way you conjugate verbs into the potential form depends on whether the verb is <strong>Group 1
                    (U-verbs)</strong>, <strong>Group 2 (Ru-verbs)</strong>, or <strong>Group 3 (Irregular
                    verbs)</strong>.</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>1. Group 1 (U-verbs)</b>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>For <strong>Group 1 (U-verbs)</strong>, you change the <u>final <b>-u</b> sound to the
                                    corresponding <b>-eru</b> sound.</u>
                                <br><b><i>- Replace the -u ending with -eru.</i></b>
                            </p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Verb (dictionary form)</th>
                                        <th>Potential form</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group1">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.potential }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6>Example Sentences</h6>
                            <ul>
                                <li v-for="data in group1_example"><b>{{ data.example }}</b><br>{{ data.romaji }}
                                    <br>
                                    {{ data.meaning }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>2. Group 2 (Ru-verbs)</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>For <strong>Group 2 (Ru-verbs)</strong>, the conjugation is simpler. <u>You drop the
                                    <b>-ru</b> and add <b>-rareru</b></u>.
                            </p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Verb (dictionary form)</th>
                                        <th>Potential form</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group2">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.potential }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6>Example Sentences</h6>
                            <ul>
                                <li v-for="data in group2_example"><b>{{ data.example }}</b><br>{{ data.romaji }}
                                    <br>
                                    {{ data.meaning }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>3. Group 3 (Irregular Verbs)</b>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>There are only two irregular verbs in Japanese, and they conjugate in a special way:
                            </p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Verb (dictionary form)</th>
                                        <th>Potential form</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in group3">
                                        <td>{{ data.dictionary }}</td>
                                        <td>{{ data.potential }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6>Example Sentences</h6>
                            <ul>
                                <li v-for="data in group3_example"><b>{{ data.example }}</b><br>{{ data.romaji }}
                                    <br>
                                    {{ data.meaning }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3">
            <h5>Negative Potential Form</h5>
            <p>To make the potential form negative (i.e., “cannot” or “unable to”), you simply add -nai or -masen to
                the potential form.</p>
            <ul>
                <li>For <b>Group 1 (U-verbs)</b>: Drop the -ru and add -nai or -masen to the potential form.</li>
                <li>For <b>Group 2 (Ru-verbs)</b>: Drop the -ru and add -rarenai or -rasen.</li>
                <li>For <b>Group 3 (Irregular verbs)</b>: Use the negative form できない (dekinai) for する (suru) and
                    来られない (korarenai) for 来る (kuru).</li>
            </ul>
            <p>Examples:</p>
            <ul>
                <li><b>私は日本語を話せない。</b><br>(Watashi wa Nihongo o hanasenai.) <br>I cannot speak Japanese.</li>
                <li><b>彼はピアノが弾けない。</b><br>(Kare wa piano ga hikenai.)<br>He cannot play the piano.</li>
            </ul>
        </div>
        <div class="col-12 mt-3">
            <h5>Usage in Sentences</h5>
            <p>The potential form is quite versatile and can be used in various contexts to express ability or
                possibility:</p>
            <ol>
                <li><b>Expressing ability:</b>
                    <ul>
                        <li><b>私は泳げる。</b><br>(Watashi wa oyogeru.) <br>I can swim.</li>
                    </ul>
                </li>
                <li><b>Expressing permission or possibility:</b>
                    <ul>
                        <li><b>ここでタバコを吸ってもいいですか？</b> <br>
                            (Koko de tabako o sutte mo ii desu ka?) <br>
                            Is it okay to smoke here?
                        </li>
                        <li><b>ここでタバコを吸えますか？</b><br>
                            (Koko de tabako o suemasu ka?)<br>
                            Can I smoke here?
                        </li>
                    </ul>
                </li>
                <li><b>Polite requests or suggestions:</b>
                    <ul>
                        <li><b>この本を読めますか？</b> <br>
                            (Kono hon o yomemasu ka?) <br>
                            Can you read this book?
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
        <div class="col-12 mt-3">
            <div class="alert alert-info mt-4">
                <h5>Summary</h5>
                <ul>
                    <li><b>Group 1 (U-verbs)</b>: Replace -u with -eru.</li>
                    <li><b>Group 2 (Ru-verbs)</b>: Replace -ru with -rareru.</li>
                    <li><b>Group 3 (Irregular verbs)</b>: する becomes できる, and 来る becomes 来られる.</li>
                    <li><b>Negative potential</b>: Add -nai or -masen to the potential form.</li>
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
                { dictionary: 'かく (kaku) – to write', potential: 'かける (kakeru) – can write' },
                { dictionary: '飲む (nomu) – to drink', potential: '飲める (nomeru) – can drink' },
                { dictionary: '話す (hanasu) – to speak', potential: '話せる (hanaseru) – can speak' },
            ],
            group1_example: [
                { example: '私は日本語を話せる。', romaji: '(Watashi wa Nihongo o hanaseru.)', meaning: 'I can speak Japanese.' },
                { example: '彼はピアノが弾ける。', romaji: '(Kare wa piano ga hikeru.)', meaning: 'He can play the piano.' },
            ],
            group2: [
                { dictionary: '食べる (taberu) – to eat', potential: '食べられる (taberareru) – can eat' },
                { dictionary: '見る (miru) – to see', potential: '見られる (mirareru) – can see' },
                { dictionary: '寝る (neru) – to sleep', potential: '寝られる (nerareru) – can sleep' },
            ],
            group2_example: [
                { example: '私は寿司を食べられる。', romaji: '(Watashi wa sushi o taberareru.)', meaning: 'I can eat sushi.' },
                { example: '彼女は映画を見られる。', romaji: '(Kanojo wa eiga o mirareru.)', meaning: 'She can watch movies.' },
            ],
            group3: [
                { dictionary: 'する (suru) – to do', potential: '来る (kuru) – to come' },
                { dictionary: '来る (kuru) – to come', potential: '来られる (korareru) – can come' },
            ],
            group3_example: [
                { example: '私は勉強ができる。', romaji: '(Watashi wa benkyou ga dekiru.)', meaning: 'I can study.' },
                { example: '明日、彼は来られる。', romaji: '(Ashita, kare wa korareru.)', meaning: 'He can come tomorrow.' },
            ],
        }
    }
}
</script>