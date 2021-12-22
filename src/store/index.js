import { createStore } from "vuex";
import router from "../router/index";
import { questions } from "../utils/questions.json";

export default createStore({
  state: {
    questions: questions,
    selectedAnswers: []
  },
  getters: {
    getCorrectAnswers: state => state.selectedAnswers.filter((item) => item.correctAnswerId === item.answerId),
    getWrongAnswers: state => state.selectedAnswers.filter((item) => item.correctAnswerId !== item.answerId),
    // getScorePercentage: (state, getters) => (getters.getCorrectAnswers.length / state.questions.length) * 100
  },
  mutations: {
    ADD_ANSWER({selectedAnswers}, payload) {
        let alreadySelectedAnswer = selectedAnswers?.find(item => item.questionId === payload.questionId);
        
        //replace an answer if it's already been selected
        if(alreadySelectedAnswer){
            let index = selectedAnswers.indexOf(alreadySelectedAnswer);
            if(index !== -1){
                return selectedAnswers[index] = payload;
            }
        }
        selectedAnswers.push(payload);
    },
    SUBMIT_ANSWERS({selectedAnswers}) {
        function handleUnansweredQuestions(){
          console.log(selectedAnswers);
        }

        if(selectedAnswers.length < questions.length) {
            console.log("less than original length");
            handleUnansweredQuestions();
            return;
        }

        router.push({ path: `/result` });
    },
  },

});