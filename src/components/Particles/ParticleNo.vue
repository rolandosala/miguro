<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ title }}</h4>
            <p>{{ paragraph }}</p>
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
                                    <h5>{{ data.title }}</h5>
                                </button>
                            </h2>
                            <div :id="data.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>{{ data.description }}</p>
                                    <b>Examples: </b>
                                    <ol>
                                        <li v-for="ex in data.example"><b>{{ ex.kana }}</b> = <em>{{ ex.translation
                                                }}</em></li>
                                    </ol>
                                    <p class="alert alert-info" v-if="data.note != ''">{{ data.note }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center flex-column align-items-center ">
                    <img src="/miguro_3.webp" alt="" style="width: 60%;">
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
            title: 'Understanding the Japanese Particle の (no)',
            paragraph: 'The particle の (no) is one of the most commonly used particles in Japanese. It’s primarily used to indicate possession or to connect nouns in a descriptive way—kind of like using \'of\' or an apostrophe-s (’s) in English.',
            accordion: [
                {
                    id: 'collapseOne', title: '1. の as Possession', description: 'Think of の like the apostrophe ’s in English. It shows that something belongs to someone. Structure: [Owner] の [Possession]',
                    example: [
                        { kana: 'わたし の ほん', translation: 'my book' },
                        { kana: 'たなかさん の かさ', translation: 'Tanaka\'s umbrella' },
                        { kana: 'がくせい の ノート', translation: 'a student\'s notebook' },
                    ], collapsed: 'collapsed', show: '', note: 'Note: Just like English, the owner comes first, followed by what is owned.'
                },
                {
                    id: 'collapseTwo', title: '2. の to Connect or Describe Nouns', description: 'の can also be used to make compound nouns or to describe something using another noun. Structure: [Descriptive noun] の [Main noun]',
                    example: [
                        { kana: 'にほん の ぶんか', translation: 'Japanese culture' },
                        { kana: 'さくら の き', translation: 'a cherry blossom tree (literally, “tree of cherry blossom”)' },
                        { kana: 'おちゃ の カップ', translation: 'a teacup' },
                    ], collapsed: 'collapsed', show: '', note: 'Note: In this case, the noun before の adds more information or context to the noun after it.'
                },
                {
                    id: 'collapseThree', title: '3. の for Relationships or Categories', description: 'You can also use の to indicate relationships, locations, or categories. Structure: [Descriptive noun] の [Main noun]',
                    example: [
                        { kana: 'わたし の ともだち', translation: 'my friend' },
                        { kana: 'がっこう の せんせい', translation: 'a teacher at a school' },
                        { kana: 'いぬ の えさ', translation: 'dog food (literally, “food for dogs”)' },
                    ], collapsed: 'collapsed', show: '', note: ''
                },
                {
                    id: 'collapseFour', title: '4. の in Questions', description: 'When you\'re asking a question and want to know who owns something or what something is related to, の still works the same.',
                    example: [
                        { kana: 'これは だれ の かばん ですか？', translation: 'Whose bag is this?' },
                    ], collapsed: 'collapsed', show: '', note: ''
                },
            ]
        }
    }
}
</script>