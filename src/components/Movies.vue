<template>
  <div class="movies">
   Search by category: <input type="text" v-model="search" placeholder="Search by category" />

  <ul>
    <li v-for="movie in movies  /*filterdMovies*/ " :key="movie.movie">
     {{ movie.title  }} -
     <router-link :to="{ name: 'movie', params: {id:movie.id} }"> Mer info</router-link> 
     </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Movies',
  data(){
      return {
         search: ' '
      }
  },
  computed: {
   movies (){
      return this.$store.state.movies.filter((movie) =>{
        return movie.cat.match(this.search);
      })/*
      filterdMovies: function(){
      return this.$store.state.movies.filter((movie) =>{
        return movie.cat.match(this.search);
      }) 
      } */
   }
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border:none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15px;
  cursor: pointer;
}
li {
  list-style: none;
  padding: 5px;
}


</style>
