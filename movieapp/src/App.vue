<template>
  <div id="app">
    <PosterBg :poster="posterBg"/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
    <MoviesPagination
    :current-page="currentPage"
    :per-page="moviesPerPage"
    :total="moviesLength"
    @pageChanged="onPageChanged"/>

  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination
  },
  data: () => ({
    posterBg: "",
  }),
  computed: {
    ...mapGetters('movies',["moviesList","currentPage", "moviesPerPage", "moviesLength"])
  },
  methods: {
    ...mapActions("movies",["changeCurrentPage"]),
    onChangePoster(poster){
      this.posterBg=poster;
    },
    onPageChanged(page){
      this.changeCurrentPage(page)
    }
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}
</style>
