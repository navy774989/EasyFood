import React, { Component } from 'react';
import { View, Image, Dimensions, TouchableHighlight,Text } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default class Detail extends Component{
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarHidden: true,
    statusBarHidden: true,
    statusBarHideWithNavBar: true,
  };
  render(){
    return(
      <View style={{marginTop:25}}>
      <Text style={{margin:15,	fontFamily: "PingFangSC-Regular",
	fontSize: 16,
	lineHeight: 26.0,
	letterSpacing: 0.44,
	color: "#353535"}}>
      {
        `   ${this.props.text}
        `
      }
      </Text>
      </View>

    );
  }
}