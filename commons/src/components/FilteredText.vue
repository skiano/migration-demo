<template>
  <p>{{filteredText}}</p>
</template>

<script>
const vowels = ['A', 'E', 'I', 'O', 'U']

export default {
  name: 'filtered-text',
  props: {
    filteredVowels: {
      type: Array,
      default () {
        return ['A', 'E', 'I', 'O', 'U']
      }
    }
  },
  data () {
    return {
      text: 'A large fawn jumped quickly over white zinc boxes.'
    }
  },
  computed: {
    filteredText () {
      const remove = vowels.filter(v => !this.filteredVowels.includes(v))
      return this.text.replace(new RegExp(remove.join('|'), 'ig'), '')
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
