<template>
  <div class="movie">
    <Movie></Movie> 
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from '@/components/Movie.vue'

export default {
  name: 'movie',
  components: {
    Movie
  
  }
}
</script>
