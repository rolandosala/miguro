<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="col-sm-12 col-lg-12 d-flex flex-wrap">
                <div class="col-sm-12 col-lg-4">
                    <img src="/miguro_2.png" alt="" style="width: 100%;">
                </div>
                <div class="col-sm-12 col-lg-8 d-flex flex-column justify-content-center ">
                    <h4 class="text-center">{{ title }}</h4>
                    <p class="text-justify">{{ introduction }}</p>
                </div>


            </div>
            <div class="col-sm-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" v-for="data in writing">
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
                                <p>{{ data.paragraph }}</p>
                                <ul>
                                    <li v-for="list in data.list">{{ list }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="row mt-3">
        <div class="col-12">
            <h5>{{ sub_title }}</h5>
            <span>{{ description }}</span>

            <ul>
                <li v-for="data in example">
                    <b>{{ data.kana }}</b><br>
                    <span>{{ data.romaji }}</span> <br>
                    <span>{{ data.translation }}</span>
                    <ul>
                        <li v-for="breakdown in breakdown"> <b>{{ breakdown.word }}</b> – {{ breakdown.translation }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="alert alert-info mt-4">
            <h5>A Living Language</h5>
            <span>The Japanese writing system reflects the country's history, adaptability, and aesthetic sense. It’s a
                challenging but rewarding part of learning Japanese—and a window into how language and culture evolve
                together.</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'The Writing System in Japan',
            introduction: 'Japan’s writing system is unique, intricate, and beautifully complex. It blends three main scripts — Hiragana, Katakana, and Kanji — into a cohesive system used for everything from ca text messages to formal literature. Understanding this system is essential to grasping Japa language and culture.',
            writing: [
                { id: 'collapseOne', title: '1. Hiragana (ひらがな)', paragraph: 'Hiragana is the first script Japanese children learn. It consists of 46 basic characters and is phonetic, meaning each character represents a specific sound. It’s mainly used for:', list: ['Native Japanese words not written in kanji', 'Grammatical elements like particles and verb endings', 'Furigana (small hiragana written above kanji to show pronunciation)'], show: 'show', collapsed: '' },
                { id: 'collapseTwo', title: '2. Katakana (カタカナ)', paragraph: 'Katakana is also phonetic and contains the same sounds as hiragana, but with different symbols. It’s primarily used for:', list: ['Foreign loanwords (like "coffee" → コーヒー)', 'Onomatopoeia (buzz, crash)', 'Emphasis or stylized writing (like italics in English)'], show: '', collapsed: 'collapsed' },
                { id: 'collapseThree', title: '3. Kanji (漢字)', paragraph: 'Kanji are logographic characters borrowed from Chinese. Each kanji has one or more meanings and can have multiple readings depending on context. Japanese uses thousands of kanji, though about 2,000 are considered essential (the "Jōyō Kanji"). Kanji are used for:', list: ['Nouns', 'Verb and adjective roots', 'Proper names'], show: '', collapsed: 'collapsed' },
            ],
            sub_title: 'How They Work Together',
            description: 'In modern Japanese writing, all three scripts often appear within a single sentence. For instance:',
            example: [{ kana: '私はパンを食べます。', romaji: '(Watashi wa pan o tabemasu.)', translation: '(“I eat bread.”)' }],
            breakdown: [
                { word: '私 (watashi)', translation: 'a kanji meaning “I”' },
                { word: 'は (wa)', translation: 'a particle in hiragana' },
                { word: 'パン (pan)', translation: '“bread” in katakana (a borrowed word from Portuguese)' },
                { word: 'を (o)', translation: 'another particle in hiragana' },
                { word: '食べます (tabemasu)', translation: 'verb “to eat,” combining kanji and hiragana' },
            ]
        }
    }
}
</script>