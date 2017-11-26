// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

import FetchHelper from './utilities/fetechHelperTest';
import LoginStore from './Login';

class Store {
 @observable Data = [];
 @observable Model ='預約外帶';
 @action getCategories(){
   FetchHelper.Get('/categories/'+LoginStore.accountId)
   .then((res)=>res.json())
   .then((res)=>{
     console.log("categories/");
     this.Data=res.Data;
     console.log(res);
   })
    .catch((err)=>{
      console.log("categories/"+LoginStore.accountId);
      console.log(err);
    });
 }
@action changeModel(model){
  this.Model=model;
}
}
export default new Store();