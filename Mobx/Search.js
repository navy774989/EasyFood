// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import FetchHelper from './utilities/fetchHelper';
import RNAccountKit from 'react-native-facebook-account-kit';
import { Login } from './../Screens/Login';

class Store {
 @observable Word = '';
 @action setWord(word) {
   this.Word = word;
 }
}
export default new Store();