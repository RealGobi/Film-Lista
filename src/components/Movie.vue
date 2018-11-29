<template>
<div id="cont">
  <div class="movie">
  <strong> Title: </strong>{{ movie.title }} <br>
  <strong> Year: </strong> {{ movie.year }} <br>
  <strong> Director(s)</strong>{{ movie.director.join(', ') }} <br>
  <strong> Stars: </strong>{{ movie.topActors.join(', ') }} <br>
  <strong> Category: </strong> {{ movie.cat.join(', ') }} <br>
  <strong> Plot: </strong>{{ movie.plot }} <br>
 <hr>
     <router-link :to="{ name: 'movies', params: {id:movie.id} }">Tillbaka</router-link> 
  </div>
</div>
</template>

<script>
export default {
  name: 'Movie',
  computed: {
  
    movie() {
      var id = this.$route.params.id;
      return this.$store.state.movies.find(function(movie) {
        return movie.id == id
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.movie {
  margin: auto;
  background-color: #ececec;
  color: black;
  border-radius: 5px;
  text-align: left;
  vertical-align: middle;
  padding: 5% 10% 5% 10%;

}
</style>



<!-- 
{{directorS}} 

  directorS(){
      if (director.lenght < 1){
        directorS = "Director"
      } else {
        directorS="Directors"
      }
    } -->