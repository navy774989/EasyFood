import React, { Component } from 'react';
import { View, Text, TouchableOpacity,  Linking, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FreshStore from '../../Mobx/Fresh';
export class Qrcode extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
  };
  onSuccess(e) {
    FreshStore.changeModel('店內消費');
   
    this.props.navigator.popToRoot({
      animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
    });
    Alert.alert('目前桌號', "01");
  }
  render() {
    
    return (
      <View style={{flex:1}}>
       <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
      />
      <Text style={{textAlign:'center', marginBottom:30,	fontFamily: "PingFangTC-Semibold",
	fontSize: 14,
	fontWeight: "600",
	color: "#50585d"}}>請掃描桌面上的qrcode</Text>
      </View>
    );
  }
}