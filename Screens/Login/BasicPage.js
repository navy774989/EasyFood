import React, { Component } from 'react';
import { View, Text, Switch, Dimensions, TouchableOpacity } from 'react-native';
import OneSignal from 'react-native-onesignal'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import FreshStore from '../../Mobx/Fresh';
import { Navigation } from 'react-native-navigation';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


export class BasicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification:false,
      gps:false,
      camera:false
    };
  }
  notificationOnChange() {
    if (this.state.notification == true) {
      OneSignal.clearOneSignalNotifications();
      this.setState({
        notification:!this.state.notification
      });}
    else {
      OneSignal.registerForPushNotifications();
    }
  }
  componentWillMount() {
    OneSignal.registerForPushNotifications();
    OneSignal.promptLocation();
    OneSignal.getPermissionSubscriptionState((status) => {
      console.log(status);
    });
    setInterval(() => {
      OneSignal.getPermissionSubscriptionState((status) => {
        this.setState({
          notification:status.notificationsEnabled,
        });
      });
    }, 500);
  }
  componentDidMount() {
    clearInterval(this.interval);
  }
  gpsOnChange() {
    this.setState({
      gps:!this.state.gps
    });
  }
  cameraOnChange() {
    this.setState({
      camera:!this.state.camera
    });
  }
  render() {
    return (
        <View style={{flex:1, alignItems:'center', marginTop:50}}>
         <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold', alignSelf:'flex-start'}}>了解點餐模式</Text>
            <Text>點選任一模式進入主畫面</Text>
      <View>
      <TouchableOpacity onPress={() => {
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: '新鮮',
              screen: 'Fresh', // this is a registered name for a screen
              icon: require('../../Image/New.png'),
              title: 'Fresh'
            },

            {
              label: '搜尋',
              screen: 'Search',
              icon: require('../../Image/Search.png'),
              title: 'Search'
            },
            {
              label: '購物車',
              screen: 'ShopCart',
              icon: require('../../Image/Order.png'),
              title: 'Order'
            },
            {
              label: '訂單',
              screen: 'Order',
              icon: require('../../Image/applicationform.png'),
              title: 'Order'
            },
            {
              label: '設定',
              screen: 'Setting',
              icon: require('../../Image/Settings.png'),
              title: 'Setting'
            },
          ],
          tabsStyle: {
            tabBarHidden: false, // make the tab bar hidden
    // change the color of the tab icons and text (also unselected)
            tabBarSelectedButtonColor: '#e69137', // change the color of the selected tab icon and text (only selected)// change the background color of the tab bar
            tabBarTranslucent: true, // change the translucent of the tab bar to false
            tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family// iOS only. change the color of tab text
            tabBarSelectedLabelColor: '#e69137', // iOS only. change the color of the selected tab text
            forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
          }
        });

      }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="food" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`預約外帶：\n 餐點在兩小時後製作完成，需來店取餐。`}</Text>
            </View>
      <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
      </TouchableOpacity>
     </View>
           <View>
           <TouchableOpacity onPress={() => {
             Navigation.startTabBasedApp({
               tabs: [
                 {
                   label: '新鮮',
                   screen: 'Fresh', // this is a registered name for a screen
                   icon: require('../../Image/New.png'),
                   title: 'Fresh'
                 },

                 {
                   label: '搜尋',
                   screen: 'Search',
                   icon: require('../../Image/Search.png'),
                   title: 'Search'
                 },
                 {
                   label: '購物車',
                   screen: 'ShopCart',
                   icon: require('../../Image/Order.png'),
                   title: 'Order'
                 },
                 {
                   label: '訂單',
                   screen: 'Order',
                   icon: require('../../Image/applicationform.png'),
                   title: 'Order'
                 },
                 {
                   label: '設定',
                   screen: 'Setting',
                   icon: require('../../Image/Settings.png'),
                   title: 'Setting'
                 },
               ],
               tabsStyle: {
                 tabBarHidden: false, // make the tab bar hidden
    // change the color of the tab icons and text (also unselected)
                 tabBarSelectedButtonColor: '#e69137', // change the color of the selected tab icon and text (only selected)// change the background color of the tab bar
                 tabBarTranslucent: true, // change the translucent of the tab bar to false
                 tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family// iOS only. change the color of tab text
                 tabBarSelectedLabelColor: '#e69137', // iOS only. change the color of the selected tab text
                 forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
               }
             });
           }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="qrcode-scan" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`店內消費：\n 對準餐桌上的qrcode，隨時點餐。`}</Text>

            </View>
      <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
      </TouchableOpacity>
     </View>
           <View>
           <TouchableOpacity onPress={() => {
             Navigation.startTabBasedApp({
               tabs: [
                 {
                   label: '新鮮',
                   screen: 'Fresh', // this is a registered name for a screen
                   icon: require('../../Image/New.png'),
                   title: 'Fresh'
                 },

                 {
                   label: '搜尋',
                   screen: 'Search',
                   icon: require('../../Image/Search.png'),
                   title: 'Search'
                 },
                 {
                   label: '購物車',
                   screen: 'ShopCart',
                   icon: require('../../Image/Order.png'),
                   title: 'Order'
                 },
                 {
                   label: '訂單',
                   screen: 'Order',
                   icon: require('../../Image/applicationform.png'),
                   title: 'Order'
                 },
                 {
                   label: '設定',
                   screen: 'Setting',
                   icon: require('../../Image/Settings.png'),
                   title: 'Setting'
                 },
               ],
               tabsStyle: {
                 tabBarHidden: false, // make the tab bar hidden
    // change the color of the tab icons and text (also unselected)
                 tabBarSelectedButtonColor: '#e69137', // change the color of the selected tab icon and text (only selected)// change the background color of the tab bar
                 tabBarTranslucent: true, // change the translucent of the tab bar to false
                 tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family// iOS only. change the color of tab text
                 tabBarSelectedLabelColor: '#e69137', // iOS only. change the color of the selected tab text
                 forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
               }
             });
           }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="truck-delivery" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`外送：\n 選定位置到府外送。`}</Text>

            </View>
         <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}