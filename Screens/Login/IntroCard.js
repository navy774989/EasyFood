import React, { Component } from 'react';
import { View, Text, Image,Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;
export class IntroCard extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true, 
  };
  render() {
    return (
      <View style={{flex:1}}>
      <Image style={{resizeMode:'cover',height:Height*0.6,width:Width}} source={this.props.image}></Image>
      <Text style={{textAlign:'center',margin:15,fontFamily:'PingFangTC-Medium',color:'#353535',fontSize:20}}>{this.props.title}</Text>
      <Text  style={{textAlign:'center',fontFamily:'PingFangTC-Medium',color:'#353535',fontSize:16}}>{this.props.detail}</Text>
      </View>
    );
  }
}

