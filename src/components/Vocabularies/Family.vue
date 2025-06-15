<template>
    <div class="row">
        <div class="col-12">
            <h4>Talking about family members</h4>
            <p> To refer to your own family members, use the plain forms. To refer to someone else’s family mem
                bers, use the polite forms. You can also use the polite forms for addressing your own family
                members who are older than you. (See Chapter 1 for how to address one’s older family members.)
                The following table shows the plain forms and the polite forms you can use for referring to your
                close family members:</p>

            <table class="table table-bordered table-striped mt-4 text-center">
                <thead class="table-dark ">
                    <tr>
                        <th></th>
                        <th colspan="2">Plain</th>
                        <th colspan="2">Polite</th>
                    </tr>
                    <tr>
                        <th>English</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in institution">
                        <td>{{ data.english }}</td>
                        <td>{{ data.kanji }}</td>
                        <td>{{ data.romaji }}</td>
                        <td>{{ data.polite }}</td>
                        <td>{{ data.polite_romaji }}</td>
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
                { english: 'father', kanji: '父', romaji: 'chichi', polite: 'お父さん', polite_romaji: 'otōsan' },
                { english: 'mother', kanji: '母', romaji: 'haha', polite: 'お母さん', polite_romaji: 'okāsan' },
                { english: 'older brother', kanji: '兄', romaji: 'ani', polite: 'お兄さん', polite_romaji: 'onīsan' },
                { english: 'older sister', kanji: '姉', romaji: 'ane', polite: 'お姉さん', polite_romaji: 'onēsan' },
                { english: 'younger brother', kanji: '弟', romaji: 'otōto', polite: '弟さん', polite_romaji: 'otōtosan' },
                { english: 'younger sister', kanji: '妹', romaji: 'imōto', polite: '妹さん', polite_romaji: 'imōtosan' },
            ],
        }
    }
}
</script>