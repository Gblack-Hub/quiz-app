<template>
    <div id="hero-main">
        <transition name="fade" appear>
            <HeroText />
        </transition>
        <div>
            <router-link to="/questions" class="button">Click here to begin &rarr;</router-link>
        </div>
    </div>
</template>
<script>
import HeroText from './HeroText.vue'

export default {
    name: 'HeroComponent',
    components: {
        HeroText
    }
}
</script>
<style scoped>
    #hero-main {
        width: 90%;
        height: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        align-items: center;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateY(20px);
    }
    .fade-enter-to {
        opacity: 1;
        transform: translateY(0);
    }
    .fade-enter-active {
        transition: all 1.5s ease;
    }

    .button {
        display: inline;
        padding: 1.475rem 4rem;
    }
    
    @media screen and (min-width: 576px){
        #hero-main {
            width: 60%;
        }
    }
</style>