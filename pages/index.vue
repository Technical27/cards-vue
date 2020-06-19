<template>
  <div class="container">
    <Card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/Card.vue'

export default Vue.extend({
  components: {
    Card
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
