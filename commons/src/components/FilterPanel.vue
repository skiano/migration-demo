<template>
  <div>
    <div class="example">
      <filtered-text :filteredVowels="checkedVowels"></filtered-text>
      <button @click="openFilterModal">Filter Vowels</button>
    </div>

    <modal 
      v-bind:visible="showFilter"
      v-on:close="closeFilterModal"
      v-on:confirm="applyFilter"
      title="Select vowels"
      confirmText="apply">

      <button @click="selectAll">Select All</button>
      <button @click="deselectAll">Deselect All</button>

      <ul>
        <li v-for="option in ['A', 'E', 'I', 'O', 'U']">
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

export default {
  name: 'filter-panel',
  components: {
    Modal,
    FilteredText
  },
  props: {
    options: {
      type: Array,
      default () {
        return ['A', 'E', 'I', 'O', 'U']
      }
    }
  },
  data () {
    return {
      showFilter: false,
      checkedVowels: this.options,
      pendingSelection: []
    }
  },
  methods: {
    openFilterModal (filter) {
      this.pendingSelection = [].concat(this.checkedVowels)
      this.showFilter = !this.showFilter
    },
    closeFilterModal () {
      this.showFilter = false
    },
    selectAll () {
      this.pendingSelection = [].concat(this.options)
    },
    deselectAll () {
      this.pendingSelection = []
    },
    applyFilter () {
      this.checkedVowels = [].concat(this.pendingSelection)
      this.$emit('update', [].concat(this.checkedVowels))
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
  margin-right: 10px;
}

li:hover {
  background-color: #eee;
}

label {
}

input {
  padding: 50px;
}
</style>
