// 这里封装了 localStorage.drama_game 的使用

const key = 'drama_game';

class DramaGameStorage {
  // 清空之前的数据，并重新初始化
  init() {
    this._set([]);
  }

  // 向某回合添加操作
  add(round, openContent, closeContent) {
    const obj = this._get();
    const idx = Number(round - 1);
    if (!obj[idx] || !Array.isArray(obj[idx])) {
      obj[idx] = [];
    }

    obj[idx].push({
      open: openContent,
      close: closeContent
    });

    this._set(obj);
  }

  // 拿到全部数据
  getAll() {
    return this._get();
  }

  // 拿到某一回合的所有数据
  getByRound(round) {
    const obj = this._get();
    const idx = Number(round - 1);

    return obj[idx];
  }

  // 拿到某一回合的公开数据
  getOpenByRound(round) {
    const data = this.getByRound(round);
    return data.map(op => op.open);
  }

  // 拿到某一回合的非公开数据
  getCloseByRound(round) {
    const data = this.getByRound(round);
    return data.map(op => op.close);
  }

  _get() {
    const str = localStorage.getItem(key);
    try {
      return JSON.parse(str);
    } catch (_) {
      // 出现了奇怪的错误
    }
  }

  _set(obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}

export default new DramaGameStorage();
