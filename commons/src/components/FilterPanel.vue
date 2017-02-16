<template>
  <div>
    <div class="example">
      <filtered-text :visibleCharacters="selected"/>
      <button @click="openFilterModal">
        Filter Letters
      </button>
    </div>

    <modal
      v-on:close="closeFilterModal"
      v-on:confirm="applyFilter"
      :visible="showFilter"
      title="Select vowels"
      confirmText="apply">

      <button @click="selectAll">Select All</button>
      <button @click="deselectAll">Deselect All</button>
      <button @click="selectVowels">Select Vowels</button>
      <button @click="selectConsonants">Select Consonants</button>

      <ul>
        <li v-for="option in options">
          <input type="checkbox" :id="option" :value="option" v-model="pendingSelection">
          <label :for="option">{{option}}</label>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
  import Modal from './Modal'
  import FilteredText from './FilteredText'

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const VOWELS = 'AEIOU'
  const CONSONANTS = ALPHABET.replace(new RegExp('[' + VOWELS + ']', 'ig'), '')

  export default {
    name: 'filter-panel',
    components: {
      Modal,
      FilteredText
    },
    props: {
      initialSelected: {
        type: Array,
        default () {
          return ALPHABET.split('')
        }
      }
    },
    data () {
      return {
        showFilter: false,
        pendingSelection: [],
        options: ALPHABET.split(''),
        selected: Array.from(this.initialSelected)
      }
    },
    methods: {
      openFilterModal (filter) {
        this.showFilter = !this.showFilter
        this.pendingSelection = Array.from(this.selected)
      },
      closeFilterModal () {
        this.showFilter = false
      },
      selectAll () {
        this.pendingSelection = ALPHABET.split('')
      },
      selectVowels () {
        this.pendingSelection = VOWELS.split('')
      },
      selectConsonants () {
        this.pendingSelection = CONSONANTS.split('')
      },
      deselectAll () {
        this.pendingSelection = []
      },
      applyFilter () {
        this.selected = Array.from(this.pendingSelection)
        this.$emit('update', Array.from((this.selected)))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .example {
    background: #ccc;
    padding: 30px;
    text-align: center;
  }

  ul {
    margin: 15px 0;
    overflow: hidden;
  }

  li {
    list-style-type: none;
    float: left;
    font-size: 24px;
    cursor: default;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  li:hover {
    color: blue;
  }

  label {
    display: block;
    float: right;
    width: 40px;
    padding: 5px;
  }

  input {
    position: relative;
    top: 1px;
  }
</style>
