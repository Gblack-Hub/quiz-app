<template>
    <div id="hero-main">
        <transition name="fade" appear>
            <HeroText />
        </transition>
        <BeginButton />
    </div>
</template>
<script>
import HeroText from './HeroText.vue'
import BeginButton from './BeginButton.vue'

export default {
    name: 'HeroComponent',
    components: {
        BeginButton,
        HeroText
    }
}
</script>
<style scoped>
    #hero-main {
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: space-between;
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
    
    @media screen and (min-width: 576px){
        #hero-main {
            width: 60%;
        }
    }
</style>