<template>
    <div class="row">
        <div class="col-12">
            <h4>Words for instutions</h4>
            <p> When you describe a person’s occupation, you can say where the person works. For example, if
                someone is a high school teacher, you can say either <b>高校の先生です Kōkō no sensei desu (He
                is a high school teacher)</b> or <b>高校で働いています Kōkō de hataraite imasu (He works at a high
                school)</b>. The following is a list of types of institutions: </p>

            <table class="table table-bordered table-striped mt-4 text-center">
                <thead class="table-dark ">
                    <tr>
                        <th>English</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in institution">
                        <td>{{ data.english }}</td>
                        <td>{{ data.kanji }}</td>
                        <td>{{ data.romaji }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            institution: [
                { english: 'bank', kanji: '銀行', romaji: 'ginkō' },
                { english: 'city hall', kanji: '市役所', romaji: 'shiyakusho' },
                { english: 'company', kanji: '市役所', romaji: 'kaisha' },
                { english: 'department store', kanji: 'デパート', romaji: 'depāto' },
                { english: 'elementary school', kanji: '小学校', romaji: 'shōgakkō' },
                { english: 'factory', kanji: '工場', romaji: 'kōjō' },
                { english: 'fire station', kanji: '消防署', romaji: 'shōbōsho' },
                { english: 'graduate school', kanji: '大学院', romaji: 'daigakuin' },
                { english: 'high school', kanji: '高校', romaji: 'kōkō' },
                { english: 'hospital', kanji: '病院', romaji: 'byōin' },
                { english: 'library', kanji: '図書館', romaji: 'toshokan' },
                { english: 'middle school', kanji: '中学校', romaji: 'chūgakkō' },
                { english: 'police station', kanji: '警察', romaji: 'keisatsusho' },
                { english: 'restaurant', kanji: 'レストラン', romaji: 'resutoran' },
                { english: 'school', kanji: '学校', romaji: 'gakkō' },
                { english: 'university', kanji: '大学', romaji: 'daigaku' },
            ],
        }
    }
}
</script>