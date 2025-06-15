<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Japanese Question Word: 「何」 – <em>What?</em></h4>
            <p>
                The word <strong>何</strong> is used to ask questions about unknown things. It's a common question
                word in Japanese conversation.
            </p>
            <p>
                <strong>なに (nani)</strong> is used when followed by particles like を or が. <br />
                <strong>なん (nan)</strong> is used when followed by です or counters (like 時 <em>ji</em> for time).
            </p>
        </div>
        <div class="col-sm-12">
            <h5>Example Sentences</h5>
            <ol>
                <li v-for="data in examples" class="mt-4"><strong>{{ data.jp }}</strong><br><em>{{ data.kana }}</em><br>{{ data.romaji }} <br> <i>Translation: {{ data.en }}</i></li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhatQuestion',
    data() {
        return {
            examples: [
                {
                    title: '1. What is this?',
                    jp: 'これは何ですか？',
                    kana: 'これはなんですか？',
                    romaji: 'Kore wa nan desu ka?',
                    en: 'What is this?',
                    desc: 'Used to ask politely about an object near you.',
                },
                {
                    title: '2. What do you want to eat?',
                    jp: '何を食べたいですか？',
                    kana: 'なにをたべたいですか？',
                    romaji: 'Nani o tabetai desu ka?',
                    en: 'What do you want to eat?',
                    desc: 'Used when talking about food preferences or meal choices.',
                },
                {
                    title: '3. What time is it?',
                    jp: '今は何時ですか？',
                    kana: 'いまはなんじですか？',
                    romaji: 'Ima wa nanji desu ka?',
                    en: 'What time is it?',
                    desc: 'Used to ask for the current time.',
                },
                {
                    title: '4. What did you say?',
                    jp: '何と言いましたか？',
                    kana: 'なんといいましたか？',
                    romaji: 'Nan to iimashita ka?',
                    en: 'What did you say?',
                    desc: 'Used when asking someone to repeat something politely.',
                },
                {
                    title: '5. What kind of music do you like?',
                    jp: 'どんな音楽が好きですか？',
                    kana: 'どんなおんがくがすきですか？',
                    romaji: 'Donna ongaku ga suki desu ka?',
                    en: 'What kind of music do you like?',
                    desc: 'Used when asking about someone’s preferences.',
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
