<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExsist">
        <BCol cols="3" v-for="(movie,key) in list" :key="key">
          <MovieItem :movie="movie"
          @mouseover.native="onMouseOver(movie.Poster)"/>
        </BCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </BRow>
  </BContainer>
</template>
<script>
import MovieItem from "./MovieItem";

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MovieItem,
  },
  methods: {
    onMouseOver(poster){
      this.$emit("changePoster", poster);
    }
  },
  computed: {
    isExsist(){
      return Boolean(Object.keys(this.list).length)
    }
  }
}
</script>

<style scoped>
.list-title{
  padding: 30px 0 0 0;
  font-size: 50px;
  margin: 0 0 30px 0;
  color: white;
  text-shadow: 5px -5px 5px black;
}

</style>