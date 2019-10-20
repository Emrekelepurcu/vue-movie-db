<template>
    <app-movie-list :propMedia="$route.name" :key="$route.name"></app-movie-list>
</template>

<script>
    import MovieList from "./MovieList";

    export default {
        components: {
            appMovieList: MovieList
        },
    }
</script>

<style>

</style>
