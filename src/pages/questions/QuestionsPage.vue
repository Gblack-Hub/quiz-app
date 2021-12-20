<template>
    <div id="questions-page-main">
        <h2 class="questions-page-title">Answer the questions below</h2>
        <div v-for="(question, index) in questions" :key="index">
            <SingleQuestion :question="question" />
        </div>
        <div class="submit-button-container">
            <button @click="submitAnswers">Submit</button>
        </div>
    </div>
</template>

<script>
import SingleQuestion from "../../components/questions/SingleQuestion.vue";
import {questions} from "../../utils/questions";

export default {
    name: 'QuestionsPage',
    components: {
       SingleQuestion 
    },
    data() {
        return {
            questions: questions
        }
    },
    mounted() {
        this.fetchQuestions();
    },
    methods: {
        async fetchQuestions() {
            try {
                const res = await fetch("../../utils/questions.json")
                console.log(res);
                // const data = await res.json();

            } catch (error) {
                console.log(error.message);
            }
        },

        submitAnswers() {
            console.log(this.questions);
        }
    }
}
</script>
<style scoped>
    #questions-page-main {
        margin: 1.9rem;
    }
    .questions-page-title {
        text-align: center;
    }
    .submit-button-container {
        text-align: right;
    }
    button {
        background-color: var(--primary-color);
        line-height: 1.5;
        color: #ffffff;
        letter-spacing: 0.7px;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        border-radius: 50px;
        padding: 1.375rem 4rem;
        font-size: 1rem;
        margin: 15px 0px;
        transition: 0.5s;
    }
    button:hover {
        background-color: var(--secondary-color);
        transition: 0.5s;
        color: #000;
    }
</style>