<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Asking Questions</h4>
            <p> When asking a question in Japanese, you do not need to invert the subject and the verb. Here you
                learn how to ask and answer simple questions</p>
            <h5>Asking YES/NO questions</h5>
            <p>To ask a yes/no question, just add the question particle か ka at the end of the statement sentence.
                For example:</p>
            <ul>
                <li><b>ケンさんはアメリカ人ですか。</b> <br>
                    <em>Ken-san wa Amerika-jin desu ka.</em><br>
                    <span>Is Ken an American?</span>
                </li>
            </ul>
            <p class="alert alert-info"> You don’t need a question mark (?) in Japanese, although it is very frequently
                used.</p>
            <h5>Answering with "YES" or "NO"</h5>
            <p>The answer to a yes/no question usually starts with はい hai or いいえ īe. はい hai means correct
                or right, so if the question is an affirmative question, it means yes. いいえ īe means wrong, so if
                the question is an affirmative question, it means no. Their meanings are reversed in answering
                negative questions.</p>
            <p> The following are possible replies to the affirmative question <b>ケンさん はアメリカ人ですか
                    Ken-san wa Amerika-jin desu ka (Are you an American, Ken?)</b>:</p>
            <ol>
                <li><b>はい, アメリカ人です。</b> <br>
                    <em>Hai, Amerika-jin desu.</em><br>
                    <span>Yes, I’m an American.</span>
                </li>
                <li><b>いいえ，アメリカ人じゃありません。</b> <br>
                    <em>Īe, Amerika-jin ja arimasen.</em><br>
                    <span>No, I’m not an American.</span>
                </li>
            </ol>
            <p>The following are possible replies to the negative question <b>これはいりませんか Kore wa
                    irimasen ka (Don’t you need this?)</b>:</p>
            <ol>
                <li><b>は い ，い りま せ ん 。</b> <br>
                    <em>Hai, irimasen.</em><br>
                    <span>Right, I don’t need it. (No, I don’t need it.)</span>
                </li>
                <li><b>い い え ，い りま す。</b> <br>
                    <em>Īe, irimasu.</em><br>
                    <span>Wrong, I need it. (Yes, I need it.)</span>
                </li>
            </ol>
            <!--  <table class="table table-bordered table-striped mt-4 text-center">
                <thead class="table-dark ">
                    <tr>
                        <th></th>
                        <th colspan="2">Plain</th>
                        <th colspan="2">Polite</th>
                    </tr>
                    <tr>
                        <th>English</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                        <th>Kanji</th>
                        <th>Romaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in institution">
                        <td>{{ data.english }}</td>
                        <td>{{ data.kanji }}</td>
                        <td>{{ data.romaji }}</td>
                        <td>{{ data.polite }}</td>
                        <td>{{ data.polite_romaji }}</td>
                    </tr>
                </tbody>
            </table> -->
        </div>
        <div class="col-sm-12">
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            institution: [
                { english: 'father', kanji: '父', romaji: 'chichi', polite: 'お父さん', polite_romaji: 'otōsan' },
                { english: 'mother', kanji: '母', romaji: 'haha', polite: 'お母さん', polite_romaji: 'okāsan' },
                { english: 'older brother', kanji: '兄', romaji: 'ani', polite: 'お兄さん', polite_romaji: 'onīsan' },
                { english: 'older sister', kanji: '姉', romaji: 'ane', polite: 'お姉さん', polite_romaji: 'onēsan' },
                { english: 'younger brother', kanji: '弟', romaji: 'otōto', polite: '弟さん', polite_romaji: 'otōtosan' },
                { english: 'younger sister', kanji: '妹', romaji: 'imōto', polite: '妹さん', polite_romaji: 'imōtosan' },
            ],
        }
    }
}
</script>