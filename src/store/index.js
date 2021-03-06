import { createStore } from "vuex";
import router from "../router/index";
import { questions } from "../utils/questions.json";

const getDefaultState = () => {
  return {
    questions: questions,
    selectedAnswers: [],
    unansweredQuestions: [],
    isSubmitted: false
  }
}

export default createStore({
  state: getDefaultState(),
  getters: {
    getCorrectAnswers: state => state.selectedAnswers.filter((item) => item.correctAnswerId === item.answerId),
    getWrongAnswers: state => state.selectedAnswers.filter((item) => item.correctAnswerId !== item.answerId),
    getIsAnswersComplete: state => state.selectedAnswers.length === state.questions.length
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
    SUBMIT_ANSWERS(state) {
        state.isSubmitted = true;

        if(state.selectedAnswers.length < state.questions.length) {
            return;
        }

        router.push({ path: `/result` });
    },
    FINISH_AND_RESET_STATE (state) {
      Object.assign(state, getDefaultState())
      router.push("/");
    }
  },

});