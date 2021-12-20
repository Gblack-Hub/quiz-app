<template>
    <div id="begin-button-main">
        <button @click="goToQuestionsPage">Click here to begin &rarr;</button>
    </div>
</template>
<script>
export default {
    name: "BeginButton",
    methods: {
        goToQuestionsPage() {
            this.$router.push("/questions");
        }
    }
}
</script>
<style scoped>
    #begin-button-main {
        margin: auto;
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

    button:focus {
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
        outline: none;
    }
</style>