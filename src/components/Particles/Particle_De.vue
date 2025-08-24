<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ paragraph }}</p>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <div class="accordion" id="accordionExample ">
                        <div class="accordion-item" v-for="data in accordion">
                            <h2 class="accordion-header">
                                <button :class="data.collapsed" class="accordion-button z-1" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#' + data.id" aria-expanded="true"
                                    :aria-controls="data.id">
                                    <h5>{{ data.title }}</h5>
                                </button>
                            </h2>
                            <div :id="data.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>{{ data.description }}</p>
                                    <b>Example</b>
                                    <ol>
                                        <li v-for="example in data.example">
                                            <b>{{ example.kana }}</b><br>
                                            <em>{{ example.romaji }}</em><br>
                                            {{ example.translation }} <br>
                                            <b>Breakdown</b>
                                            <ul>
                                                <li v-for="breakdown in example.breakdown"><b>{{ breakdown.word }}</b> =
                                                    {{
                                                        breakdown.meaning }}</li>
                                            </ul>
                                            <p class="alert alert-info mt-3" v-if="example.note != ''">{{ example.note
                                            }}</p>
                                        </li>
                                    </ol>
                                    <p class="alert alert-warning mt-3" v-if="data.note != ''">{{ data.note }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center ">
                    <img src="/miguro_3.webp" alt="" style="width: 50%;">
                    <button class="btn btn-outline-success">Would you like a practice?</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Japanese Particle 「で」 – Mastering One of the Most Versatile Particles',
            paragraph: 'The particle 「で」 is one of the most useful tools in the Japanese language. It’s used to indicate where an action takes place, the means or method used to do something, and sometimes even the cause or reason behind an event. Let’s break it down with simple explanations and examples.',
            accordion: [
                {
                    id: 'collapseOne', title: '1. 「で」 as the Place of Action', description: 'When you want to say where something happens, use 「で」. Pattern: [Place] + で + [Action]',
                    example: [
                        {
                            kana: '学校で勉強します。', romaji: 'Gakkō de benkyō shimasu. ', translation: 'I study at school.', breakdown: [
                                { word: '学校 (gakkō)', meaning: 'school' },
                                { word: 'で', meaning: 'at (indicating place where the action occurs)' },
                                { word: '勉強します (benkyō shimasu)', meaning: 'study (polite form)' },
                            ], note: 'Function of で: Marks the place where the action of studying is happening — at school.'
                        },
                        {
                            kana: 'カフェで友だちに会いました。', romaji: 'Kafe de tomodachi ni aimashita.', translation: 'I met my friend at a café.', breakdown: [
                                { word: 'カフェ (kafe)', meaning: 'café' },
                                { word: 'で', meaning: 'at (indicating place where the action occurs)' },
                                { word: '友だちに (tomodachi ni)', meaning: 'to my friend / with my friend (target of the action)' },
                                { word: '会いました (aimashita)', meaning: 'met (past tense of 会う)' },
                            ], note: 'Function of で: Indicates where the meeting took place — at the café.'
                        },
                    ], collapsed: 'collapsed', show: '', note: 'Tip: Don’t confuse this with the particle に, which is used for destinations or existence (like “I went to school” → 学校に行きました).'
                },
                {
                    id: 'collapseTwo', title: '2. 「で」 as the Means or Tool', description: 'Use 「で」 to describe how or with what something is done. Pattern: [Tool/Method] + で + [Action]',
                    example: [
                        {
                            kana: 'バスで行きます。', romaji: 'Basu de ikimasu.', translation: 'I go by bus.', breakdown: [
                                { word: 'バス (basu)', meaning: 'bus' },
                                { word: 'で', meaning: 'by (means of transportation)' },
                                { word: '行きます (ikimasu)', meaning: 'go (polite form)' },
                            ], note: 'Function of で: Expresses the method of transportation — by bus.'
                        },
                        {
                            kana: 'はしで食べます。', romaji: 'Hashi de tabemasu.', translation: 'I eat with chopsticks.', breakdown: [
                                { word: 'はし (hashi)', meaning: 'chopsticks' },
                                { word: 'で', meaning: 'with / using (tool used)' },
                                { word: '食べます (tabemasu)', meaning: 'eat (polite form)' },
                            ], note: 'Function of で: Shows the tool or instrument used for the action — using chopsticks.'
                        },
                        {
                            kana: '日本語で話しましょう。', romaji: 'Nihongo de hanashimashou.', translation: 'Let’s speak in Japanese.', breakdown: [
                                { word: '日本語 (nihongo)', meaning: 'Japanese (language)' },
                                { word: 'で', meaning: 'in (means of communication)' },
                                { word: '話しましょう (hanashimashou)', meaning: 'let’s speak' },
                            ], note: 'Function of で: Shows the language being used as the method of communication — in Japanese.'
                        },
                    ], collapsed: 'collapsed', show: '', note: 'Think of 「で」 here as "using" or "by means of."'
                },
                {
                    id: 'collapseThree', title: '3. 「で」 as the Cause or Reason', description: 'In some cases, 「で」 can express a cause or reason, usually with emotions or natural events. Pattern: [Reason] + で + [Result]',
                    example: [
                        {
                            kana: '病気で学校を休みました。', romaji: 'Byōki de gakkō o yasumimashita.', translation: 'I missed school because of illness.', breakdown: [
                                { word: '病気 (byōki)', meaning: 'illness' },
                                { word: 'で', meaning: 'due to (cause or reason)' },
                                { word: '学校を (gakkō o)', meaning: 'school (object of "missed")' },
                                { word: '休みました (yasumimashita)', meaning: 'took a break / was absent' },
                            ], note: 'Function of で: Indicates reason for the absence — because of illness.'
                        },
                        {
                            kana: '地震で電車が止まりました。', romaji: 'Jishin de densha ga tomarimashita.', translation: 'The train stopped due to the earthquake.', breakdown: [
                                { word: '地震 (jishin)', meaning: 'earthquake' },
                                { word: 'で', meaning: 'due to (cause)' },
                                { word: '電車が (densha ga)', meaning: 'train (subject)' },
                                { word: '止まりました (tomarimashita)', meaning: 'stopped (polite past)' },
                            ], note: 'Function of で: Explains why the train stopped — because of the earthquake.'
                        },

                    ], collapsed: 'collapsed', show: '', note: ''
                },
            ]
        }
    }
}
</script>