<template>
  <div class="card">
    <input
      v-model="title"
      ref="title"
      type="text"
      rows="1"
      cols="40"
      placeholder="Title"
      @keydown="moveDown"
    />
    <textarea
      v-model="body"
      ref="body"
      rows="8"
      cols="40"
      placeholder="Body"
      @keydown="moveUp"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    moveDown(e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        this.$refs.body.focus()
        if (this.$data.body !== '') {
          this.$refs.body.setSelectionRange(0, 0)
        }
      }
    },
    moveUp(e) {
      if (e.keyCode === 8) {
        const body = this.$refs.body
        if (
          body.selectionStart === body.selectionEnd &&
          body.selectionStart === 0
        ) {
          e.preventDefault()
          this.$refs.title.focus()
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  font-family: "JetBrains Mono"
  display: flex
  flex-direction: column
  font-size: 1.2em

  *
    border: 0.05em solid gray
    padding: 0.4em
    margin: 0.2em 0
</style>
