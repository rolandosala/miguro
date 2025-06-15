<template>
    <div class="row">
        <h4>Polite Negative Verb Conjugation in Japanese</h4>

        <section>
            <h5>1. Basic Structure</h5>
            <p>
                To conjugate a verb into its <strong>polite negative form</strong>, follow these basic steps:
            </p>
            <ul>
                <li>Start with the verb in its dictionary form (i.e., the plain form).</li>
                <li>Identify the verb type (Group 1, Group 2, or Irregular).</li>
                <li>Apply the negative suffix and make the verb polite by adding <strong>-masu</strong>.</li>
            </ul>
        </section>

        <section>
            <h5>2. Verb Groups and Conjugation Patterns</h5>

            <!-- Group 1: U-Verbs -->
            <group-conjugation title="Group 1: U-Verbs (Godan Verbs)" :verbs="group1Verbs" />

            <!-- Group 2: Ru-Verbs -->
            <group-conjugation title="Group 2: Ru-Verbs (Ichidan Verbs)" :verbs="group2Verbs" />

            <!-- Group 3: Irregular Verbs -->
            <group-conjugation title="Group 3: Irregular Verbs" :verbs="irregularVerbs" />
        </section>

        <section>
            <h5>3. Usage of Polite Negative Conjugation</h5>
            <p>The polite negative form is commonly used when:</p>
            <ul>
                <li><strong>Declining offers or invitations</strong></li>
                <li><strong>Talking about things you don't do</strong></li>
                <li><strong>Polite refusals</strong></li>
            </ul>
        </section>

        <section>
            <h5>4. Additional Notes</h5>
            <p>
                The <strong>polite negative form</strong> is often used when speaking to strangers, in formal
                settings,
                or when showing respect.
            </p>
            <p>
                To make a sentence even more polite, you can add <strong>desu</strong> at the end of the
                sentence:
                <span class="example">"行きませんです" (Ikimasen desu) – More polite, but less common.</span>
            </p>
            <p>
                The polite negative form can also be used in questions:
            </p>
            <ul>
                <li><span class="example">"食べませんか？" (Tabemasen ka?) = "Won't you eat?"</span></li>
            </ul>
        </section>

        <section>
            <h5>5. Key Points Summary</h5>
            <ul>
                <li><strong>Group 1 (u-verbs)</strong>: Change the final "u" sound to "anai" and add -masen.
                </li>
                <li><strong>Group 2 (ru-verbs)</strong>: Drop the "-ru" and add -masen.</li>
                <li><strong>Suru</strong> becomes <strong>shimasen</strong>, and <strong>kuru</strong> becomes
                    <strong>kimasen</strong> in the polite negative form.
                </li>
            </ul>
        </section>

        <section>
            <h5>6. Practice Sentences</h5>
            <ul>
                <li>行きません。 (Ikimasen.) = I will not go.</li>
                <li>見ません。 (Mimasen.) = I will not look/watch.</li>
                <li>食べません。 (Tabemasen.) = I will not eat.</li>
                <li>勉強しません。 (Benkyou shimasen.) = I will not study.</li>
            </ul>
        </section>
    </div>
</template>

<script>
import GroupConjugation from './GroupConjugation.vue';

export default {
    name: 'PoliteNegativeVerbConjugation',
    components: {
        GroupConjugation,
    },
    data() {
        return {
            group1Verbs: [
                { verb: '食べる', politeNegative: '食べません', meaning: 'to eat' },
                { verb: '聞く', politeNegative: '聞きません', meaning: 'to ask' },
            ],
            group2Verbs: [
                { verb: 'ある', politeNegative: 'ありません', meaning: 'to be (inanimate)' },
                { verb: '食べます', politeNegative: '食べません', meaning: 'to eat' },
            ],
            irregularVerbs: [
                { verb: 'する', politeNegative: 'しません', meaning: 'to do' },
                { verb: '来る', politeNegative: '来ません', meaning: 'to come' },
            ],
        };
    },
};
</script>
