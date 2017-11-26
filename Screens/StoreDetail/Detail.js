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
    Dimensions
} from 'react-native';
const Height =Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
export default class Detail extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarNoBorder: true,
    navBarBackgroundColor: 'white',
  };
  _renderTitle(){
    if(this.props.type=='Order'){
      return '您的訂單';
    }
    else if(this.props.type=='Store'){
      return '精選菜單';
    }
    else{
      return '';
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{width:Width-30,height:1,backgroundColor:'#cbcbcb',alignSelf:'center',}}/>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{margin:15,fontFamily:'PingFangTC-Medium',fontSize:20}}>
    {this._renderTitle()}</Text>
    <Text style={{margin:15,fontFamily:'PingFangTC-Medium',fontSize:20,textAlign:'right',color:this.props.rank=='優'?'#FF0000':'black'}}>{`評鑑等級:${this.props.rank?this.props.rank:'無'}`}</Text>
    </View>
      </View>
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
