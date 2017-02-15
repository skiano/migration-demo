<template>
  <div>
    <div class="example">
      <filtered-text :visibleCharacters="selected"></filtered-text>
      <button @click="openFilterModal">Filter Letters</button>
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
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      }
    },
    initialSelected: {
      type: Array,
      default () {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      }
    }
  },
  data () {
    return {
      showFilter: false,
      pendingSelection: [],
      selected: Array.from(this.initialSelected)
    }
  },
  methods: {
    openFilterModal (filter) {
      this.pendingSelection = Array.from(this.selected)
      this.showFilter = !this.showFilter
    },
    closeFilterModal () {
      this.showFilter = false
    },
    selectAll () {
      this.pendingSelection = Array.from(this.options)
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
