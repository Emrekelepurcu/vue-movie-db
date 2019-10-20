<template>
    <app-movie-result :key="this.$route.params.name"></app-movie-result>
</template>

<script>
    import MovieResult from "./MovieResult";
    export default {
        components: {
            appMovieResult : MovieResult
        }
    }
</script>

<style scoped>

</style>
