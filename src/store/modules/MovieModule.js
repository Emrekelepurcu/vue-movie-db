import Vue from "vue"
import axios from "axios"

const state = {
  movieSearch: [],
  trendingMovies: [],
  movieGenre: [],
  movieDetail: '',
  pageCheck: 1,
  popupVisible: false
}

const getters = {
  getMovies(state) {
    return state.movieSearch;
  },
  getTrendingMovies(state) {
    return state.trendingMovies;
  },
  getMovieGenres(state) {
    return state.movieGenre;
  },
  getMovieDetail(state) {
    return state.movieDetail
  },
  getPopupVisible(state) {
    return state.popupVisible
  }
}

const mutations = {
  updateMovieSearch(state, movieSearch) {
    state.movieSearch.push(movieSearch)
  },
  updateTrendingMovies(state, movie) {
    state.trendingMovies.push(movie)
  },
  updateMovieGenres(state, genre) {
    state.movieGenre.push(genre)
  },
  updatePopupVisible(state) {
    state.popupVisible = true
  },
  updatePopupClose(state) {
    state.popupVisible = false
  }
}

const actions = {
  popupVisibleAction({commit}) {
    commit("updatePopupVisible");
  },
  popupCloseAction({commit}) {
    commit("updatePopupClose");
  },
  searchAction({state, commit}, name) {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5&query=$' + name)
      .then(response => {
        state.movieSearch = [];
        let data = response.data.results;
        for (let key in data) {
          data[key].id;
          commit("updateMovieSearch", data[key]);
        }
      })
      .catch(e => console.log(e))
  },
  trendingMovies({commit, state}, payload) {
    axios.get('https://api.themoviedb.org/3/movie/' + payload[0].media + '?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5&page=1')
      .then(response => {
        state.trendingMovies = [];
        let data = response.data.results;
        for(let key in data) {
          data[key].id;
          commit("updateTrendingMovies", data[key]);
        }
      })
      .catch(e => console.log(e))
  },
  trendingMoviesPage({commit, state}, payload) {
    axios.get('https://api.themoviedb.org/3/movie/' + payload[0].media + '?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5&page='+ payload[0].pageNumb)
      .then(response => {
        let data = response.data.results;
        for(let key in data) {
          data[key].id;
          commit("updateTrendingMovies", data[key]);
        }
      })
      .catch(e => console.log(e))
  },
  getDetails({commit, state}, payload) {
    axios.get('https://api.themoviedb.org/3/'+ payload[0].type +'/'+ payload[0].id +'?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5&language=en-US')
      .then(response => {
        state.movieDetail = response.data;
      }).catch(e => console.log(e))
  },
  // getMovies({commit, state}, payload) {
  // axios.get('https://api.themoviedb.org/3/' + payload[0].type + '/' + payload[0].name + "?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5")
  //   .then(response => {
  //
  //     let data = response.data.results;
  //     for(let key in data) {
  //       data[key].id;
  //       commit("updateTrendingMovies", data[key]);
  //     }
  //   })
  //   .catch(e => console.log(e))
  // },
  movieGenre({commit}) {
    // axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=28312dd7ce38f7b7d01cd12b63f5f1b5&language=en-US")
    //   .then(response => {
    //     let data = response.data.genres;
    //     for(let key in data) {
    //       data[key].id = key;
    //       commit("updateMovieGenres", data[key]);
    //     }
    //   })
    //   .catch(e => console.log(e))
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
