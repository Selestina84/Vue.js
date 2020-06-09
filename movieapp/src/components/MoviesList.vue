<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExsist">
        <BCol cols="3" v-for="(movie,key) in list" :key="key">
          <MovieItem :movie="movie"/>
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
  computed: {
    isExsist(){
      return Boolean(Object.keys(this.list).length)
    }
  }
}
</script>

<style scoped>
.list-title{
  font-size: 50px;
  margin: 0 0 30px 0;
  text-align: center;
}

</style>