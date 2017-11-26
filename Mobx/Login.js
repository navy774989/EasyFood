// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import FetchHelper from './utilities/fetchHelper';
import RNAccountKit from 'react-native-facebook-account-kit';
import { Login } from './../Screens/Login';

class Store {
 @observable Login = false;
 @observable ItemList=[];
 @observable accountId='';
 @action checkLogin()
 { RNAccountKit.getCurrentAccessToken()
  .then((token) => {
    this.Login = true;
    this.accountId=this.token.accountId;
  });
 }
}
export default new Store();