<template>
    <div class="row">
        <div class="col-12">
            <h4>The に (ni) Particle – Pointing to Time, Place, and Direction</h4>
            <span>The に particle is super versatile. It's used to indicate:</span>
            <ul>
                <li><b>Time</b> something happens</li>
                <li><b>Place</b> where something exists</li>
                <li><b>Direction</b> or <b>goal</b> of movement</li>
                <li>The <b>recipient</b> of an action</li>
            </ul>
            <p>Think of に as pointing "to", "at", or "on", depending on the context.</p>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-sm-12 col-lg-8">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="data in accordion">
                            <h2 class="accordion-header">
                                <button :class="data.collapsed" class="accordion-button" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#' + data.id" aria-expanded="true"
                                    :aria-controls="data.id">
                                    <b>{{ data.title }}</b>
                                </button>
                            </h2>
                            <div :id="data.id" class="accordion-collapse collapse" :class="data.show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>{{ data.description }}</p>
                                    <ul>
                                        <li v-for="p in data.sub_paragraph">{{ p }}</li>
                                    </ul>
                                    <b>Example</b>
                                    <ol>
                                        <li v-for="list in data.example" class="mt-2"><b>{{ list.kana }}</b> <br><em>{{
                                            list.romaji }}</em> <br>{{ list.translation }} <br>
                                            <b v-if="list.breakdown != null">Breakdown</b>
                                            <ul>
                                                <li v-for="breakdown in list.breakdown"><strong>{{ breakdown.word
                                                        }}</strong> = {{ breakdown.translation }}</li>
                                            </ul>
                                            <div v-if="list.explanation != null">
                                                <b>Explanation</b>
                                                <p>{{ list.explanation }}</p>
                                            </div>
                                        </li>
                                    </ol>
                                    <p class="alert alert-info" v-if="data.note != ''">{{ data.note }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center ">
                    <img src="/miguro_3.png" alt="" style="width: 50%;">
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
            accordion: [
                {
                    id: 'collapseOne', title: '1️. に(ni) for Time', description: 'に marks specific points in time (dates, hours, days of the week).',
                    example: [
                        { kana: '７時に起きます。', romaji: 'Shichi-ji ni okimasu.', translation: 'I wake up at 7 o\'clock.' },
                        { kana: '月曜日に学校へ行きます。', romaji: 'Getsuyōbi ni gakkō e ikimasu.', translation: 'I go to school on Monday.' },
                    ], note: 'Note: You don’t use に for vague time words like yesterday (きのう) or every day (まいにち).', collapsed: 'collapsed', show: ''
                },
                {
                    id: 'collapseTwo', title: '2. に(ni) for Place of Existence', description: 'Used with いる (to exist for people/animals) or ある (to exist for things) to mark where something is.',
                    example: [
                        { kana: 'いすの上にねこがいます。', romaji: 'Isu no ue ni neko ga imasu.', translation: 'There is a cat on the chair.' },
                        { kana: '学校に先生がいます。', romaji: 'Gakkō ni sensei ga imasu.', translation: 'There is a teacher at the school.' },
                    ], note: '', collapsed: 'collapsed', show: ''
                },
                {
                    id: 'collapseThree', title: '3. に(ni) for Direction or Destination', description: 'Used with movement verbs like 行く (iku = to go), 来る (kuru = to come), 帰る (kaeru = to return).',
                    example: [
                        { kana: '日本に行きます。', romaji: 'Nihon ni ikimasu.', translation: 'I’m going to Japan.' },
                        { kana: '家に帰ります。', romaji: 'Ie ni kaerimasu.', translation: 'I’m going home.' },
                    ], note: '', collapsed: 'collapsed', show: ''
                },
                {
                    id: 'collapseFour', title: '4. に for Recipient of an Action', description: 'When you give, show, or say something to someone, に marks the recipient.',
                    example: [
                        { kana: '友だちにプレゼントをあげます。', romaji: 'Tomodachi ni purezento o agemasu.', translation: 'I give a present to my friend.' },
                        { kana: '先生に質問をします。', romaji: 'Sensei ni shitsumon o shimasu.', translation: 'I ask a question to the teacher.' },
                    ], note: '', collapsed: 'collapsed', show: ''
                },
            ]
        }
    }
}
</script>