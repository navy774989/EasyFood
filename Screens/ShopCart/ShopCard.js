/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Swipeout from 'react-native-swipeout';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
var swipeoutBtns = [
  {
    text: 'Delete'
  }
];
export default class ShopCard extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarNoBorder: true,
    navBarBackgroundColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      Ar:false,
    };
  }
  _showAr() {
    if (this.state.Ar == false) {
      return (

        <View style={{ width:Width * 0.18, height:Width * 0.10, backgroundColor:'#d3d3d3', justifyContent:'center', position:'absolute', right:15, borderRadius:8, alignSelf:'center'}}>
        <Text style={{color:'white', textAlign:'center'}}>Ar</Text>
        </View>
      );
    }
    else if (this.state.Ar == true) {
      return (
        <TouchableOpacity style={{ width:Width * 0.18, height:Width * 0.10, backgroundColor:'#e69137', justifyContent:'center', position:'absolute', right:15, borderRadius:8, alignSelf:'center'}}>
        <View >
        <Text style={{color:'white', textAlign:'center'}}>Ar</Text>
        </View>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <Swipeout right={swipeoutBtns} style={{backgroundColor:'white'}}>
      <View style={{height:140}}>
      <View style={[styles.container, {flexDirection:'row', margin:15, borderColor:'#8e8e8e'}]}>
      <Image source={{uri:this.props.Image}} style={{resizeMode:'cover', height:Width * 0.25, width:Width * 0.25, borderRadius:12}}></Image>
      <View style={{flexDirection:'column', justifyContent:'space-around', marginLeft:20}}>
      <Text style={{fontSize:20, fontFamily:'PingFangSC-Regular', letterSpacing: 0.44, }}>{this.props.Title}</Text>
      <Text style={{color:'#8e8e8e', width:Width * 0.38}}>{this.props.Description}</Text>
      <Text style={{color:'#cc3c22'}}>{`價格：＄${this.props.Price}`}</Text>
      </View>
      {
        this._showAr()
      }
      </View>
           <View style={{width:Width - 30, height:1, backgroundColor:'#cbcbcb', alignSelf:'center', }}/>
           </View>
        </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
