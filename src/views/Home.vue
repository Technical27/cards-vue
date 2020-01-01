<template>
  <div class="home">
    <Card v-for='id in count' v-bind:key='id' v-bind:num='id'/>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  name: 'home',
  data() {
    return {
      count: 2
    };
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
