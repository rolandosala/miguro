<template>
    <div class="row">
        <div class="col-12">
            <h4>Words for occupation</h4>
            <p> The following are some nouns for occupation: </p>

            <table class="table table-bordered table-striped mt-4 text-center">
                <thead class="table-dark ">
                    <tr>
                        <th>English</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in occupations">
                        <td>{{ data.english }}</td>
                        <td>{{ data.kanji }}</td>
                        <td>{{ data.romaji }}</td>
                    </tr>
                </tbody>
            </table>
            <p>When you are describing yourself or your family, use <b>教師 kyōshi</b> instead of <b>先生 sensei</b>.</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            occupations: [
                { english: 'doctor', kanji: '医者', romaji: 'isha' },
                { english: 'lawyer', kanji: '弁護士', romaji: 'bengoshi' },
                { english: 'nurse', kanji: '看護師', romaji: 'kangoshi' },
                { english: 'store worker', kanji: '店員', romaji: 'ten’in' },
                { english: 'student', kanji: '学生', romaji: 'gakusei' },
                { english: 'teacher', kanji: '先生 / 教師', romaji: 'sensei/kyōshi' },
                /* { english: 'Saturday', kanji: '土曜日', romaji: 'Doyoubi' }, */
            ],
        }
    }
}
</script>