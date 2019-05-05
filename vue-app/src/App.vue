<template>
  <div id="app">
    <h1>Hello from Vue</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: () => {
    // eslint-disable-next-line
    console.log('Vue app started')
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
