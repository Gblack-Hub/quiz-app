<template>
    <div id="result-page-main">
        <div class="result-information-container">
            <div>Your answers were submitted successfully!</div>
            <h1>You scored <span class="score">{{ calculatePercentage(getCorrectAnswers.length, questions.length) }}%</span></h1>
            <small>You got <span class="font-bold">{{getCorrectAnswers.length}}</span> out of <span class="font-bold">{{questions.length}}</span> question{{questions.length > 0 ? 's' : ''}} right.</small>
        </div>
        <router-link to="/" class="button">Finish</router-link>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import {mapState} from "vuex";

export default {
    name: 'ResultPage',
    computed: {
        ...mapGetters(['getCorrectAnswers']),
        ...mapState(['questions']),
    },
    methods: {
        calculatePercentage(value, total) {
            return ((value / total) * 100).toFixed(2);
        }
    }
}
</script>
<style scoped>
    #result-page-main {
        width: 90%;
        height: 100vh;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .result-information-container {
        text-align: center;
        margin-bottom: 70px;
    }
    .result-information-container > p {
        font-size: 1.4rem;
    }
    .score {
        font-weight: bold;
        color: var(--primary-color);
    }
    .font-bold {
        font-weight: bold;
    }

    @media only screen and(min-width: 576px) {
        #result-page-main {
            width: 80%;
        }
    }
</style>