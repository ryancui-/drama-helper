<template>
  <div class="review-info-wrapper">
    <div class="top-panel">
      <div class="round">
        目前是第 {{round}} 回合
      </div>
      <div class="btns">
        <el-button type="success" size="small"
                   @click="nextRound">下一回合
        </el-button>
      </div>
    </div>

    <el-card>
      <div slot="header">
        <span>公开信息</span>
      </div>
      <div>
        <p v-for="(info, index) in openData" :key="index" v-html="info">
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
        return storage.getOpenByRound(this.round);
      }
    },
    methods: {
      nextRound() {
        storage.nextRound();
        this.$router.push('/input');
      }
    }
  };
</script>

<style>
  .top-panel {
    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
  }

  .round {
    font-size: 28px;
  }
</style>