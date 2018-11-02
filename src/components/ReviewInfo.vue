<template>
  <div class="review-info-wrapper">
    <div class="top-panel">
      <div class="title">
        目前是第 {{round}} 回合
      </div>
      <div class="btns">
        <el-button type="success" size="small"
                   @click="nextRound">下一回合
        </el-button>
        <el-button type="danger" size="small"
                   @click="finishGame">结束游戏
        </el-button>
      </div>
    </div>

    <el-card>
      <div slot="header">
        <span>公开信息</span>
      </div>
      <div>
        <p v-for="(info, index) in openData" :key="index" class="operation">
          <label>{{index + 1}}</label>
          <span v-html="info"></span>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
  import storage from '@/storage/storage';

  export default {
    computed: {
      round() {
        return storage.getCurrentRound();
      },
      openData() {
        // 这里需要打乱排序
        return storage.getOpenByRound(this.round).sort(() => Math.random() - 0.5);
      }
    },
    methods: {
      nextRound() {
        storage.nextRound();
        this.$router.push('/input');
      },
      finishGame() {
        this.$router.push('/review_game');
      }
    }
  };
</script>

<style>
</style>