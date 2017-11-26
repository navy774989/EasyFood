import React, { Component } from 'react';
import { View,Image,Text,Dimensions } from 'react-native';
import ShopCard from './ShopCard';

const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;
export class Content extends Component{
  render(){
    return(
      <View>
      
      <View style={{width:Width,height:40,backgroundColor:'#f5f5f5',justifyContent:'center'}}>
      <Text style={{textAlign:'center'}}>商店名稱</Text>

      </View>

        </View>
    );
  }
}