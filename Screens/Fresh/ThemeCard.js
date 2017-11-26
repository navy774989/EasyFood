import React, { Component } from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import IntroductionStore from '../../Mobx/Introduction';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export class ThemeCard extends Component {
  render() {
    return (
    <TouchableOpacity 
    activeOpacity={0.6}
    onPress={() => {
      IntroductionStore.getStoreList(),
      this.props.navigator.showModal({
        screen: "Intrduction", // unique ID registered with Navigation.registerScreen
        passProps: {color:this.props.color, style:this.props.style, title:this.props.title, subtitle:this.props.subtitle, image:this.props.image,type:this.props.type,detail:this.props.detail}, // simple serializable object that will pass as props to the modal (optional)
      });
    }}>
      <Image source={this.props.image} style={{alignSelf:'center', height:0.6 * Height, width:Width - 30, flex:1, backgroundColor:'black', marginVertical:15, borderRadius:12, shadowColor: '#000000', opacity:0.9, justifyContent:'center', }}>
      <View style={{ height:0.6 * Height, width:Width - 30,backgroundColor:'white',opacity:0.25,position:'absolute' }}>

</View>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, fontSize:40, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color}, this.props.style]}>{this.props.title}</Text>
      <Text style={[{backgroundColor:'#00000000', position:'absolute', left:10, bottom:10, fontSize:20, fontFamily:'PingFangTC-Semibold', fontWeight:'bold', color: this.props.color, }, this.props.style]}>{this.props.subtitle}</Text>
      </Image>

    </TouchableOpacity>
    );
  }
}