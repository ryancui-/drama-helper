<template>
  <div class="input-info-wrapper">
    <div class="top-panel">
      <div class="title">
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
            <el-input type="textarea" :rows="12" placeholder="请输入内容" v-model="openContent">
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
            <el-input type="textarea" :rows="12" placeholder="请输入内容" v-model="closeContent">
            </el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
        return storage.getCurrentRound();
      }
    },
    methods: {
      nextOne() {
        storage.add(this.round,
          this.processInputContent(this.openContent),
          this.processInputContent(this.closeContent)
        );

        this.openContent = '';
        this.closeContent = '';

        this.$message({
          message: '保存成功啦~~',
          type: 'success'
        });
      },
      finishInput() {
        this.$router.push('/review');
      },
      // 处理换行符
      processInputContent(content) {
        return content.replace(/\n/g, '<br/>').replace(/\s/g, ' ');
      }
    }
  };
</script>

<style>

</style>