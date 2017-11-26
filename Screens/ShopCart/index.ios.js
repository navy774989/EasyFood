import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, ScrollView, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Content } from './Content';
import OneSignal from 'react-native-onesignal';
import shopCartStore from '../../Mobx/ShopCart';
import ShopCard from './ShopCard';

if (Platform.OS == 'ios') {
  global.PaymentRequest = require('react-native-payments').PaymentRequest;
}

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const METHOD_DATA = [{
  supportedMethods: ['apple-pay'],
  data: {
    merchantIdentifier: 'merchant.goeater.today.GoeaterStore',
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    countryCode: 'US',
    currencyCode: 'CHF'
  }
}];
const METHOD_DATA_Android = [{
  supportedMethods: ['android-pay'],
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    currencyCode: 'USD',
    environment: 'TEST', // defaults to production
    paymentMethodTokenizationParameters: {
      tokenizationType: 'NETWORK_TOKEN',
      parameters: {
        publicKey: 'your-pubic-key'
      }
    }
  }
}];
const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: { currency: 'CHF', value: '1.00' }
    }
  ],
  total: {
    label: '商品總價',
    amount: { currency: 'CHF', value: '1.00' }
  }
};
const paymentDetails = {  
  total: {  
    label: 'Total',  
    amount: {  
      currency: 'USD',  
      value: '0',  
    },  
  },  
};
const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);

export class ShopCart extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  componentWillMount() {
    OneSignal.configure();
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.addEventListener('received', this.onReceived.bind(this));
  }
  onIds(device) {
    console.log('Device info: ', device);
    shopCartStore.settoken(device.userId);
  }
  onReceived(notification) {
    console.log("Notification received: ", notification);
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{marginTop:50}}>
       <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold'}}>Payment</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{marginLeft:15, marginBottom:10, color:'#8e8e8e', fontFamily:'PingFangTC-Regular'}}>以下為您的商品，請確認後付款！</Text>
                        <Text style={{marginLeft:15, marginBottom:10, color:'#e69137', fontFamily:'PingFangTC-Regular', fontSize:20, borderColor:'#e69137', borderWidth:1, padding:4, borderRadius:8}}>total：130</Text>
                        </View>
                        <View style={{height:1, width:Width, backgroundColor:'#8e8e8e'}}></View>
            <Content/>
            <ScrollView >
            <ShopCard Title={'雞柳漢堡'} Price={'70'}
        Description={'X2'} Image={'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=666&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}/>
                 <ShopCard Title={'薯條'} Price={'60'}
        Description={'X2'} Image={'https://images.unsplash.com/photo-1463183665146-ce2ed31df6b0?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'} />
                 <ShopCard Title={'紅茶'} Image={'https://images.unsplash.com/photo-1499531011814-14b20e46c785?auto=format&fit=crop&w=1363&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'} Price={'30'}
        Description={'X2'} />
        <View style={{height:250}}></View>
        </ScrollView></View>
      <View style={{flexDirection:'row', justifyContent:'center', alignContent:'flex-end', position:'absolute', bottom:0, left:0, right:0, borderTopColor:'#8e8e8e', borderTopWidth:1,backgroundColor:'white'}}>
      <View style={{width:120, justifyContent:'center', margin:20}}>
      <Icon.Button color={'white'} name="apple" backgroundColor="black" borderRadius={6} style={{justifyContent:'center', alignItems:'center', }} onPress={() => {
        paymentRequest.show().then((paymentResponse) => {
          const { paymentToken } = paymentResponse.details;
          console.log(paymentResponse);
          return processPayment(true);
          
        })
        .catch((err) => {
          console.log(err);
        });
      }}>
    <Text style={{fontFamily: 'Arial', fontSize: 15, color:'white',  }}>Pay</Text>
  </Icon.Button>
  
  </View>
  <View style={{width:120, justifyContent:'center', margin:20}}>
      <MaterialCommunityIcons.Button 
      color={'white'} size={15} name="square-inc-cash" 
      backgroundColor="green" borderRadius={6} 
      style={{justifyContent:'center', alignItems:'center', borderColor:'green', borderWidth:1}} 
      onPress={() => {
        Alert.alert('現金交易', '確定使用現金交易？', [
    {text: 'Cancel', onPress: () => console.log('OK Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => shopCartStore.sentorder()},
        ]);
      }}>
    <Text style={{fontFamily: 'Arial', fontSize: 15, color:'white',  }}>Cash</Text>
  </MaterialCommunityIcons.Button>
  </View>
  </View>
      </View>
    );
  }
}