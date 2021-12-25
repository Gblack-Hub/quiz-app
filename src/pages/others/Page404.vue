<template>
    <div id="page-not-found-main">
        <h1>404</h1>
        <div>Page Not Found</div>
    </div>
</template>
<script>
export default {
    name: "PageNotFound"
}
</script>
<style scoped>
    #page-not-found-main {
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 5rem;
    }
</style>