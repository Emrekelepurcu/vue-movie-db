<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="field">
          <div class="control">
            <label>
              <input class="input is-large" type="text" placeholder="Search Movie" v-model="searchText"
                     @keyup.enter="searchAction">
              <button class="search-button" @click="searchAction"><i class="fas fa-search"></i></button>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            searchAction() {
                this.$router.push({name: 'search', params: {name: this.queryForRouter}});
            }
        },
        computed: {
            queryForRouter() {
                return encodeURI(this.searchText.replace(/ /g, "+"));
            }
        },
        created() {

        }
    }

</script>

<style scoped lang="scss">
  .icon {
    .fa-search {
      position: absolute;
      right: 20px;
      top: 17px;
    }
  }

  .input {
    width: 90%;
  }

  .search-button {
    width: 10%;
    padding: 15px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    margin-left: -5px;
  }

  .field {
    .control {
      .dropdown {
        display: block;
        min-width: 100%;
        min-height: 100%;

        .dropdown-content {
          overflow: auto;
          max-height: 200px;

          .item {
            font-size: 18px;
            display: block;
            color: #000;
            padding: 5px 15px;
            line-height: 1.7;
          }
        }
      }
    }
  }
</style>
