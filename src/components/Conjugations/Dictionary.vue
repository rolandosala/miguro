    <template>
        <div class="row">
            <div class="col-sm-12">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </div>
            <div class="col-sm-12">
                <h5>Examples:</h5>
                <ol>
                    <li v-for="example in examples"><strong>{{ example.kanji }}</strong><em>{{ example.kana }}</em> - {{
                        example.romaji }} {{ example.english }} </li>
                </ol>
            </div>
            <div class="col-sm-12">
                <h5>Key Points:</h5>
                <ul>
                    <li v-for="keypoints in keypoints">{{ keypoints }}</li>
                </ul>
            </div>
            <div class="col-sm-12">
                <h5>Sentence example:</h5>
                <ol>
                    <li v-for="example in sentence_examples"><strong>{{ example.kanji }}</strong><em>{{ example.romaji
                    }}</em>{{ example.english }}</li>
                </ol>
            </div>
            <div class="col-sm-12">
                <h5>Verb Groups: Godan vs Ichidan</h5>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Verb Group</th>
                                <th>Example Verbs</th>
                                <th>Conjugation Pattern</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in verb_group">
                                <td>{{ data.group }}</td>
                                <td>
                                    <ul>
                                        <li v-for="sample in data.sample">{{ sample }}</li>
                                    </ul>
                                </td>
                                <td>{{ data.desc }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 mt-2">
                <h5>Key Differences:</h5>
                <ul>
                    <li><strong>Godan Verbs (五段):</strong> These verbs change depending on the final syllable. For
                        example,
                        <strong>kaku</strong> (to write) becomes <strong>kaki</strong> when conjugated into the
                        <strong>te-form</strong> (書いて *kaite*).
                    </li>
                    <li><strong>Ichidan Verbs (一段):</strong> These verbs are simpler since they all follow a regular
                        pattern of
                        conjugation. The final <strong>-ru</strong> drops, and the root remains unchanged. For example,
                        <strong>taberu</strong> (to eat) becomes <strong>tabe</strong> when conjugated into the
                        <strong>te-form</strong> (食べて *tabete*).
                    </li>
                </ul>
            </div>
            <div class="col-sm-12">
                <h5>How to Identify Godan vs Ichidan Verbs:</h5>
                <ul>
                    <li><strong>Godan verbs:</strong> Usually end in <strong>-u</strong>, but they can end in various
                        syllables
                        like <strong>-ku</strong>, <strong>-su</strong>, <strong>-mu</strong>, <strong>-ru</strong>,
                        etc.</li>
                    <li><strong>Ichidan verbs:</strong> End specifically in <strong>-eru</strong> or
                        <strong>-iru</strong>.
                    </li>
                </ul>
            </div>
            <div class="col-sm-12 alert alert-info">
                <h5>Note:</h5>
                <p>The irregular verbs like <strong>する</strong> (suru – to do) and <strong>来る</strong> (kuru – to come) don't follow either group and have their own set of conjugations!</p>
            </div>
        </div>
    </template>
<script>
export default {
    data() {
        return {
            title: 'Dictionary Form（辞書形・じしょけい）',
            description: 'The dictionary form is the basic, unconjugated form of a verb in Japanese. It\'s called the "dictionary form" because it\'s the form you\'ll find in dictionaries.',
            examples: [
                { kanji: '書く', kana: '(かく)', romaji: '(kaku)', english: '– to write' },
                { kanji: '食べる', kana: '(たべる)', romaji: '(taberu)', english: '– to eat' },
                { kanji: 'する', kana: '', romaji: '(suru)', english: '– to do' },
                { kanji: '来る', kana: '(くる)', romaji: '(kuru)', english: '– to come' },
            ],
            keypoints: ['Used in casual speech with friends or people you’re close to.', 'It is the base form used to conjugate into other forms like masu,te,past, etc.', 'The ending of the verb tells you which verb group it belongs to (Godan, Ichidan, or Irregular), which affects how it conjugates.'],
            sentence_examples: [
                { kanji: '本を読む', kana: '()', romaji: '(Hon o yomu.)', english: '– (I) read a book.' },
                { kanji: '寿司を食べる', kana: '()', romaji: '(Sushi o taberu.)', english: '– (I) eat sushi.' },
            ],
            verb_group: [
                { group: 'Godan (五段)', sample: ['書く(かく) – to write', '話す(はなす) – to speak', '飲む(のむ) – to drink'], desc: 'Verbs end in -u, and the final -u changes in conjugation (e.g., -ku, -su, -mu)' },
                { group: 'Ichidan (一段)', sample: ['食べる(たべる) – to eat', '見る(みる) – to see', '寝る(ねる) – to sleep'], desc: 'Verbs end in -eru or -iru, and the final -ru drops off in conjugation, leaving the stem' },
            ],

        }
    }
}
</script>
