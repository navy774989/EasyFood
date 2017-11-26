import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default class Header extends Component {
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarHidden: true,
    statusBarHidden: true,
    statusBarHideWithNavBar: true,
  };
  render() {
    return (
      <ImageBackground source={this.props.image} style={{resizeMode: 'cover', width:Width, height:Height * 0.5, opacity:0.9, justifyContent:'center'}}>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, fontSize:40, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color}, this.props.style]}>{this.props.title}</Text>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, bottom:10, fontSize:20, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color, }, this.props.style]}>{this.props.subtitle}</Text>
      </ImageBackground>

    );
  }
}