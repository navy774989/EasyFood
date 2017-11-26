import React, { Component } from 'react';
import { View, Text, Switch, Dimensions, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;
export class PayWaySetting extends Component{
  constructor(props){
    super(props);
    this.state={
      notification:false,
      gps:false
    };
  }
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true, 
  };
  notificationOnChange(){
    this.setState({
      notification:!this.state.notification
    });
  }
  render(){
    return(
      <View style={{flex:1,alignItems:'center',marginTop:50}}>
         <Text style={{textAlign:'left',marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535",marginBottom:5,fontFamily:'PingFangTC-Semibold',alignSelf:'flex-start'}}>通知設定</Text>
      <View>
      <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
      <View style={{height:50,width:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center',borderRadius:35,borderWidth:1,borderColor:'#e69137'}}>
      <Icon style={{}} name="ios-notifications-outline" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22,width:Width*0.4,marginHorizontal:20}}>開啟通知，取得最新消息！</Text>

            </View>
      <View style={{width:Width-30,height:1,backgroundColor:'#8e8e8e',marginTop:30}}/>
     </View>
           <View>
      <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
      <View style={{height:50,width:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center',borderRadius:35,borderWidth:1,borderColor:'#e69137'}}>
      <Icon2 style={{}} name="crosshairs-gps" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22,width:Width*0.4,marginHorizontal:20}}>開啟GPS，快速尋找店家。</Text>

            </View>
      <View style={{width:Width-30,height:1,backgroundColor:'#8e8e8e',marginTop:30}}/>
     </View>
           <View>
      <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
      <View style={{height:50,width:50,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center',borderRadius:35,borderWidth:1,borderColor:'#e69137'}}>
      <Icon3 style={{}} name="camera" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22,width:Width*0.4,marginHorizontal:20}}>開啟相機，與朋友分享。</Text>

            </View>
         <View style={{width:Width-30,height:1,backgroundColor:'#8e8e8e',marginTop:30}}/>
        </View>
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

      }} style={{marginBottom:50,position:'absolute',bottom:0}}>
      <View style={{backgroundColor:'#e69137', height:40, width:Width * 0.8, justifyContent:'center', alignItems:'center', borderRadius:6}}>
      <Text style={{color:'white',fontFamily:'PingFangSC-Regular',fontSize:18}}>開始使用</Text></View></TouchableOpacity>
      </View>
    );
  }
}