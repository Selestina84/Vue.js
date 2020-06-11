<template>
  <div class="movies-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
    {{currentPage}}
  </div>
</template>

<script>
export default {
 name: 'MoviesPagination',
 props: {
   currentPage: {
     type: Number,
     default: 1
   },
   total: {
     type: Number,
     default: 1
   },
   perPage: {
     type: Number,
     default: 1
   }
 },
 computed: {
   currentPageModel:{
     set(value){
       this.$emit('pageChanged', value)
     },
     get(){
       return this.currentPage
     }
   }
 }
}
</script>

<style scoped>
.movies-pagination{
  margin: 30px 0 0 0;
}
.movies-pagination >>> .pagination .page-item .page-link{
  background-color: transparent;
  font-size: 15px;
  box-shadow: none;
  color: white;
}
.movies-pagination >>> .pagination .page-item.active .page-link{
  background-color: white;
  color: black;
  border-color: white;
  outline: none;
}
.movies-pagination >>> .pagination .page-item.disabled .page-link{
  color: grey;
}

</style>