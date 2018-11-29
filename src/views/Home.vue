<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpeg">
    <HelloWorld msg="This page is all about movies!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
