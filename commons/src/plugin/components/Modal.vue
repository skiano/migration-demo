<template>
  <div v-if="visible">
    <div class="scrim" @click.self="close">
    <div class="modal">
      <header>
        <h3>{{title}}</h3>
        <span class="handle" @click="close">Close</span>
      </header>
      <div class="modal-body">
        <slot></slot>  
      </div>
      <footer>
        <button @click="cancel">{{cancelText}}</button>
        <button @click="confirm">{{confirmText}}</button>
      </footer>
    </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      cancelText: {
        type: String,
        default: 'cancel'
      },
      confirmText: {
        type: String,
        default: 'confirm'
      }
    },
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      cancel () {
        this.$emit('close')
        this.$emit('cancel')
      },
      confirm () {
        this.$emit('close')
        this.$emit('confirm')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    background: #fff;
    width: 600px;
    height: 300px;
    margin-left: -300px;
    margin-top: -150px;
    z-index: 1000;

    -webkit-box-shadow: 1px 2px 16px 0px rgba(0,0,0,0.23);
    -moz-box-shadow: 1px 2px 16px 0px rgba(0,0,0,0.23);
    box-shadow: 1px 2px 16px 0px rgba(0,0,0,0.23);
  }

  .scrim {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.3);
  }

  header {
    background-color: #ddd;
  }

  header, .modal-body {
    padding: 10px;
  }

  h3 {
    font-weight: bold;
    display: inline-block;
  }

  header span {
    display: inline-block;
  }

  .handle {
    float: right;
  }

  .handle:hover {
    cursor: pointer;
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 10px;
    text-align: right;
  }
</style>
