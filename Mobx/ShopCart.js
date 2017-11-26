// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import FetchHelper from './utilities/fetechNotification';

class Store {
 @persist@observable token = '';
 @action sentorder() {
   FetchHelper.Get('?token=' + this.token)
   .then((res)=>{
     console.log(res);
   })
    .catch((err)=>{
      console.log(err);
    });
 }
  @action settoken(token){
    this.token=token;
  }
}
export default new Store();