<template>
  <div class="movie-item mb-4">
    <div class="movie-item-poster" :style="posterBg">
      <div class="movie-item-wrap d-flex flex-column justify-content-between">
        <div class="movie-item-info">
          <h3 class="movie-title">{{movie.Title}}</h3>
          <span class="movie-year d-block">{{ movie.Year}}</span>
        </div>
        <div class="movie-items-controls row no-gutters">
          <div class="col pr-2">
            <BButton size="md" block variant="outline-light">Edit</BButton>
          </div>
          <div class="col pl-2">
            <BButton size="md" block variant="outline-light">Remove</BButton>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterBg(){
      return {
        "background-image": `url(${this.movie.Poster})`
      }
    }
  }

}
</script>

<style scoped>
.movie-item{
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition:all 0.2s ease;
  height: 400px;
}
.movie-item:hover{
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.8);
  transform: scale(1.03)
}
.movie-item-poster{
  position:absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.movie-title{
  padding: 20px 0 0 0;
  font-size: 22px;
  color: white;
  text-align: center;
}
.movie-year{
  padding: 20px 0 0 0;
  font-size: 18px;
  color: white;
  text-align: center;
}
.movie-item-wrap{
  padding: 20px 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
}
.movie-item:hover .movie-item-wrap{
  opacity: 1;
  background-color:rgba(0,0,0,0.7);
}
</style>