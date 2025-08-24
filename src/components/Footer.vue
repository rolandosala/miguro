<template>
    <div class="row mt-3"
        v-if="route.path !== '/' && route.path !== '/family' && route.path !== '/flashcards' && route.path !== '/translation' && route.path !== '/reading' && route.path !== '/listening' && route.path !== '/grammar' && route.path !== '/mocktest'">
        <hr>
        <div class="col-sm-12 col-lg-12 d-flex justify-content-end">
            <RouterLink :to="links[currentLink]">
                <button class="btn btn-outline-primary" @click="previousLesson">Previous Lesson</button>
            </RouterLink>
            <RouterLink :to="links[currentLink]">
                <button class="btn btn-outline-primary mx-2" @click="nextLesson" :data-bs-toggle="collapse"
                    :href="'#' + target" role="button">Next Lesson</button>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    data() {
        return {
            collapse: '',
            target: '',
            currentLink: 1,
            links: ['/', '/writingsystem', '/hiragana', '/katakana', '/kanji', '/particles', '/particle_wa', '/particle_ga', '/particle_wo', '/particle_ni', '/particle_de', '/particle_no', '/particle_e', '/particle_to', '/particle_mo', '/particle_kara', '/particle_made', '/conjugations', '/dictionary', '/masu', '/politenegative', '/pastverbconjugation', '/past_negative_verb_conjugation', '/te_verb_conjugation', '/potentialverbconjugation', '/volitionalverbconjugation', '/emperativeverbconjugation', '/conditionalverbconjugation', '/passiveverbconjugation', '/causativeverbconjugation', '/sequentialconjuctions', '/constractiveconjuctions', '/cause_and_effect', '/condition', '/addition', '/emphasis', '/summarizing', '/numbersystem', '/ageexpression', '/telephonenumbers', '/tellingtime', '/questions', '/whatquestion', '/whenquestion', '/whoquestion', '/wherequestion', '/whyquestion', '/howquestion', '/calendar', '/occupation', '/instution', '/family'
            ],
            route: useRoute(),
            /* currentIndex: computed(() => this.links.indexOf(this.route.path)),
            hasPrevious: computed(() => this.currentIndex.value > 0),
            hasNext: computed(() => this.currentIndex.value < this.links.length - 1), */

        }
    },
    /* mounted(){
        console.log(this.links.length);
        console.log(this.links.indexOf(this.route.path));
    }, */
    methods: {
        nextLesson() {
            this.currentLink = this.links.indexOf(this.route.path) + 1;
            /*  if(this.route.path == '/particles'){this.collapse = 'collapse'; this.target = 'particles'}
             console.log(this.links.indexOf(this.route.path));
             console.log(this.currentLink);
             console.log(this.route.path); */
        },
        previousLesson() {
            this.currentLink = this.links.indexOf(this.route.path) - 1;
        },
    }
}
</script>