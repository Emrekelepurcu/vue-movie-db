<template>
  <div class="modal is-active" v-if="getPopupVisible">
    <div class="modal-background" @click="popupClose"></div>
    <div class="modal-content" style="background-color: #fff">
      <div>
        <div class="bg-movie" v-if="getMovieDetail.backdrop_path"
             :style="'background-image:url(https://image.tmdb.org/t/p/original/'+ getMovieDetail.backdrop_path +')'"></div>
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column is-3 is-offset-1">
                <div class="movie image">
                  <figure class="image is-300x450" v-if="getMovieDetail.poster_path"><img
                    :src="'https://image.tmdb.org/t/p/w500/'+ getMovieDetail.poster_path"></figure>
                  <figure class="image is-300x450" v-else><img
                    src="https://via.placeholder.com/500x750"></figure>
                </div>
              </div>
              <div class="column is-6">
                <div class="movie-details">
                  <p>Vote: {{ getMovieDetail.vote_average }} ({{ getMovieDetail.vote_count }} vote)</p>
                  <h2>{{ getMovieDetail.title }}</h2>
                  <h3>{{ getMovieDetail.tagline }}</h3>
                  <ul>
                    <li v-for="genre in getMovieDetail.genres">{{ genre.name }}</li>
                  </ul>
                  <p>{{ getMovieDetail.overview }}</p>
                  <br>
                  <p v-if="getMovieDetail.release_date">Release Date: {{ getMovieDetail.release_date | dateFilter }}</p>
                  <p v-if="getMovieDetail.budget">Budget: {{ getMovieDetail.budget | currency }}</p>
                  <p v-if="getMovieDetail.revenue">Revenue: {{ getMovieDetail.revenue | currency }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="popupClose"></button>
  </div>
  <div v-else>
    <div class="bg-movie" v-if="getMovieDetail.backdrop_path"
         :style="'background-image:url(https://image.tmdb.org/t/p/original/'+ getMovieDetail.backdrop_path +')'"></div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-offset-1">
            <div class="movie image">
              <figure class="image is-300x450" v-if="getMovieDetail.poster_path"><img
                :src="'https://image.tmdb.org/t/p/w500/'+ getMovieDetail.poster_path"></figure>
              <figure class="image is-300x450" v-else><img
                src="https://via.placeholder.com/500x750"></figure>
            </div>
          </div>
          <div class="column is-6">
            <div class="movie-details">
              <p>Vote: {{ getMovieDetail.vote_average }} ({{ getMovieDetail.vote_count }} vote)</p>
              <h2>{{ getMovieDetail.title }}</h2>
              <h3>{{ getMovieDetail.tagline }}</h3>
              <ul>
                <li v-for="genre in getMovieDetail.genres">{{ genre.name }}</li>
              </ul>
              <p>{{ getMovieDetail.overview }}</p>
              <br>
              <p v-if="getMovieDetail.release_date">Release Date: {{ getMovieDetail.release_date | dateFilter }}</p>
              <p v-if="getMovieDetail.budget">Budget: {{ getMovieDetail.budget | currency }}</p>
              <p v-if="getMovieDetail.revenue">Revenue: {{ getMovieDetail.revenue | currency }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        data() {
            return {
                movieType: [],
                dataType: null,
                dataId: null
            }
        },
        computed: {
            ...mapGetters(["getMovieDetail","getPopupVisible"]),
        },
        methods: {
            popupClose() {
                this.$store.dispatch("popupCloseAction");
                this.$router.go(-1);
            }
        },
        created() {
            let result_id = window.location.pathname.split('/').slice(2, 3).join('/');
            this.movieType.push(
                {
                    id: result_id,
                    type: "movie"
                }
            );
            this.$store.dispatch("getDetails", this.movieType);
            window.addEventListener('keydown', (e) => {
                if (e.key == 'Escape') {
                    this.popupClose();
                }
            });
        },
    }
</script>

<style scoped lang="scss">
  .bg-movie {
    background-color: #fff;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 0px -200px;
    background-size: cover;
    width: 100%;
    height: 250px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    color: #999;
    font-weight: 600;
  }

  ul {
    margin: 15px 0;

    li {
      display: inline;
      background-color: #00d573;
      color: #000;
      margin-left: 20px;
      padding: 5px 10px;
      border-radius: 8px;
      font-weight: 600;

      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>
