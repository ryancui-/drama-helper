<template>
  <div class="review-game-wrapper">
    <div class="top-panel">
      <div class="title">
        一共进行了 {{gameData.round}} 回合
      </div>
      <div class="btns">
        <el-button type="primary" size="small"
                   @click="backIndex">回到首页
        </el-button>
      </div>
    </div>

    <el-card v-for="(op, index) in gameData.op" :key="index" style="margin-bottom: 10px;">
      <div slot="header">
        <span>回合 {{index + 1}}</span>
      </div>
      <el-row :gutter="24">
        <el-col :span="12">
          <p v-for="(text, idx) in extractOpen(op)" :key="idx">{{text}}</p>
        </el-col>
        <el-col :span="12">
          <p v-for="(text, idx) in extractClose(op)" :key="idx">{{text}}</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import storage from '@/storage/storage';

  export default {
    computed: {
      gameData() {
        return storage.getAll();
      }
    },
    methods: {
      extractOpen(op) {
        return op.map(i => i.open);
      },
      extractClose(op) {
        return op.map(i => i.close);
      },
      backIndex() {
        storage.init();
        this.$router.push('/');
      }
    }
  };
</script>

<style>

</style>