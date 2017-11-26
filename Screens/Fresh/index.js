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
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { ThemeCard } from './ThemeCard';
import IntroductionStore from '../../Mobx/Introduction';
import { observer } from 'mobx-react';
import FreshStore from '../../Mobx/Fresh';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const StoreData = {
  "close": false,
  "Phone": "03-5626104",
  "Image": "https://i0.wp.com/farm4.static.flickr.com/3543/3417319239_6078cbb23b_o.jpg",
  "Type": "美式",
  "GPS": {
    "Longitude":120.9609792,
    "Laitude": 24.7948772
  },
  "km":8.2,
  "rank":"優",
  "discount":5,
  "Evaluation": 4.4,
  "Price": 1,
  "OpenTime": {
    "Sat": [
      {
        "open": "12:00",
        "close": "21:00"
      }
    ],
    "Fri": [
      {
        "open": "11:00",
        "close": "20:00"
      }
    ],
    "Thu": [
      {
        "open": "9:00",
        "close": "21:00"
      }
    ],
    "Wed": [
      {
        "open": "11:00",
        "close": "21:00"
      }
    ],
    "Tue": [
      {
        "open": "11:00",
        "close": "20:00"
      }
    ],
    "Mon": [
      {
        "open": "9:00",
        "close": "19:00"
      },
      {
        "open": "12:00",
        "close": "19:00"
      }
    ],
    "Sun": [
      {
        "open": "9:00",
        "close": "20:00"
      }
    ]
  },
  "id": 25,
  "title": "拉亞漢堡",
  "Address": {
    "City": "新竹市",
    "Country": "振興路",
    "whole": "新竹市振興路58號"
  }
};
@observer
export default class Fresh extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  componentWillMount() {
    FreshStore.getCategories();
  }
  render() {
    if (FreshStore.Model != '店內消費') {
      return (
      <View style={styles.container}>
        <ScrollView style={{flex:1, marginTop:30}} showsVerticalScrollIndicator={false}>
          <View style={{marginTop:20, backgroundColor:'#00000000'}}></View>

         
            <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold'}}>Fresh</Text>
            <Text style={{marginLeft:15, marginBottom:10, color:'#8e8e8e', fontFamily:'PingFangTC-Regular'}}>為生活加點驚奇！</Text>{
          FreshStore.Data && FreshStore.Data.map((res) => {
            return <ThemeCard 
            image={{uri:res.Image}} 
            title={res.Title} color={res.color} 
            typetitle={res.Detail} 
            subtitle={res.SubTitle} 
            type={res.FoodType} 
            detail={res.Detail}
            navigator={this.props.navigator}/>;
          })
}
          <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              screen:'Model'
            });
          }} style={{position:'absolute', top:40, right:30}}>
           <View style={{width:80, height:30, backgroundColor:'#e69137', justifyContent:'center', alignItems:'center', borderRadius:5}}>
           <Text style={{color:'white'}}>{`${FreshStore.Model}`}</Text>
           </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );}
    else {
      return (<View style={{flex:1}}>
                  <TouchableOpacity onPress={() => {
                    this.props.navigator.push({
                      screen:'Model'
                    });
                  }} style={{position:'absolute', top:40, right:30}}>
           <View style={{width:80, height:30, backgroundColor:'#e69137', justifyContent:'center', alignItems:'center', borderRadius:5}}>
           <Text style={{color:'white'}}>{`${FreshStore.Model}`}</Text>
           </View>
          </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop:100}} 
    activeOpacity={0.6}
    onPress={() => {
      this.props.navigator.push({
        screen:'StoreDetail',
        passProps:{
          StoreData:StoreData,
          type:'In',
          id:25
        }
        
      });
    }}>
      <Image source={{uri:"https://images.unsplash.com/photo-1485819665514-881a8f294f7a?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}} style={{alignSelf:'center', height:0.6 * Height, width:Width - 30, backgroundColor:'black', marginVertical:15, borderRadius:12, shadowColor: '#000000', opacity:0.9, justifyContent:'center' }}>
      <View style={{ height:0.6 * Height, width:Width - 30, backgroundColor:'white', opacity:0.25, position:'absolute' }}>

</View>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, fontSize:40, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color}, this.props.style]}>開始點餐</Text>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, bottom:10, fontSize:20, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color, }, this.props.style]}>使用apple pay 遠離收銀台！</Text>
      </Image>

    </TouchableOpacity>
    </View>
      );}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
});