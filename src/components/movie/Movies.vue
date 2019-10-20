<template>
  <div class="column is-3">
    <div class="movie">
      <div class="movie-img" @mouseover="fillProgress">
        <a :href="'/movie-details/'+ movies.id" @click="popupCreate">
          <figure class="image is-2by3" v-if="movies.poster_path"><img :src="'https://image.tmdb.org/t/p/w500/'+ movies.poster_path" :alt="movies.name"></figure>
          <figure class="image is-2by3" v-else><img src="https://via.placeholder.com/500x750" :alt="movies.name"></figure>
        </a>
      </div>
      <div class="progress-bar">
        <progress v-if="voteShow" class="progress is-medium" :class="progressClass" :value="movieVote"
                  max="100"></progress>
        <p v-if="voteShow">{{ movieVote + "%" }}</p>
      </div>
      <div class="movie-name">
        <a :href="'/movie-details/'+ movies.id" @click="popupCreate">
          <h2>{{ movies.title }}</h2>
        </a>
        <p><span>Release Date: {{ movies.release_date | dateFilter }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ["movies", "type"],
        data() {
            return {
                movieVote: 0,
                movieVoteClass: null,
                voteShow: false
            }
        },
        methods: {
            fillProgress() {
                this.voteShow = true;
                var intval = setInterval(() => {
                    if (this.movieVote < this.movies.vote_average * 10) {
                        this.movieVote += 2;
                    } else {
                        clearInterval(intval);
                    }
                }, 20)
            },
            popupCreate(e) {
                e.preventDefault();
                this.$store.dispatch("popupVisibleAction");
                history.pushState('', 'Title of page', '/movie-details/' + this.movies.id );
                // this.$router.replace({ name: 'movie_details', params: { id: this.movies.id }})
            }
        },
        computed: {
            progressClass() {
                if (this.movieVote <= 40) {
                    return "is-danger";
                } else if (this.movieVote <= 70 && this.movieVote > 40) {
                    return "is-warning";
                } else if (this.movieVote > 70) {
                    return "is-success";
                }
            }
        },
    }
</script>

<style scoped lang="scss">
  .movie {
    figure {
      cursor: pointer;
    }

    .movie-name {
      h2 {
        font-size: 18px;
        margin-top: -15px;
        margin-bottom: 4px;
      }

      p {
        font-size: 14px;

        span {
          font-size: 15px;
          color: #999;
        }
      }

      a {
        color: #000;
      }
    }

    .progress-bar {
      position: relative;
      top: -20px;
      height: 25px;

      .progress {
        margin-bottom: 0;
        border-radius: 0;
      }

      p {
        position: relative;
        left: 46%;
        top: -22px;
        font-weight: 700;
      }
    }
  }
</style>
