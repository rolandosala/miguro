<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Japanese Question Word: 「どこ」 – <em>Where?</em></h4>
      <p>「どこ」 is used to ask about location or place. It is typically written in hiragana and used with the
        particle <strong>に</strong> (indicates direction or destination) or <strong>で</strong> (indicates location of an
        action).</p>
    </div>
    <div class="col-sm-12">
      <h5>Example Sentences</h5>
      <ol>
        <li v-for="data in examples" class="mt-4"><strong>{{ data.jp }}</strong><br><em>{{ data.kana }}</em><br>{{
          data.romaji }} <br> <i>Translation: {{ data.en }}</i></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhereQuestion',
  data() {
    return {
      examples: [
        {
          title: 'Where is the station?',
          jp: '駅はどこですか？',
          kana: 'えきはどこですか？',
          romaji: 'Eki wa doko desu ka?',
          en: 'Where is the station?',
          desc: 'Used when looking for a place.',
        },
        {
          title: 'Where do you live?',
          jp: 'どこに住んでいますか？',
          kana: 'どこにすんでいますか？',
          romaji: 'Doko ni sunde imasu ka?',
          en: 'Where do you live?',
          desc: 'Used to ask about someone’s residence.',
        },
        {
          title: 'Where did you buy that?',
          jp: 'それはどこで買いましたか？',
          kana: 'それはどこでかいましたか？',
          romaji: 'Sore wa doko de kaimashita ka?',
          en: 'Where did you buy that?',
          desc: '“で” marks where an action occurred.',
        },
        {
          title: 'Where will we meet?',
          jp: 'どこで会いますか？',
          kana: 'どこであいますか？',
          romaji: 'Doko de aimasu ka?',
          en: 'Where will we meet?',
          desc: 'Common in planning or arranging events.',
        },
        {
          title: 'Where is your hometown?',
          jp: 'あなたの出身はどこですか？',
          kana: 'あなたのしゅっしんはどこですか？',
          romaji: 'Anata no shusshin wa doko desu ka?',
          en: 'Where is your hometown?',
          desc: 'Used to ask about place of origin.',
        },
      ],
    };
  },
};
</script>
