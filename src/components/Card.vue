<template>
  <div class="card">
    <textarea
      class="card-name"
      v-bind:value="name"
      v-stream:input="{subject: input$, data: 'name'}"
    />
    <textarea
      class="card-body"
      v-bind:value="body"
      v-stream:input="{subject: input$, data: 'body'}"
    />
  </div>
</template>

<script>
import {map, debounceTime} from 'rxjs/operators';
export default {
  name: 'Card',
  props: ['num'],
  data() {
    return {
      subscriptions: []
    };
  },
  domStreams: ['input$'],
  created() {
    this.$store.commit('createCard', {id: this.num});
    this.subscriptions.push(
      this.input$
        .pipe(
          debounceTime(750),
          map(x => ({value: x.event.target.value, type: x.data}))
        )
        .subscribe(({value, type}) => {
          if (type === 'name') {
            this.$store.commit('changeName', {newName: value, id: this.num});
          } else if (type === 'body') {
            this.$store.commit('changeBody', {newBody: value, id: this.num});
          }
        })
    );
  },
  beforeDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  },
  methods: {
    getState() {
      const index = this.$store.state.cards.findIndex(x => x.id === this.num);
      return this.$store.state.cards[index];
    }
  },
  computed: {
    name() {
      return this.getState().name;
    },
    body() {
      return this.getState().body;
    }
  }
};
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
