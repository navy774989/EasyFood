import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, ScrollView, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Content } from './Content';
global.PaymentRequest = require('react-native-payments').PaymentRequest;
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const METHOD_DATA = [{
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

const paymentDetails = {  
  total: {  
    label: 'Total',  
    amount: {  
      currency: 'USD',  
      value: '0',  
    },  
  },  
};
const paymentRequest = new PaymentRequest(METHOD_DATA, paymentDetails);
export class ShopCart extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView style={{marginTop:50}}>
       <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold'}}>Payment</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{marginLeft:15, marginBottom:10, color:'#8e8e8e', fontFamily:'PingFangTC-Regular'}}>以下為您的商品，請確認後付款！</Text>
                        <Text style={{marginLeft:15, marginBottom:10, color:'#e69137', fontFamily:'PingFangTC-Regular', fontSize:20, borderColor:'#e69137', borderWidth:1, padding:4, borderRadius:8}}>total：1339</Text>
                        </View>
                        <View style={{height:1, width:Width, backgroundColor:'#8e8e8e'}}></View>
            <Content/>

      <View style={{marginBottom:40}}></View></ScrollView>
      <View style={{flexDirection:'row', justifyContent:'center', alignContent:'flex-end', position:'absolute', bottom:10, left:0, right:0, borderTopColor:'#8e8e8e', borderTopWidth:1}}>
      <View style={{width:120, justifyContent:'center', margin:20}}>
      <Icon.Button color={'white'} name="apple" backgroundColor="black" borderRadius={6} style={{justifyContent:'center', alignItems:'center', }} onPress={() => {
        paymentRequest.show().then((paymentResponse) => {
          const { paymentToken } = paymentResponse.details;
          return fetch('...', {
            method: 'POST',
            body: {
              paymentToken
            }
          });
          
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
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
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