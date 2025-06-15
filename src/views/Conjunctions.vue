<template>
    <div class="row">
        <div class="col-12">
            <h4>Japanese Verb Conjugation: The Basics</h4>
            <p>Verb conjugation is key to expressing actions in Japanese. While it might seem challenging at first,
                Japanese verbs are very regular compared to many other languages.</p>
            <h5>Verb Groups</h5>
            <p>Japanese verbs fall into three groups:</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Also Called</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Group I</td>
                        <td>Godan verbs (五段動詞)</td>
                        <td>書く (かく / kaku), 話す (はなす / hanasu), 飲む (のむ / nomu)</td>
                    </tr>
                    <tr>
                        <td>Group II</td>
                        <td>Ichidan verbs (一段動詞)</td>
                        <td>食べる (たべる / taberu), 見る (みる / miru)</td>
                    </tr>
                    <tr>
                        <td>Group III</td>
                        <td>Irregular verbs (不規則動詞)</td>
                        <td>する (suru), 来る (くる / kuru)</td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 mt-2">
            <h5>Basic Verb Conjugations</h5>
            <p>Let’s look at how verbs change in different tenses and forms:</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="data in accordion_1">
                    <h2 class="accordion-header">
                        <button :class="'accordion-button z-0 ' + data.collapse" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + data.id" aria-expanded="true" :aria-controls="data.id">
                            <h6>{{ data.title }}</h6>
                        </button>
                    </h2>
                    <div :id="data.id" :class="'accordion-collapse collapse ' + data.show"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="table-responsive">
                                <table class="table align-middle">
                                    <thead>
                                        <tr>
                                            <th v-for="header in data.header">{{ header }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in data.rows">
                                            <td>{{ item.form }}</td>
                                            <td>{{ item.group1 }}</td>
                                            <td>{{ item.group2 }}</td>
                                            <td>{{ item.group3 }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mt-2">
            <h5>Example Sentences</h5>
            <div class="accordion" id="accordionExample2">
                <div class="accordion-item" v-for="data in accordion_2">
                    <h2 class="accordion-header">
                        <button :class="'accordion-button z-0 ' + data.collapse" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + data.id" aria-expanded="true" :aria-controls="data.id">
                            <h6>{{ data.title }}</h6>
                        </button>
                    </h2>
                    <div :id="data.id" :class="'accordion-collapse collapse ' + data.show"
                        data-bs-parent="#accordionExample2">
                        <div class="accordion-body">
                            <ul>
                                <li v-for="list in data.list"><b>{{ list.label }}</b>
                                    <ul>
                                        <li v-for="sample in list.sample">{{ sample.kanji }}<br>{{ sample.kana }}<br>{{
                                            sample.romaji }} <br>{{ sample.english }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            accordion_1: [
                {
                    id: 'collapse1', title: '1. Present / Future Tense', collapse: 'collapsed', show: 'show',
                    header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
                    rows: [
                        { form: 'Dictionary Form', group1: '話す (hanasu)', group2: '食べる (taberu)', group3: 'する (suru) / 来る (kuru)' },
                        { form: 'Polite Form', group1: '話します (hanashimasu)', group2: '食べます (tabemasu)', group3: '' }],
                },
                {
                    id: 'collapse2', title: '2. Past Tense', collapse: 'collapsed', show: '',
                    header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
                    rows: [
                        { form: 'Plain Past', group1: '話した (hanashita)', group2: '食べた (tabeta)', group3: 'した (shita) / 来た (kita)' },
                        { form: 'Polite Past', group1: '話しました(hanashimashita)', group2: '食べました(tabemashita)', group3: 'しました (shimashita) / 来ました (kimashita)' }],
                },
                {
                    id: 'collapse3', title: '3. Negative Form', collapse: 'collapsed', show: '',
                    header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
                    rows: [
                        { form: 'Plain Negative', group1: '話さない (hanasanai)', group2: '食べない (tabenai)', group3: 'しない (shinai) / 来ない (konai)' },
                        { form: 'Polite Negative', group1: '話しません (hanashimasen)', group2: '食べません (tabemasen)', group3: 'しません (shimasen) / 来ません (kimasen)' }],
                },
            ],
            accordion_2: [
                {
                    id: 'collapse4', title: 'Group 1 – 話す (hanasu) – to speak', collapse: 'collapsed', show: 'show',
                    list: [
                        {
                            label: 'Present:',
                            sample: [{ kanji: '彼は日本語を話します。', kana: 'かれは にほんごを はなします。', romaji: 'Kare wa Nihongo o hanashimasu. ', english: 'He speaks Japanese.' }]
                        },
                        {
                            label: 'Past:',
                            sample: [{ kanji: '昨日、日本語を話しました。', kana: 'きのう、にほんごを はなしました。', romaji: 'Kinō, Nihongo o hanashimashita.', english: 'Yesterday, I spoke Japanese.' }]
                        },
                        {
                            label: 'Negative:',
                            sample: [{ kanji: '英語を話しません。', kana: 'えいごを はなしません。', romaji: 'Eigo o hanashimasen.', english: 'I don’t speak English.' }]
                        },
                    ],
                },
                {
                    id: 'collapse5', title: 'Group 2 – 食べる (taberu) – to eat', collapse: 'collapsed', show: '',
                    list: [
                        {
                            label: 'Present:',
                            sample: [{ kanji: '毎日、朝ごはんを食べます。', kana: 'まいにち、あさごはんを たべます。', romaji: 'Mainichi, asagohan o tabemasu.', english: 'I eat breakfast every day.' }]
                        },
                        {
                            label: 'Past:',
                            sample: [{ kanji: '寿司を食べました。', kana: 'すしを たべました。', romaji: 'Sushi o tabemashita.', english: 'I ate sushi.' }]
                        },
                        {
                            label: 'Negative:',
                            sample: [{ kanji: '肉を食べません。', kana: 'にくを たべません。', romaji: 'Niku o tabemasen.', english: 'I don’t eat meat.' }]
                        },
                    ],
                },
                {
                    id: 'collapse6', title: 'Group 3 – する (suru) – to do', collapse: 'collapsed', show: '',
                    list: [
                        {
                            label: 'Present:',
                            sample: [{ kanji: '宿題をします。', kana: 'しゅくだいを します。', romaji: 'Shukudai o shimasu.', english: 'I do homework.' }]
                        },
                        {
                            label: 'Past:',
                            sample: [{ kanji: '運動をしました。', kana: 'うんどうを しました。', romaji: 'Undō o shimashita.', english: 'I exercised. ' }]
                        },
                        {
                            label: 'Negative:',
                            sample: [{ kanji: '宿題をしません。', kana: 'しゅくだいを しません。', romaji: 'Shukudai o shimasen.', english: 'I didn’t do homework.' }]
                        },
                    ],
                },
            ]
        }
    }
}
</script>