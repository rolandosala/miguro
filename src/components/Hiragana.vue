<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Introduction to Hiragana (ひらがな)</h4>
            <p>Hiragana is one of the three writing systems used in the Japanese language, alongside Katakana and
                Kanji. It's often the first script Japanese children and new learners of the language are taught.
            </p>
            <h5>Why Learn Hiragana?</h5>
            <label>Hiragana is essential for:</label>
            <ul>
                <li>Reading native Japanese words not written in Kanji</li>
                <li>Grammar particles (like は, を, で)</li>
                <li>Verb and adjective endings</li>
                <li>Furigana (small Hiragana written next to Kanji to show pronunciation)</li>
            </ul>
            <span>Mastering Hiragana opens the door to reading and writing basic Japanese!</span>
            <div class="row mt-3">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Hiragana Basics</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#characterTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="characterTable">
                            <p>Hiragana consists of 46 basic characters, each representing a specific syllable
                                (sound).</p>
                            <p>These characters are grouped in a chart known as the Gojūon (ごじゅうおん) — the "50
                                Sounds" table.</p>
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in characters">
                                        <td v-for="ch in data.character">
                                            <span class="fs-6">{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Note: Some cells are blank because not all combinations exist in standard Japanese
                                pronunciation.</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#modalDownload">Download
                                Practice Table</button>
                        </div>
                    </div>

                </div>
                <div class="col-sm-12 col-lg-6 mt-2">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Basic Vocabulary</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#vocabTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="vocabTable">
                            <table class="table" v-for="data in basic_vocabulary">
                                <thead>
                                    <tr>
                                        <th>{{ data.title }}</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr v-for="vocabulary in data.vocabulary">
                                        <td>{{ vocabulary.meaning }}</td>
                                        <td>{{ vocabulary.kana }}</td>
                                        <td>{{ vocabulary.romaji }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 mt-3">
            <h5>Additional Hiragana Variations</h5>
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Dakuten (゛) & Handakuten (゜)</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#dakutenTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="dakutenTable">
                            <p>These marks slightly modify sounds:</p>
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in dakuten">
                                        <td v-for="ch in data.character">
                                            <span class="fs-5">{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Note: ぢ (ji) and づ (zu) are rarely used and usually replaced with じ and ず, except in
                                certain native words or compounds.</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning">Download Practice Table</button>
                        </div>
                    </div>

                </div>
                <div class="col-sm-12 col-lg-6 mt-2">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Yōon (Contracted Sounds)</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#yoonTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="yoonTable">
                            <p>By combining smaller versions of や (ya), ゆ (yu), and よ (yo) with certain consonant
                                rows, you get contracted syllables:</p>
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in yoonCharacters">
                                        <td v-for="ch in data.character">
                                            <span class="fs-5">{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning">Download Practice Table</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8 alert alert-info mt-4">
                    <h5>Tips for Learning Hiragana</h5>
                    <ul>
                        <li>Practice writing: Each character has a stroke order. Repetition helps memorization.</li>
                        <li>Use mnemonics: Visual cues can help (e.g., さ "sa" looks like a fishhook – "catching samon").
                        </li>
                        <li>Flashcards: Great for testing recognition.</li>
                        <li>Apps and games: Make it interactive!</li>
                        <li>Read children’s books: Most are written in Hiragana.</li>
                    </ul>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
                    <img src="/miguro_3.png" alt="" style="width: 80%;">
                    <button class="btn btn-outline-success form-control">Would you like a practice?</button>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3">
            <div class="row">
                <div class="col-12">
                    <h5>Final Thoughts</h5>
                    <p>Hiragana is more than just an alphabet—it's a gateway to understanding Japanese structure, sound,
                        and
                        rhythm. Whether you’re aiming to travel, watch anime without subtitles, or pass the JLPT,
                        mastering
                        Hiragana is step one.</p>
                    <p>Ready to begin your Hiragana journey? Let’s start with あいうえお!</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalDownload" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Choose what to practice?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="">Close</button>
                </div>
                <div class="modal-footer  d-flex justify-content-center align-items-center">
                    <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            characters: [
                { character: ['あ (a)', 'い (i)', 'う (u)', 'え (e)', 'お(o)'] },
                { character: ['か (ka)', 'き (ki)', 'く (ku)', 'け (ke)', 'こ (ko)'] },
                { character: ['さ (sa)', 'し (shi)', 'す (su)', 'せ (se)', 'そ (so)'] },
                { character: ['た (ta)', 'ち (chi)', 'つ (tsu)', 'て (te)', 'と (to)'] },
                { character: ['な (na)', 'に (ni)', 'ぬ (nu)', 'ね (ne)', 'の (no)'] },
                { character: ['は (ha)', 'ひ (hi)', 'ふ (fu)', 'へ (he)', 'ほ (ho)'] },
                { character: ['ま (ma)', 'み (mi)', 'む (mu)', 'め (me)', 'も (mo)'] },
                { character: ['ら (ra)', 'り (ri)', 'る (ru)', 'れ (re)', 'ろ (ro)'] },
                { character: ['や (ya)', '-', 'ゆ (yu)', '-', 'よ(yo)'] },
                { character: ['わ (wa)', '-', '-', '-', 'を (wo)'] },
                { character: ['ん (n)', '-', '-', '-', '-'] },
            ],
            dakuten: [
                { character: ['が (ga)', 'ぎ (gi)', 'ぐ (gu)', 'げ (ge)', 'ご (go)'] },
                { character: ['ざ (za)', 'じ (ji)', 'ず (zu)', 'ぜ (ze)', 'ぞ (zo)'] },
                { character: ['だ (da)', 'ぢ (ji)', 'づ (zu)', 'で (de)', 'ど (do)'] },
                { character: ['ば (ba)', 'び (bi)', 'ぶ (bu)', 'べ (be)', 'ぼ (bo)'] },
                { character: ['ぱ (pa)', 'ぴ (pi)', 'ぷ (pu)', 'ぺ (pe)', 'ぽ (po)'] }
            ],
            yoonCharacters: [
                { character: ['きゃ (kya)', 'きゅ (kyu)', 'きょ (kyo)'] },
                { character: ['ぎゃ (gya)', 'ぎゅ (gyu)', 'ぎょ (gyo)'] },
                { character: ['しゃ (sha)', 'しゅ (shu)', 'しょ (sho)'] },
                { character: ['じゃ (ja)', 'じゅ (ju)', 'じょ (jo)'] },
                { character: ['ちゃ (cha)', 'ちゅ (chu)', 'ちょ (cho)'] },
                { character: ['にゃ (nya)', 'にゅ (nyu)', 'にょ (nyo)'] },
                { character: ['ひゃ (hya)', 'ひゅ (hyu)', 'ひょ (hyo)'] },
                { character: ['びゃ (bya)', 'びゅ (byu)', 'びょ (byo)'] },
                { character: ['ぴゃ (pya)', 'ぴゅ (pyu)', 'ぴょ (pyo)'] },
                { character: ['みゃ (mya)', 'みゅ (myu)', 'みょ (myo)'] },
                { character: ['りゃ (rya)', 'りゅ (ryu)', 'りょ (ryo)'] }
            ],
            basic_vocabulary: [
                {
                    title: 'Words for Body parts',
                    vocabulary: [
                        { meaning: 'foot/leg', kana: 'あし', romaji: 'ashi' },
                        { meaning: 'head', kana: 'あたま', romaji: 'atama' },
                        { meaning: 'belly', kana: 'おなか', romaji: 'onaka' },
                        { meaning: 'face', kana: 'かお', romaji: 'kao' },
                        { meaning: 'mouth', kana: 'くち', romaji: 'kuchi' },
                        { meaning: 'back', kana: 'せなか', romaji: 'senaka' },
                        { meaning: 'nose', kana: 'はな', romaji: 'hana' },
                        { meaning: 'ear', kana: 'みみ', romaji: 'mimi' },
                        { meaning: 'eye', kana: 'め', romaji: 'me' },
                    ]
                },
                {
                    title: 'Words for Nature',
                    vocabulary: [
                        { meaning: 'rain', kana: 'あめ', romaji: 'ame' },
                        { meaning: 'stone', kana: 'いし', romaji: 'ishi' },
                        { meaning: 'rock', kana: 'いわ', romaji: 'iwa' },
                        { meaning: 'ocean', kana: 'うみ', romaji: 'umi' },
                        { meaning: 'river', kana: 'かわ', romaji: 'kawa' },
                        { meaning: 'tree', kana: 'き', romaji: 'ki' },
                        { meaning: 'cloud', kana: 'くも', romaji: 'kumo' },
                        { meaning: 'sky', kana: 'そら', romaji: 'sora' },
                        { meaning: 'valley', kana: 'たに', romaji: 'tani' },
                        { meaning: 'the moon', kana: 'つき', romaji: 'tsuki' },
                        { meaning: 'soil', kana: 'つち', romaji: 'tsuchi' },
                        { meaning: 'fire', kana: 'ひ', romaji: 'hi' },
                        { meaning: 'star', kana: 'ほし', romaji: 'hoshi' },
                        { meaning: 'mountain', kana: 'やま', romaji: 'yama' },
                        { meaning: 'snow', kana: 'ゆき', romaji: 'yuki' },
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped></style>