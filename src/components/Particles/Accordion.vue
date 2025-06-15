<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="data in accordion">
            <h2 class="accordion-header">
                <button :class="data.collapsed" class="accordion-button z-0" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+data.id"
                    aria-expanded="true" :aria-controls="data.id">
                    <h6>{{ data.title }}</h6>
                </button>
            </h2>
            <div :id="data.id" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ data.description }}</p>
                    <b>Examples:</b>
                    <ol>
                        <li v-for="ex in data.example"><b>{{ ex.kana }}</b><br><em>{{ ex.romaji }}</em><br>{{ ex.translation }}</li>
                    </ol>
                    <p class="alert alert-info">{{ data.note }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Accordion',
    props: {
        accordion: Array
    }
    
}
</script>