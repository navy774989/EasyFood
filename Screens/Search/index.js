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
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import SearchBar from 'react-native-material-design-searchbar';
import SearchStore from '../../Mobx/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default class Search extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      select:false
    };
  }
  render() {
    return (
      <View style={styles.container}>

 <TouchableWithoutFeedback onPress={() => {
   this.props.navigator.push({
     screen:'SearchPage',
     animationType: 'fade',
   });
   SearchStore.setWord();
 }}>
      <View style={{width:Width - 30, borderRadius:12, alignSelf:'center', Height:10 / 812 * Height, backgroundColor:'#F5F5F5', flexDirection:'row', alignItems:'center', margin:5}}>
      <Ionicons name='ios-search-outline' size={25}  style={{padding:25 * 0.48, backgroundColor:'#00000000', color:'#737373', marginLeft:3}} />
      <Text style={{color:'#bdbdbd', fontSize:50 * 0.4, marginLeft:3}}>Search</Text>
      </View>
      </TouchableWithoutFeedback>
      <ScrollView>
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginBottom:20}}>
      <TouchableOpacity onPress={() => {
        this.props.navigator.push({
          screen:'SearchPage',
          animationType: 'fade',
        });
        SearchStore.setWord('Taiwanese');
      }}>
        <Image source={require('../../backgroundImage/brooke-lark-194252.jpg')} style={{width:Width * 0.45, height:Width * 0.35, marginTop:25, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor:'#00000000', color:'white', fontSize:25, fontFamily:'PingFangTC-Medium'}}>Taiwanese</Text>
        </Image>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              screen:'SearchPage',
              animationType: 'fade',
            });
            SearchStore.setWord('Health');
          }}>
         <Image source={require('../../backgroundImage/ali-inay-9858.jpg')} style={{width:Width * 0.45, height:Width * 0.35, marginTop:25, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor:'#00000000', color:'white', fontSize:25, fontFamily:'PingFangTC-Medium'}}>Health</Text>
        </Image>
         </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              screen:'SearchPage',
              animationType: 'fade',
            });
            SearchStore.setWord('下午茶');
          }}>
          <Image source={require('../../backgroundImage/rab-fyfe-68872.jpg')} style={{width:Width * 0.45, height:Width * 0.35, marginTop:25, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor:'#00000000', color:'white', fontSize:25, fontFamily:'PingFangTC-Medium'}}>下午茶</Text>
        </Image>
         </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              screen:'SearchPage',
              animationType: 'fade',
            });
            SearchStore.setWord('休息');
          }}>
          <Image source={require('../../backgroundImage/restaurant.jpg')} style={{width:Width * 0.45, height:Width * 0.35, marginTop:25, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor:'#00000000', color:'white', fontSize:25, fontFamily:'PingFangTC-Medium'}}>休息</Text>
        </Image>
         </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              screen:'SearchPage',
              animationType: 'fade',
            });
            SearchStore.setWord('steak');
          }}>
           <Image source={require('../../backgroundImage/alex-munsell-18753.jpg')} style={{width:Width * 0.45, height:Width * 0.35, marginTop:25, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor:'#00000000', color:'white', fontSize:25, fontFamily:'PingFangTC-Medium'}}>Steak</Text>
        </Image>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:50,
    justifyContent:'center'
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