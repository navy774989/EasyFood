// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import FetchHelper from './utilities/fetchHelper';
import FetchHelper2 from './utilities/fetechHelperTest';
import FetchHelper3 from './utilities/fetechHelperTest2';

class Store {
 @observable StoreList = [];
 @observable ItemList=[];
 @observable attributes = {};
 @action getStoreList() {
   FetchHelper3.Get('stores') // 增加飲料的router
   .then((res) => res.json())
   .then((res) => {
     this.StoreList = res;
     console.log(this.StoreList);
   })
    .catch((err) => {
      console.log(err);
    });
 }
  @action getItemDetail(StoreId) {
    FetchHelper2.Get('/Items/' + StoreId)
    .then((res) => res.json())
    .then((res) => {
      this.ItemList = res.items;
      console.log(this.ItemList);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  @action getAttributes(id) {
    FetchHelper2.Get('/products/Attributes/' + id)
    .then((res)=>res.json())
    .then((res) => {
      this.attributes = res;
    })
    .catch((err)=>{
      console.log(err);
    });
  }
}
export default new Store();