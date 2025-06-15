<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <Accordion :accordion="accordion" />
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center ">
                    <img src="/miguro_3.png" alt="" style="width: 60%;">
                    <button class="btn btn-outline-success">Would you like a practice?</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Accordion from './Accordion.vue';
export default {
    components: {
        Accordion
    },
    data() {
        return {
            title: 'The Japanese Particle 「と」 – Meaning, Usage & Examples',
            description: 'The particle と is one of the first particles Japanese learners encounter, and it has several core functions. It’s often used to mean "and," "with," or to quote someone. Let’s break it down!',
            accordion: [
                {
                    id: 'collapseOne', title: '1. 「と」 as "And" (Listing Items)', description: 'This is the most straightforward use. When listing two or more specific nouns, you use と to mean "and." Structure: Noun 1 + と + Noun 2', example: [
                        { kana: 'パンとバターを食べました。', romaji: 'Pan to batā o tabemashita.', translation: 'I ate bread and butter.' },
                        { kana: '猫と犬が好きです。', romaji: 'Neko to inu ga suki desu.', translation: 'I like cats and dogs.' },
                    ], note: 'Note: 「と」 is only used when listing complete and specific items. For general incomplete lists, use や (ya) or など (nado).', collapsed: 'collapsed'
                },
                {
                    id: 'collapseTwo', title: '2. 「と」 as "With" (Together with Someone)', description: 'When used with a person or living being, と can mean "with." It shows that someone is doing something together with someone else. Structure: Person + と + Verb',
                    example: [
                        { kana: '友だちと映画を見ました。', romaji: 'Tomodachi to eiga o mimashita.', translation: 'I watched a movie with my friend.' },
                        { kana: '家族と住んでいます。', romaji: 'Kazoku to sundeimasu.', translation: 'I live with my family.' },
                    ], note: 'Note: Be careful! If you\'re talking about "with a tool" (like "with a pen"),you\'d use で instead of と.', collapsed: 'collapsed'
                },
                {
                    id: 'collapseThree', title: '3. 「と」 for Quoting or Thoughts (Like “That”)', description: 'When quoting directly or expressing what someone says or thinks, use と before verbs like 言う (to say), 思う (to think), 聞く (to hear), etc. Structure: Phrase + と + 言う / 思う / 聞く etc. ',
                    example: [
                        { kana: '「行きたい」と言いました。', romaji: '"Ikitai" to iimashita.', translation: 'He said, "I want to go."' },
                        { kana: '彼は来ないと思います。', romaji: 'Kare wa konai to omoimasu.', translation: 'I think he won’t come.' },
                        { kana: '明日は雨だと聞きました。', romaji: 'Ashita wa ame da to kikimashita.', translation: 'I heard that it will rain tomorrow.' },
                    ], note: 'Note: Be careful! If you\'re talking about "with a tool" (like "with a pen"),you\'d use で instead of と.', collapsed: 'collapsed'
                },
            ]
        }
    }
}

</script>