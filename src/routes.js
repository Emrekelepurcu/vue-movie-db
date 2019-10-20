import Vue from "vue"
import VueRouter from "vue-router";
import MoviePage from "./components/movie/MoviePage";
import MovieGenres from "./components/movie/GenreMovie";
import MovieDetails from "./components/movie/MovieDetails";
import MovieResult from "./components/movie/MovieResult";
import MovieSearch from "./components/movie/MovieSearch";
Vue.use(VueRouter);

const routes = [
  { path : "/", component : MoviePage},
  { path : "/movie-list/popular", component : MovieGenres, name: "popular"},
  { path : "/movie-list/top-rated", component : MovieGenres, name: "top_rated"},
  { path : "/movie-list/upcoming", component : MovieGenres, name: "upcoming"},
  { path : "/movie-list/now-playing", component : MovieGenres, name: "now_playing"},
  { path : "/movie-details/:id", component : MovieDetails, name:"movie_details"},
  { path : "/search/:name", component : MovieResult, name: "search"},
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode: "history",
  routes
});
