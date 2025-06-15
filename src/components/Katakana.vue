<template>
    <div class="row">
        <div class="col-12">
            <h4>What is Katakana (カタカナ)?</h4>
            <p>Katakana is one of the three writing systems used in Japanese, alongside Hiragana (ひらがな) and Kanji
                (漢字). While Hiragana is used for native Japanese words and grammatical elements, Katakana is
                primarily used for foreign words, names, loanwords (called gairaigo), and sometimes for emphasis —
                similar to how we use italics or ALL CAPS in English.</p>
            <h5>Why Learn Katakana?</h5>
            <p>If you want to read menus, follow signs in Japan, or understand pop culture references, knowing
                Katakana is a must. Many modern Japanese words borrowed from English and other languages are written
                in Katakana, such as:</p>
            <ul>
                <li>コンピューター (konpyūtā) – computer</li>
                <li>アイスクリーム (aisu kurīmu) – ice cream</li>
                <li>テレビ (terebi) – television</li>
                <li>ジョン (Jon) – John</li>
            </ul>
            <p>It’s also used in scientific terms, animal names, onomatopoeia, and branding.</p>
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Katakana Chart</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#characterTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="characterTable">
                            <p>Katakana consists of 46 basic characters, each representing a specific syllable.
                                These are the same sounds as in Hiragana, just written differently.</p>
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in characters">
                                        <td v-for="ch in data.character">
                                            <span class="fs-5">{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning">Download Table</button>
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
            <div class="row mt-3">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Dakutin Chart</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#dakutinTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="dakutinTable">
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in dakuten">
                                        <td v-for="ch in data.character">
                                            <span >{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning">Download Table</button>
                        </div>
                    </div>

                </div>
                <div class="col-sm-12 col-lg-6 mt-2">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Yoon Chart</h5>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse"
                                href="#yoonTable">Collapse</button>
                        </div>
                        <div class="card-body accordion-collapse collapse" id="yoonTable">
                            <table class="table">
                                <tbody>
                                    <tr v-for="data in yoon">
                                        <td v-for="ch in data.character">
                                            <span>{{ ch }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-warning">Download Table</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3">
            <h5>Other Special Katakana</h5>
            <table class="table">
                <tbody>
                    <tr v-for="data in otherCharacters">
                        <td>{{ data.character }}</td>
                        <td>{{ data.usage }}</td>
                    </tr>
                </tbody>
            </table>
            <h5>Common Mistakes to Watch Out For</h5>
            <ul>
                <li>Similar-looking characters: For example, シ (shi) vs ツ (tsu), or ソ (so) vs ン (n).</li>
                <li>Over-relying on English pronunciation: Japanese loanwords often sound different than their
                    English counterparts.
                    <ul>
                        <li>Example: “McDonald’s” becomes マクドナルド (Makudonarudo).</li>
                    </ul>
                </li>
            </ul>
            <p>Katakana is a powerful tool for reading and writing modern Japanese. It opens up a huge part of the
                language — from everyday products to pop culture. Mastering Katakana early on will accelerate your
                Japanese learning journey and make the language feel a lot more accessible.

                Ready to dive in? Check out our [Katakana Practice Tools] and [Interactive Flashcards] to get
                started!</p>

        </div>
        <div class="col-sm-12 col-lg-12">
            <div class="row p-2">
                <div class="col-sm-12 col-lg-8 alert alert-info mt-4">
                    <h5>Tips for Learning Katakana</h5>
                    <ol>
                        <li>Start with recognition – Learn to read and pronounce Katakana before worrying about writing
                            it.
                        </li>
                        <li>Use flashcards or apps – Consistent repetition helps with memorization.</li>
                        <li>Spot it in the wild – Katakana is everywhere in Japan. Try reading signs, menus, or
                            packaging.
                        </li>
                        <li>Practice with real words – Learning words like コーヒー (coffee) and パン (bread) makes it more
                            fun
                            and practical.</li>
                        <li>Compare with Hiragana – It’s useful to understand the difference and when each is used.</li>
                    </ol>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
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
            characters: [
                { character: ['ア (a)', 'イ (i)', 'ウ (u)', 'エ (e)', 'オ (o)'] },
                { character: ['カ (ka)', 'キ (ki)', 'ク (ku)', 'ケ (ke)', 'コ (ko)'] },
                { character: ['サ (sa)', 'シ (shi)', 'ス (su)', 'セ (se)', 'ソ (so)'] },
                { character: ['タ (ta)', 'チ (chi)', 'ツ (tsu)', 'テ (te)', 'ト (to)'] },
                { character: ['ナ (na)', 'ニ (ni)', 'ヌ (nu)', 'ネ (ne)', 'ノ (no)'] },
                { character: ['ハ (ha)', 'ヒ (hi)', 'フ (fu)', 'ヘ (he)', 'ホ (ho)'] },
                { character: ['マ (ma)', 'ミ (mi)', 'ム (mu)', 'メ (me)', 'モ (mo)'] },
                { character: ['ラ (ra)', 'リ (ri)', 'ル (ru)', 'レ (re)', 'ロ (ro)'] },
                { character: ['ヤ (ya)', '-', 'ユ (yu)', '-', 'ヨ (yo)'] },
                { character: ['ワ (wa)', '-', '-', '-', 'ヲ (wo)'] },
                { character: ['ん (n)', '-', '-', '-', '-'] },
            ],
            basic_vocabulary: [
                {
                    title: '',
                    vocabulary: [
                        { meaning: 'TV', kana: 'テレビ', romaji: 'terebi' },
                        { meaning: 'radio', kana: 'ラジオ', romaji: 'rajio' },
                        { meaning: 'computer, PC', kana: 'パソコン', romaji: 'pasokon' },
                        { meaning: 'convenience store', kana: 'コンビニ', romaji: 'konbini' },
                        { meaning: 'pen', kana: 'ペン', romaji: 'pen' },
                        { meaning: 'boat', kana: 'ボート', romaji: 'bōto' },
                        { meaning: 'pet', kana: 'ペット', romaji: 'petto' },
                        { meaning: 'internet', kana: 'インターネット', romaji: 'intānetto' },
                        { meaning: 'soccer', kana: 'サッカー', romaji: 'sakkā' },
                    ]
                },
                {
                    title: 'Country Names in Katakana',
                    vocabulary: [
                        { meaning: 'Australia', kana: 'オーストラリア', romaji: 'Ōsutoraria' },
                        { meaning: 'Canada', kana: 'カナダ', romaji: 'Kanada' },
                        { meaning: 'France', kana: 'フランス', romaji: 'Furansu' },
                        { meaning: 'India', kana: 'インド', romaji: 'Indo' },
                        { meaning: 'Russia', kana: 'ロシア', romaji: 'Roshia' },
                        { meaning: 'America', kana: 'アメリカ', romaji: 'Amerika' },
                    ]
                }
            ],
            dakuten: [
                { character: ['ガ (ga)', 'ギ (gi)', 'グ (gu)', 'ゲ (ge)', 'ゴ (go)'] },
                { character: ['ザ (za)', 'ジ (ji)', 'ズ (zu)', 'ゼ (ze)', 'ゾ (zo)'] },
                { character: ['ダ (da)', 'ヂ (ji/di)', 'ヅ (zu/du)', 'デ (de)', 'ド (do)'] },
                { character: ['バ (ba)', 'ビ (bi)', 'ブ (bu)', 'ベ (be)', 'ボ (bo)'] },
                { character: ['パ (pa)', 'ピ (pi)', 'プ (pu)', 'ペ (pe)', 'ポ (po)'] },
            ],
            yoon: [
                { character: ['キャ (kya)', 'キュ (kyu)', 'キョ (kyo)'] },
                { character: ['ギャ (gya)', 'ギュ (gyu)', 'ギョ (gyo)'] },
                { character: ['シャ (sha)', 'シュ (shu)', 'ショ (sho)'] },
                { character: ['ジャ (ja)', 'ジュ (ju)', 'ジョ (jo)'] },
                { character: ['チャ (cha)', 'チュ (chu)', 'チョ (cho)'] },
                { character: ['ニャ (nya)', 'ニュ (nyu)', 'ニョ (nyo)'] },
                { character: ['ヒャ (hya)', 'ヒュ (hyu)', 'ヒョ (hyo)'] },
                { character: ['ビャ (bya)', 'ビュ (byu)', 'ビョ (byo)'] },
                { character: ['ピャ (pya)', 'ピュ (pyu)', 'ピョ (pyo)'] },
                { character: ['ミャ (mya)', 'ミュ (myu)', 'ミョ (myo)'] },
                { character: ['リャ (rya)', 'リュ (ryu)', 'リョ (ryo)'] },

            ],
            otherCharacters: [
                { character: 'ー', usage: 'Long vowel mark (e.g., コーヒー "coffee")' },
                { character: 'ヴ', usage: '"V" sound, often used in foreign words (e.g., ヴァイオリン for "violin")' },
                { character: 'ヵ / ヶ', usage: 'Small versions of カ and ケ, used in counters and place names' },
                { character: 'ㇰ, ㇱ, etc.', usage: 'Rare small katakana for Ainu or linguistic use (not commonly used in standard Japanese)' },
            ]
        }
    }
}
</script>
<style scoped></style>