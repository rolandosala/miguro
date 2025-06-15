<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>How to Ask "How?" in Japanese – Formal & Casual Usage</h4>
      <p>
        In Japanese, "how" is expressed differently depending on context. This lesson covers <strong>どう</strong>,
        <strong>どうやって</strong>, <strong>いかが</strong>, and <strong>いくら</strong>.
      </p>
    </div>
    <div class="col-sm-12">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(item, index) in accordion">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
              <b>{{ item.header }}</b>
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>{{ item.description }}</p>
              <ul>
                <li v-for="list in item.type">{{ list }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-info mt-4">
      <strong>Summary:</strong><br>
      <ul>
        <li><strong>どう</strong> – How (general condition or feeling)</li>
        <li><strong>どうやって</strong> – How (method or procedure)</li>
        <li><strong>いかが</strong> – Polite "how" (used in formal settings)</li>
        <li><strong>いくら</strong> – How much (price/amount)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowQuestionLesson',
  data() {
    return {
      accordion: [
        { header: '1. Using どう (dō)', description: 'Used to ask "how" in terms of impression or condition.', type: ['Formal: その映画はどうでしたか？(Sono eiga wa dō deshita ka?) — How was the movie?', 'Casual: 映画どうだった？(Eiga dō datta?) — How was the movie?'] },
        { header: '2. Using どうやって (dō yatte)', description: 'Asks "how" in terms of method or procedure.', type: ['Formal: どうやって会社に行きますか？(Dō yatte kaisha ni ikimasu ka?) — How do you get to work?', 'Casual: 会社ってどうやって行くの？(Kaisha tte dō yatte iku no?) — How do you get to work?'] },
        { header: '3. Bonus: いかが (ikaga)', description: 'A polite version of どう, used in formal and customer service settings.', type: ['Example: お食事はいかがでしたか？<br><em>(Oshokuji wa ikaga deshita ka?)</em> — How was your meal?'] },
        { header: '4. Asking "How much?": いくら (ikura)', description: 'いくら</strong> means "how much", and it\'s used to ask about price or quantity — not method.', type: ['Formal: この本はいくらですか？ (Kono hon wa ikura desu ka?) — How much is this book?', 'Casual: これいくら？(Kore ikura?) — How much is this?'] },
      ]
    }
  }
}
</script>

<style scoped>
.card-header h3 {
  margin: 0;
}
</style>
