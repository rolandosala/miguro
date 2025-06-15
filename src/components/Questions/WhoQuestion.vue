<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Japanese Question Word: 「誰」 – <em>Who?</em></h4>
            <p class="mb-0">
                「誰」 is used to ask about people. It can be used in formal and informal conversations. In casual
                speech, you may hear 「だれ？」 simply by itself to mean “Who?”
            </p>
        </div>
    </div>
    <div class="col-sm-12 mt-2">
        <h5>Example Sentences</h5>
        <ol>
            <li v-for="data in examples" class="mt-2"><strong>{{ data.jp }}</strong><br><em>{{ data.kana }}</em><br>{{
                data.romaji }} <br> <i>Translation: {{ data.en }}</i></li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'WhoQuestion',
    data() {
        return {
            examples: [
                {
                    title: '1. Who is that person?',
                    jp: 'あの人は誰ですか？',
                    kana: 'あのひとはだれですか？',
                    romaji: 'Ano hito wa dare desu ka?',
                    en: 'Who is that person?',
                    desc: 'Used to politely ask about someone you see.',
                },
                {
                    title: '2. Who called you?',
                    jp: '誰があなたに電話しましたか？',
                    kana: 'だれがあなたにでんわしましたか？',
                    romaji: 'Dare ga anata ni denwa shimashita ka?',
                    en: 'Who called you?',
                    desc: 'Used to ask who performed the action.',
                },
                {
                    title: '3. Who is your teacher?',
                    jp: 'あなたの先生は誰ですか？',
                    kana: 'あなたのせんせいはだれですか？',
                    romaji: 'Anata no sensei wa dare desu ka?',
                    en: 'Who is your teacher?',
                    desc: 'Common in classroom or school settings.',
                },
                {
                    title: '4. Who will go to the party?',
                    jp: '誰がパーティーに行きますか？',
                    kana: 'だれがぱーてぃーにいきますか？',
                    romaji: 'Dare ga paatii ni ikimasu ka?',
                    en: 'Who will go to the party?',
                    desc: 'Asking about future plans involving people.',
                },
                {
                    title: '5. Who is at the door?',
                    jp: 'ドアのところにいるのは誰ですか？',
                    kana: 'どあのところにいるのはだれですか？',
                    romaji: 'Doa no tokoro ni iru no wa dare desu ka?',
                    en: 'Who is at the door?',
                    desc: 'Used when reacting to a sound or knock.',
                },
            ],
        };
    },
};
</script>

<style scoped>
code {
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
}
</style>
