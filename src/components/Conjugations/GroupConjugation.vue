<template>
  <div class="group-conjugation">
    <h6>{{ title }}</h6>
    <ul>
      <li v-for="(verb, index) in verbs" :key="index">
        <span class="verb">{{ verb.verb }}</span> → 
        <span class="polite-negative">{{ verb.politeNegative }}</span> 
        <span class="meaning">({{ verb.meaning }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GroupConjugation',
  props: {
    title: String,
    verbs: Array,
  },
};
</script>

<style scoped>
.group-conjugation {
  margin-bottom: 20px;
}

.verb {
  font-weight: bold;
}

.polite-negative {
  color: #007BFF;
}

.meaning {
  font-style: italic;
}
</style>
