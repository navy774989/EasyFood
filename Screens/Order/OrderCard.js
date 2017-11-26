import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import OrderStore from '../../Mobx/Order';
export class OrderCard extends Component {
  componentDidMount() {
    console.log(this.props.StoreId);
    OrderStore.getStoreDetail('59e6ca195126a4225233640a');
  //this.props.id 要補上
  }
  componentWillMount() {
    OrderStore.getOrderDetail(this.props.id);
  }
  render() {
    return (
  
   <View style={{alignSelf:'center', flex:1, backgroundColor:'white', marginVertical:15, borderRadius:12, shadowColor: '#000000', opacity:0.9, overflow: 'hidden', borderColor:'#8e8e8e', borderWidth:0.7, width:Width - 30, height:325}} >
      <Image source={{uri:this.props.Image}} style={{height:0.15 * Height, width:Width - 30, justifyContent:'center', alignItems:'center'}} >
      <Text style={{backgroundColor:'#00000000', fontSize:20, color:'white', fontFamily:'PingFangTC-Medium'}}>
      {this.props.StoreName}</Text>
      </Image>
      <Text style={{marginTop:17 / 812 * Height, marginLeft:20 / 812 * Width, fontFamily:'PingFangSC-Regular'}}>
      {`訂單編號：59e6cd154884c724c40f3f5${this.props.id}`}</Text>
      <Text style={{marginTop:17 / 812 * Height, marginLeft:20 / 812 * Width, fontFamily:'PingFangSC-Regular'}}>
      {`訂單日期：${this.props.date}`}</Text>
      <Text style={{marginTop:17 / 812 * Height, marginLeft:20 / 812 * Width, fontFamily:'PingFangSC-Regular'}}>
      {`取餐方式：${this.props.takeway}`}</Text>
       <Text style={{marginTop:17 / 812 * Height, marginLeft:20 / 812 * Width, fontFamily:'PingFangSC-Regular'}}>
       {`付費方式：${this.props.payway}`}</Text>
      <Text style={{marginTop:17 / 812 * Height, marginLeft:20 / 812 * Width, fontFamily:'PingFangSC-Regular'}}>
      {`總共金額：＄${this.props.price}`}</Text>
</View>
  
    );
  }
}
/*  <TouchableOpacity onPress={() => {
     OrderStore.getOrderDetail(this.props.id);
     this.props.navigator.push({
       screen:'StoreDetail',
       passProps: {StoreData:OrderStore.OrderDetail, type:'Order', id:this.props.id},
     });
   }}>
      </TouchableOpacity>*/