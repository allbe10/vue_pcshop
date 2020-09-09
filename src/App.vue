<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>

<style>
* {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ededed;
  height:100%;
}
.main {
  overflow: hidden;
  width:100%;
  height:100%;
}

</style>
