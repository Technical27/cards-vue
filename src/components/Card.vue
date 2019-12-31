<template>
  <div class='card'>
    <textarea class='card-name' v-bind:value='name' v-stream:input='name$'/>
    <textarea class='card-body'/>
  </div>
</template>

<script>
import {Subject} from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';
export default {
  name: 'Card',
  props: ['num'],
  data() {
    return {
      subscriptions: []
    };
  },
  domStreams: ['name$'],
  created () {
    this.$store.commit('createCard', {id: this.num});
    this.subscriptions.push(
      this.name$.pipe(
        debounceTime(750),
        map(x => x.event.target.value)
      )
      .subscribe(x => this.$store.commit('changeName', {newName: x, id: this.num}))
    );
  },
  beforeDestroy () {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  },
  computed: {
    name () {
      const index = this.$store.state.cards.findIndex(x => x.id === this.num);
      return this.$store.state.cards[index].name;
    }
  }
}
</script>

<style scoped>
.card {
  width: 25%;
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.card textarea {
  resize: none;
  outline: none;
  width: 100%;
  padding: 0;
  border: 1px solid black;
}
.card .card-body {
  height: 90%;
}
</style>
