<template>
    <div class="row p-2">
        <h4 class="fs-4">Are you ready to take the test?</h4>
        <h6 class="mt-2">In this section you will be taking a mock test with the following coverage below to test your
            knowledge of the nihongo language. You will be given 1 hour to take the test and each item consist of 5
            questions. You may take unlimited test, passing score is 80%. Ganbarimasu!</h6>
        <h4 class="fs-5 mt-4">Test coverage!</h4>
        <ul class="mx-5 fs-6">
            <li>Vocabularies</li>
            <li>Particles</li>
            <li>Listening</li>
            <li>Grammar</li>
        </ul>
        <button class="btn btn-outline-primary col-3" role="button" data-bs-target="#modalMockTest"
            data-bs-toggle="modal">Start Mock Test</button>
    </div>
    <div class="modal fade" id="modalMockTest" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Mock Test</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <h5>Test I - Vocabulary</h5>
                    <ol>
                        <li v-for="(data, index) in phrase">{{ data.japanese }}
                            <ul>
                                <li v-for="choices in data.choices" style="list-style: none;">
                                    <label >
                                        <input type="radio" :name="'choice'+index"> {{ choices }}
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phrase: [
                { japanese: 'デパート _______ 行きます。', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
                { japanese: 'ケーキ _______  作ります。', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '新聞 _______ 読みます。', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '映画 _______ 見ます。', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
                { japanese: '洋服 _______ 買います。', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
            ]
        }
    }
}
</script>