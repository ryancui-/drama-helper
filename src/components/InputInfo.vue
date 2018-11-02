<template>
  <div class="input-info-wrapper">
    <div class="top-panel">
      <div class="round">
        目前是第 {{round}} 回合
      </div>
      <div class="btns">
        <el-button type="primary" size="small"
                   :disabled="!openContent && !closeContent"
                   @click="nextOne">填完，下一个
        </el-button>
        <el-button type="success" size="small"
                   :disabled="!!openContent || !!closeContent"
                   @click="finishInput">结束填写
        </el-button>
      </div>
    </div>

    <el-row class="input-panel" :gutter="24">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>这里是可以公开的内容</span>
          </div>
          <div>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="openContent">
            </el-input>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>这里是不能公开的内容</span>
          </div>
          <div>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="closeContent">
            </el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import global from '@/store/store';
  import storage from '@/storage/storage';

  export default {
    data() {
      return {
        openContent: '',
        closeContent: ''
      };
    },
    computed: {
      round() {
        return global.currentRound;
      }
    },
    methods: {
      nextOne() {
        storage.add(this.round, this.openContent, this.closeContent);

        this.openContent = '';
        this.closeContent = '';

        this.$notify({
          title: '成功',
          message: '保存成功啦~',
          type: 'success'
        });
      },
      finishInput() {
        this.$router.push('/review');
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