import storage from './storage.js'

const tag = "[Store]";
import { createNextId } from './helpers.js';

class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword){
    return this.storage.productData
      .filter(product => product.name.includes(keyword));
  }

  getKeywordList(){
    return this.storage.keywordData;
  }

  getHistoryList(){
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(his1, his2){
    return his2.date - his1.date;
  }

  removeHistory(keyword){
    this.storage.historyData = this.storage.historyData
      .filter(history => history.keyword !== keyword);
  }

  addHistory(keyword){
    keyword = keyword.trim();
    if(!keyword) return;
    const hasHistory = this.storage.historyData.some(history =>
      history.keyword === keyword);
    if(hasHistory){
      this.removeHistory(keyword);
    }
    const id = createNextId(this.storage.historyData);
    const date = new Date();

    this.storage.historyData.push({id,keyword,date});
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }
}

const store = new Store(storage);
export default store;