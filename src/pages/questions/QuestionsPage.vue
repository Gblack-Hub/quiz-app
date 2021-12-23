<template>
    <div id="questions-page-main">
        <h2 class="questions-page-title">Answer the following questions</h2>
        <div v-for="(question, index) in questions" :key="index">
            <SingleQuestion :question="question" />
        </div>
        <div class="submit-button-container">
            <button class="button" @click="submitAnswers">Submit</button>
        </div>
    </div>
</template>

<script>
import SingleQuestion from "../../components/questions/SingleQuestion.vue";
import {mapState} from "vuex";

export default {
    name: 'QuestionsPage',
    components: {
       SingleQuestion 
    },
    computed: {
        ...mapState(['questions', 'selectedAnswers'])
    },
    methods: {
        submitAnswers() {
            this.$store.commit('SUBMIT_ANSWERS');
        }
    }
}
</script>
<style scoped>
    #questions-page-main {
        width: 90%;
        margin: auto;
    }
    .questions-page-title {
        text-align: center;
    }
    .submit-button-container {
        text-align: right;
    }

    @media only screen and (min-width: 576px){
        #questions-page-main {
            width: 80%;
        }
    }
</style>