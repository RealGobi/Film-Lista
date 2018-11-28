<template>
  <div class="movies">
  <ul>
    <li v-for="movie in movies" :key="movie.movie">
     {{ movie.title }}
     
    <!-- <router-link :to="{ name: 'user', params: {id:user.id} }">Läs</router-link> -->
     </li>

  </ul>
  </div>
</template>

<script>
export default {
  name: 'Movies',
  computed: {
    movie (){
      return this.$store.state.movies;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
