import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import FreshStore from '../../Mobx/Fresh';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export class Model extends Component{
    static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  render(){
    return(
            <View style={{flex:1, alignItems:'center', marginTop:50}}>
         <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold', alignSelf:'flex-start'}}>模式設定</Text>
      <View>
      <TouchableOpacity onPress={()=>{
        FreshStore.changeModel('預約外帶');
        this.props.navigator.pop({

        });
      }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="food" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`預約外帶：\n 餐點在兩小時後製作完成，需來店取餐。`}</Text>
            </View>
      <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
      </TouchableOpacity>
     </View>
           <View>
           <TouchableOpacity onPress={()=>{
            
             this.props.navigator.push({
               screen:'Qrcode'
             });
           }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="qrcode-scan" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`店內消費：\n 對準餐桌上的qrcode，隨時點餐。`}</Text>

            </View>
      <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
      </TouchableOpacity>
     </View>
           <View>
           <TouchableOpacity onPress={()=>{
             this.props.navigator.push({
               screen:'Delivery'
             });
           }}>
      <View style={{marginTop:30, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <View style={{height:50, width:50, backgroundColor:'#f8f8f8', justifyContent:'center', alignItems:'center', borderRadius:35, borderWidth:1, borderColor:'#e69137'}}>
      <Icon2 style={{}} name="truck-delivery" size={30} color="#e69137" />
      </View>
       <Text style={{	fontSize: 17,
color:'#8e8e8e',
	letterSpacing: 0.22, width:Width * 0.4, marginHorizontal:20}}>{`外送：\n 選定位置到府外送。`}</Text>

            </View>
         <View style={{width:Width - 30, height:1, backgroundColor:'#8e8e8e', marginTop:30}}/>
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}