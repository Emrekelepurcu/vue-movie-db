<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <app-movies :movies="movie"
                    v-for="(movie, index) in getTrendingMovies"
                    :key="index"
                    :type="propMedia"
        ></app-movies>
      </div>
      <div class="has-text-centered">
        <a class="button" @click="changePage">Load More</a>
      </div>
    </div>
  </section>
</template>

<script>
    import Movies from "./Movies"
    import {mapGetters} from "vuex"

    export default {
        props: ["propMedia", "propData"],
        components: {
            appMovies: Movies
        },
        data() {
            return {
                trendingDetail: [],
                trendingPage: [],
                pageNumber: 1
            }
        },
        methods: {
            changePage() {
                this.pageNumber++;
                this.trendingPage = [];
                this.trendingPage.push(
                    {
                        media: this.$props.propMedia,
                        pageNumb: this.pageNumber,
                    }
                );
                this.$store.dispatch("trendingMoviesPage", this.trendingPage);
            }
        },
        computed: {
            ...mapGetters(["getTrendingMovies"]),
        },
        watch: {
            trendingDetail() {
                this.$store.dispatch("trendingMovies", this.trendingDetail);
            }
        },
        created() {
            this.trendingDetail.push(
                {
                    media: this.$props.propMedia,
                    pageNumb: this.pageNumber,
                }
            );
        }
    }
</script>

<style scoped lang="scss">
  a {
    margin-top: 15px;
  }
</style>
