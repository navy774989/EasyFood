import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import OrderStore from '../../Mobx/Order';
import FreshStore from '../../Mobx/Fresh';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
@observer
export class Delivery extends Component {
  render() {
    return (
      <View style={{flex:1, marginLeft:30}}>
      <Text style={{marginBottom:30, marginTop:20,	fontFamily: "PingFangTC-Semibold",
	fontSize: 14,
	fontWeight: "600",
	color: "#50585d"}}>請輸入外送的地點</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
            <TextInput
        style={{height: 40, width:Width * 0.7, borderColor: 'gray', borderWidth: 1, fontFamily: "PingFangTC-Semibold",
	fontSize: 14,
	fontWeight: "600",
	color: "#50585d"}}
        onChangeText={(text) => OrderStore.changeAddress(text)}
        value={OrderStore.address}
      />
      <TouchableOpacity onPress={() => {
        FreshStore.changeModel('外送');
        this.props.navigator.popToRoot({
          animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
        });
      }}>
      <View style={{alignItems:'center', justifyContent:'center', marginLeft:10, backgroundColor:'#e69137', height: 40, width:60, borderRadius:5}}>
      <Text>送出</Text>
      </View>
      </TouchableOpacity>
      </View>
      <ScrollView style={{marginTop:10}}>
      {
        OrderStore.AddressAray.map((res) => {
          return <TouchableOpacity style={{}} onPress={() => {
            OrderStore.changeAddress(res.description);
          }}><Text style={{fontFamily: "PingFangTC-Semibold",
	fontSize: 20,
	fontWeight: "600",
	color: "#50585d"}}>{res.description}</Text></TouchableOpacity>;
        })
      }
      </ScrollView>
      </View>
    );
  }
}