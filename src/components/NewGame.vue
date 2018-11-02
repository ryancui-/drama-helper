<template>
  <div class="new-game-wrapper">
    <el-button type="primary" @click="initNewGame">新游戏</el-button>
    <el-button type="primary" @click="resumeOldGame" v-if="gameData && gameData.length > 0">继续游戏</el-button>
  </div>
</template>

<script>
  import global from '@/store/store';
  import storage from '@/storage/storage';

  export default {
    data() {
      return {
        gameData: storage.getAll()
      };
    },
    methods: {
      initNewGame() {
        // 清空缓存
        global.init();
        storage.init();

        this.$router.push('/input');
      },
      resumeOldGame() {
        // 继续之前的游戏
        this.$router.push('/input');
      }
    }
  };
</script>

<style>
  .new-game-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>