<template>
  <div>
    <section class="section search">
      <div class="container is-fluid middle-height">
        <div class="outer-wrapper">
          <div class="inner-wrapper">
            <div class="header-wrapper">
              <app-movie-search></app-movie-search>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-movie-list propMedia="now_playing" key="homepage"></app-movie-list>
  </div>
</template>

<script>
    import MovieSearch from "./MovieSearch";
    import MovieList from "./MovieList";

    export default {
        components: {
            appMovieSearch: MovieSearch,
            appMovieList: MovieList
        }
    }
</script>

<style scoped lang="scss">
  .search {
    background-image: url("../../assets/movie-db-bg.jpg");
    background-color: #fff;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    width: 100%;
  }

  .middle-height {
    height: 600px;
  }

  .outer-wrapper {
    height: 100%;
    width: 100%;
  }

  .inner-wrapper {
    display: table;
    width: 100%;
    height: 100%;
  }

  .header-wrapper {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
</style>
