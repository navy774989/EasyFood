// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import FetchHelper from './utilities/fetchHelper';
import FetchHelperGoogle from './utilities/FetchApi';
import fetechHelperTest from './utilities/fetechHelperTest';

class Store {
 @observable OrderList = [];
 @observable StoreData={};
 @observable orderItem=[];
 @observable address='';
 @observable AddressAray=[];
 @observable OrderDetail={};
 @action getOrderList() {
   fetechHelperTest.Get('/Order')
   .then((res) => res.json())
   .then((res) => {
     this.OrderList = res;
     console.log(this.OrderList);
   })
    .catch((err) => {
      console.log(err);
    });
 }
 @action getOrderDetail(id) {
   fetechHelperTest.Get('/StoreDetail/' + id)
    .then((res) => res.json())
    .then((res) => {
      this.OrderDetail = res.store;
    })
    .catch((err) => {
      console.log(err);
    });
 }
 @action changeAddress(address) {
   this.address = address; 
   this.googleplaceapi();  
 }
  @action googleplaceapi() {
    FetchHelperGoogle.Get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + this.address + '&radius=500&key=AIzaSyB4xNSmyfKF29GhbYBel6TBCI4pGlzjY9g')
    .then((res) => res.json())
    .then((res) => {
      this.AddressAray = res.predictions;
    })
    .catch((err) => {
      console.log(err);
    });
  }
  @action getStoreDetail(id) {
    FetchHelper.Get('stores/' + id)
    .then((res) => res.json())
    .then((res) => {
      this.StoreData = res.store;
      console.log(this.StoreData);})
    .catch((err) => {
      console.log(err);
    });
  }
  @action getOrderItem(orderid) {
    fetechHelperTest.Get('/Order')
    .then((res) => res.json())
    .then((res) => {
      this.orderItem = res.Data[0].OrderItem;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
export default new Store();