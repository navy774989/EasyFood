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
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
export default class Card extends Component {
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
    if (this.state.Ar == false && this.props.ar != true) {
      return (

        <View style={{ width:Width * 0.18, height:Width * 0.10, backgroundColor:'#d3d3d3', justifyContent:'center', position:'absolute', right:15, borderRadius:8, alignSelf:'center'}}>
        <Text style={{color:'white', textAlign:'center'}}>Ar</Text>
        </View>
      );
    }
    else if (this.props.ar == true) {
      return (
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            screen:"Ar"
          });
        }} style={{ width:Width * 0.18, height:Width * 0.10, backgroundColor:'#e69137', justifyContent:'center', position:'absolute', right:15, borderRadius:8, alignSelf:'center'}}>
        <View >
        <Text style={{color:'white', textAlign:'center'}}>Ar</Text>
        </View>
        </TouchableOpacity>
      );
    }
  }
  handelStore() {
    if (this.props.type = 'Store') {
      this.props.navigator.push({
        screen:'Production',
        title: '選購', 
        passProps: {id:this.props.id, image:this.props.image},
      });
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => {
        this.handelStore();
      }}>
      <View style={[styles.container, {flexDirection:'row', margin:15, borderColor:'#8e8e8e'}]}>
      <Image source={{uri:this.props.image}} style={{resizeMode:'cover', height:Width * 0.25, width:Width * 0.25, borderRadius:12}}></Image>
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
      </TouchableOpacity>
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
