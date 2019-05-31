<template>
  <div id="app">
    <h1>Hello from Vue</h1>
    <button v-on:click="addCounter">Add to counter</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: () => {
    // eslint-disable-next-line
    console.log('Vue app started')
  },
  methods: {
    addCounter: () => {
      window.dispatchEvent(new Event('addCounter'))
    }
  }
}
</script>

<style>
#app {
  font-family: arial;
  padding: 20px;
  color: green;
  border: 1px solid green;
  margin: 15px auto;
}
</style>
