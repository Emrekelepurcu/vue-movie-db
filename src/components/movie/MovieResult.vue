<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <app-movies :movies="movie"
                    v-for="(movie, index) in getMovies"
                    :key="index"
                    type="movie"
        ></app-movies>
      </div>
    </div>
  </section>
</template>

<script>
    import Movies from "./Movies"
    import MovieSearch from "./MovieSearch";
    import {mapGetters} from "vuex"

    export default {
        components: {
            appMovies: Movies,
            appMovieSearch : MovieSearch
        },
        computed: {
            ...mapGetters(["getMovies"]),
        },
        created() {
            this.$store.dispatch("searchAction", this.$route.params.name);
        }
    }
</script>

<style scoped lang="scss">

</style>
