<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    box-sizing: border-box;
    padding: 24px;
  }

  .top-panel {
    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
  }

  .top-panel > .title {
    font-size: 28px;
  }

  .operation {
    display: flex;
    margin: 5px 0;
  }

  .operation > label {
    width: 30px;
  }

  .operation > span {
    flex: 1;
  }
</style>
