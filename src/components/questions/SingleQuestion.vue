<template>
    <div id="single-question-main">
        <div class="single-question-text">{{question.question}}</div>
        <label v-for="(answer, index) in question.options" :key="index" class="single-question-option">
            <input type="radio" :name="question.id" :value="answer.id" @change="selectOption(question, answer)" /> {{answer.option}} <br />
        </label>
    </div>
</template>

<script>
export default {
    name: "SingleQuestion",
    props: {
        question: {
            type: Object
        }
    },
    methods: {
        selectOption(question, answer) {
            let answerData = {
                questionId: question.id,
                correctAnswerId: question.correctAnswerId,
                answerId: answer.id
            }
            this.$store.commit('ADD_ANSWER', answerData);
        }
    }
}
</script>

<style scoped>
    #single-question-main {
        background: #fff;
        padding: 1.2rem;
        margin: 0.9rem 0;
        border-radius: 10px;
        border: 1px solid #E5E5E5;
    }
    .single-question-text {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .single-question-option {
        padding: 0.35rem 0;
        /* display: inline-block; */
    }
</style>