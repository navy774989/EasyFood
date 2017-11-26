import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Navigator } from 'react-native';
import Swiper from 'react-native-swiper';
import { IntroCard } from './IntroCard';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import RNAccountKit from 'react-native-facebook-account-kit';
import { observer } from 'mobx-react';
import LoginStore from '../../Mobx/Login';
import { BasicPage } from './BasicPage';
@observer
export class Login extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true, 
  };
  constructor(props) {
    super(props);
  }
  loginPhone() {
    RNAccountKit.loginWithPhone()
  .then((token) => {
    if (!token) {
      console.log('Login cancelled');
    } else {
      LoginStore.checkLogin();
    }
  });
  }
  render() {
    if (LoginStore.Login == false) {
      return (
      <View style={{flex:1, }}>
           <Swiper autoplay >
        <View >
        <IntroCard image={require('../../backgroundImage/mobile-05.jpg')} title={'智能支付'} detail={'支援Apple Pay 與Android Pay。'}/>
        </View>
        <View >
           <IntroCard image={require('../../backgroundImage/rawpixel-com-323215.jpg')} title={'行動點餐'} detail={'擺脫過往的點餐模式，開會聊天再無打擾。'}/>
        </View>
        <View >
           <IntroCard image={require('../../backgroundImage/food-and-drink-3d-model-low-poly-max-obj-3ds-fbx-dae-mtl.jpg')} title={'3D全景AR'} detail={'與現實相同的尺寸，讓您『看見』食物。'}/>
        </View>
                <View >
           <IntroCard image={require('../../backgroundImage/AI.jpeg')} title={'私人AI'} detail={'你的喜好，由你決定！'}/>
        </View>
      </Swiper>
      <View style={{height:100, alignItems:'center', justifyContent:'flex-end'}}>
      <TouchableOpacity onPress={() => {
        this.loginPhone();
      }} style={{marginBottom:50}}>
      <View style={{backgroundColor:'#e69137', height:40, width:Width * 0.8, justifyContent:'center', alignItems:'center', borderRadius:6}}><Text style={{color:'white',fontFamily:'PingFangSC-Regular',fontSize:18}}>開始使用</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
    );
    } else {
      return <BasicPage navigator={this.props.navigator}/>;
    }
  }

}