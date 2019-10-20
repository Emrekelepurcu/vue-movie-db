<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
        to="/"
        tag="a"
        class="navbar-item">
        <img src="/src/assets/moviedblogo.png" width="200" height="161" style="max-height: 4.75rem;">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link
          to="/"
          tag="a"
          class="navbar-item">
          Home
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Categories
          </a>
          <div class="navbar-dropdown">
            <router-link
              to="/movie-list/popular"
              tag="a"
              class="navbar-item">
              Popular Movies
            </router-link>
            <router-link
              to="/movie-list/top-rated"
              tag="a"
              class="navbar-item">
              Top Rated Movies
            </router-link>
            <router-link
              to="/movie-list/upcoming"
              tag="a"
              class="navbar-item">
              Upcoming Movies
            </router-link>
            <router-link
              to="/movie-list/now-playing"
              tag="a"
              class="navbar-item">
              Now Playing Movies
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        computed: {
            ...mapGetters(["getMovieGenres"]),
        },
        created() {
            this.$store.dispatch("movieGenre");
        }
    }
</script>

<style scoped>

</style>
