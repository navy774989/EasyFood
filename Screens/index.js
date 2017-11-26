import { Navigation } from 'react-native-navigation';
import Fresh from './Fresh';
import Setting from './Setting';
import Intrduction from './Introduction';
import StoreDetail from './StoreDetail';
import Order from './Order';
import Search from './Search';
import SearchPage from './Search/SearchPage';
import { Login } from './Login';
import { BasicPage } from './Login/BasicPage';
import { PayWaySetting } from './Login/PayWaySetting';
import { ShopCart } from './ShopCart';
import { MapDetail } from './Introduction/MapDetail';
import { Production } from './StoreDetail/Production';
import { Model } from './Model';
import { Qrcode } from './Model/Qrcode';
import { Delivery } from './Model/Delivery';
import Ar from './AR';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Fresh', () => Fresh);
  Navigation.registerComponent('Setting', () => Setting);
  Navigation.registerComponent('Intrduction', () => Intrduction);
  Navigation.registerComponent('StoreDetail', () => StoreDetail);
  Navigation.registerComponent('Order', () => Order);
  Navigation.registerComponent('Search', () => Search);
  Navigation.registerComponent('SearchPage', () => SearchPage);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('BasicPage', () => BasicPage);
  Navigation.registerComponent('PayWaySetting', () => PayWaySetting);
  Navigation.registerComponent('ShopCart', () => ShopCart);
  Navigation.registerComponent('MapDetail', () => MapDetail);
  Navigation.registerComponent('Production', () => Production);
  Navigation.registerComponent('Model', () => Model);
  Navigation.registerComponent('Qrcode', () => Qrcode);
  Navigation.registerComponent('Delivery', () => Delivery);
  Navigation.registerComponent('Ar', () => Ar);
}