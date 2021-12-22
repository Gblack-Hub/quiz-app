import { createStore } from "vuex";
import { questions } from '../utils/questions';

export default createStore({
  state: {
    questions: questions,
    answers: []
  },
  getters: {
    getQuestions: (state) => state.questions,
  },
  mutations: {
    addAnswer(state, item) {
      state.answers.push(item);
    }
  }
});