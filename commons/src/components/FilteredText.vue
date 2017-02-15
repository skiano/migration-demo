<template>
  <p>{{filteredText}}</p>
</template>

<script>

const text = 'A large fawn jumped quickly over white zinc boxes.'

export default {
  name: 'filtered-text',
  props: {
    visibleCharacters: {
      type: Array,
      default () {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      }
    }
  },
  data () {
    return {
      text: text
    }
  },
  computed: {
    filteredText () {
      return this.text.replace(
        new RegExp('[^' + this.visibleCharacters.join('') + '\\W]', 'ig'), '')
    }
  }
}

</script>

<style scoped>
  p {
    font-size: 24px;
    font-weight: bold;
    margin: 30px 0;
  }
</style>
