<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 rounded-4 shadow  position-fixed overflow-y-scroll bg-light z-3 d-none d-lg-flex"
        style="height: 90vh;">
        <div class="position-sticky top-0 z-3 bg-light text-center">
            <a href="#" class="text-center text-dark text-decoration-none ">
                <span class="fs-4">MIGURO</span>
            </a> 
            <hr>
        </div>

        <ul class="nav nav-pills mb-auto d-flex flex-column">
            <li v-for="data in menu_1">
                <RouterLink :to="data.link">
                    <span class="nav-link link-dark mx-1 menu" :class="{ active: $route.path === data.link }"
                        :data-bs-toggle="data.collapse" :href="'#' + data.target" role="button">{{ data.item }}</span>
                </RouterLink>
                <div :class="data.collapse" class="accordion-collapse" :id="data.target">
                    <ul class="nav nav-pills flex-column mx-3 text-left">
                        <li v-for="data in data.submenu" class="submenu">
                            <RouterLink :to="data.link">
                                <a href="#" class="nav-link link-dark mx-1"
                                    :class="{ active: $route.path === data.link }">{{ data.item }}</a>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto text-left">
            <li v-for="data in menu_2">
                <RouterLink :to="data.link">
                    <span class="nav-link link-dark mx-1" :data-bs-toggle="data.collapse" :href="'#' + data.target"
                        role="button" :class="{ active: $route.path === data.link }">{{ data.item }}</span>
                </RouterLink>
                <div :class="data.collapse" class="accordion-collapse" :id="data.target">
                    <ul class="nav nav-pills flex-column mx-3 text-left">
                        <li v-for="data in data.submenu">
                            <RouterLink :to="data.link">
                                <a href="#" class="nav-link link-dark mx-1"
                                    :class="{ active: $route.path === data.link }">{{ data.item }}</a>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <hr>
        <button class="btn btn-outline-success form-control" data-bs-toggle="offcanvas" data-bs-target="#chatwithmiguroCanvas"
            aria-controls="offcanvasResponsive">Chat with Miguro</button>
        <button class="btn btn-outline-success mt-2 form-control" data-bs-toggle="offcanvas" data-bs-target="#chatwithfriendCanvas"
            aria-controls="offcanvasResponsive">Chat with Friend</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu_1: [
                { item: 'Introduction', link: '/', collapse: '', target: '', submenu: [] },
                {
                    item: 'Writing System', link: '/writingsystem', collapse: 'collapse', target: 'writingsystems',
                    submenu: [
                        { item: 'Hiragana', link: '/hiragana' },
                        { item: 'Katakana', link: '/katakana' },
                        { item: 'Kanji', link: '/kanji' },
                    ]
                },
                {
                    item: 'Particles', link: '/particles', collapse: 'collapse', target: 'particles', submenu: [
                        { item: 'は (ha)', link: '/particle_wa' },
                        { item: 'が (ga)', link: '/particle_ga' },
                        { item: 'を (wo)', link: '/particle_wo' },
                        { item: 'に (ni)', link: '/particle_ni' },
                        { item: 'で (de)', link: '/particle_de' },
                        { item: 'の (no)', link: '/particle_no' },
                        { item: 'へ (e)', link: '/particle_e' },
                        { item: 'と (to)', link: '/particle_to' },
                        { item: 'も (mo)', link: '/particle_mo' },
                        { item: 'から (kara)', link: '/particle_kara' },
                        { item: 'まで (made)', link: '/particle_made' },

                    ]
                },
                {
                    item: 'Verb Conjugation', link: '/conjugations', collapse: 'collapse', target: 'conjugations', submenu: [
                        { item: 'Dictionary', link: '/dictionary' },
                        { item: 'Polite Non-Past', link: '/masu' },
                        { item: 'Polite Negative', link: '/politenegative' },
                        { item: 'Past Form', link: '/pastverbconjugation' },
                        { item: 'Negative Past', link: '/past_negative_verb_conjugation' },
                        { item: 'Te-form', link: '/te_verb_conjugation' },
                        { item: 'Potential', link: '/potentialverbconjugation' },
                        { item: 'Volitional', link: '/volitionalverbconjugation' },
                        { item: 'Imperative', link: '/emperativeverbconjugation' },
                        { item: 'Conditional', link: '/conditionalverbconjugation' },
                        { item: 'Passive', link: '/passiveverbconjugation' },
                        { item: 'Causative', link: '/causativeverbconjugation' },
                        /* { item: 'Causative-Passive', link: '/causative-passive' } */
                    ]
                },
                {
                    item: 'Conjunctions', link: '', collapse: 'collapse', target: 'conjunctions', submenu: [
                        { item: 'Sequential', link: '/sequentialconjuctions' },
                        { item: 'Constractive', link: '/constractiveconjuctions' },
                        { item: 'Cause & Effect', link: '/cause_and_effect' },
                        { item: 'Condition', link: '/condition' },
                        { item: 'Addition', link: '/addition' },
                        { item: 'Emphasis', link: '/emphasis' },
                        { item: 'Summarizing', link: '/summarizing' },
                    ]
                },
                {
                    item: 'Numbers', link: '/numbersystem', collapse: 'collapse', target: 'numbers', submenu: [
                        { item: 'Age Expression', link: '/ageexpression' },
                        { item: 'Telephone', link: '/telephonenumbers' },
                        { item: 'Telling Time', link: '/tellingtime' },
                    ]
                },
                {
                    item: 'W-H Questions', link: '/questions', collapse: 'collapse', target: 'wh_questions', submenu: [
                        { item: 'What', link: '/whatquestion' },
                        { item: 'When', link: '/whenquestion' },
                        { item: 'Who', link: '/whoquestion' },
                        { item: 'Where', link: '/wherequestion' },
                        { item: 'Why', link: '/whyquestion' },
                        { item: 'How', link: '/howquestion' },
                    ]
                },
                {
                    item: 'Vocabularies', link: '', collapse: 'collapse', target: 'vocabularies', submenu: [
                        { item: 'Calendar', link: '/calendar' },
                        { item: 'Occupations', link: '/occupation' },
                        { item: 'Instutions', link: '/instution' },
                        { item: 'Family', link: '/family' },
                    ]
                },
            ],
            menu_2: [
                {
                    item: 'Exercises', link: '', collapse: 'collapse', target: 'practice',
                    submenu: [
                        { item: 'Flashcard', link: '/flashcards' },
                        { item: 'Translation', link: '/translation' },
                        { item: 'Reading', link: '/reading' },
                        { item: 'Grammar', link: '/listening' },
                        { item: 'Listening', link: '/practice_n5' },
                        /* { item: 'Fill Blank', link: '/filltheblank' }, */
                    ]
                },
                {
                    item: 'Mock Test', link: '', collapse: 'collapse', target: 'mocktest',
                    submenu: [
                        { item: 'JLPT 5', link: '/mocktest5' },
                        { item: 'JLPT 4', link: '' },
                        { item: 'JLPT 3', link: '' },
                        { item: 'JLPT 2', link: '' },
                        { item: 'JLPT 1', link: '' },
                    ]
                },
            ],
        }
    },
    mounted() {
        //this.checklist(); 
    },
    methods: {
        checklist() {
            let menu = document.getElementsByClassName('menu');
            let submenu = document.getElementsByClassName('submenu');
            for (let i = 0; i < menu.length; i++) {
                menu[i].onclick = () => {
                    menu[i].className = 'active';
                }
                submenu[i].onclick = () => {
                    alert(submenu[i].innerText);
                }
            }
        }
    }
}
</script>
<style>
a {
    text-decoration: none;
}

.active {
    color: white;
}

li span:hover {
    width: 100%;
    background-color: aqua;
    transition: .5s ease-in;
}
</style>