<template>
    <div id="questions-page-main">
        <h2 class="questions-page-title">Answer the following questions</h2>
        <div v-for="(question, index) in questions" :key="index">
            <QuestionItem :question="question" :number="++index" />
        </div>
        <div v-if="!getIsAnswersComplete && isSubmitted" key="feedback" class="danger-alert">Please answer all the questions</div>
        <div class="submit-button-container">
            <button class="button" @click="submitAnswers">Submit</button>
        </div>
    </div>
</template>

<script>
import QuestionItem from "../../components/questions/QuestionItem.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
    name: 'QuestionsPage',
    components: {
       QuestionItem 
    },
    computed: {
        ...mapState(['questions', 'selectedAnswers', 'isSubmitted']),
        ...mapGetters(['getIsAnswersComplete'])
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
    .danger-alert {
        padding: 0.5rem;
        background: rgba(255, 0, 0, 0.5);
        color: #fff;
        text-align: center;
        border-radius: 9px;
    }

    @media only screen and (min-width: 576px){
        #questions-page-main {
            width: 80%;
        }
    }
</style>