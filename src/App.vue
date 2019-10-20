<template>
  <div>
    <app-header></app-header>
    <transition-group name="fade" mode="out-in">
      <app-movie-details v-if="getPopupVisible" key="movie-detail"></app-movie-details>
      <router-view key="rout"></router-view>
    </transition-group>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Header from "./components/shared/header";
    import Footer from "./components/shared/footer";
    import MovieDetails from "./components/movie/MovieDetails";
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                popupVisible: false
            }
        },
        components: {
            appHeader: Header,
            appFooter: Footer,
            appMovieDetails: MovieDetails
        },
        computed: {
            ...mapGetters(["getPopupVisible"]),
        },
        methods: {
            onHistoryChange() {
                this.$store.dispatch("popupCloseAction");
            }
        },
        created() {
            window.addEventListener('popstate', this.onHistoryChange);
        }
    }
</script>

<style lang="scss">
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .3s ease-out;
  }

  .fade-leave {
  }

  .fade-leave-active {
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>

