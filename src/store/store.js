// 类似 Vuex 的全局数据

const global = {
  currentRound: 1,
  init() {
    this.currentRound = 1;
  }
};

export default global;
