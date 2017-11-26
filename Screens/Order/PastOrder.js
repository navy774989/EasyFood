import React, { Component } from 'react';
import { View, Text, Image, ImageBackground,Dimensions,TouchableOpacity } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export class PastOrder extends Component{
  render(){
    return(
   <TouchableOpacity style={{}}>
   <View style={{alignSelf:'center',flex:1,backgroundColor:'white',marginVertical:15,borderRadius:12,shadowColor: '#000000',opacity:0.9,overflow: 'hidden',borderColor:'#8e8e8e',borderWidth:0.7,width:Width-30,height:0.4*Height}} >
      <Image source={{uri:this.props.Image}} style={{height:0.15*Height,width:Width-30,justifyContent:'center',alignItems:'center'}} >
      <Text style={{backgroundColor:'#00000000',fontSize:20,color:'white',fontFamily:'PingFangTC-Medium'}}>
      {this.props.StoreName}</Text>
      </Image>
      <Text style={{marginTop:17/812*Height,marginLeft:20/812*Width,fontFamily:'PingFangSC-Regular'}}>
      {`訂單編號：${this.props.id}`}</Text>
      <Text style={{marginTop:17/812*Height,marginLeft:20/812*Width,fontFamily:'PingFangSC-Regular'}}>
      {`取餐日期：${this.props.date}`}</Text>
      <Text style={{marginTop:17/812*Height,marginLeft:20/812*Width,fontFamily:'PingFangSC-Regular'}}>
      {`取餐方式：${this.props.takeway}`}</Text>
       <Text style={{marginTop:17/812*Height,marginLeft:20/812*Width,fontFamily:'PingFangSC-Regular'}}>
       {`付費方式：${this.props.payway}`}</Text>
      <Text style={{marginTop:17/812*Height,marginLeft:20/812*Width,fontFamily:'PingFangSC-Regular'}}>
      {`總共金額：＄${this.props.price}`}</Text>
</View>
    </TouchableOpacity>
    );
  }
}