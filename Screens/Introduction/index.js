import React, { Component } from 'react';
import { View, Image, LayoutAnimation, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import StoreList from './StoreList';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';
import IntroductionStore from '../../Mobx/Introduction';
import Detail from './Detail';
@observer
export default class Intrduction extends Component {
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarHidden: true,
    statusBarHidden: true,
    statusBarHideWithNavBar: true,
  };
  componentWillMount() {
    IntroductionStore.getStoreList();
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <View style={{backgroundColor:'white'}}>

      <ScrollView>

        <Header navigator={this.props.navigator} 
                color={this.props.color} 
                style={this.props.style} 
                title={this.props.title} 
                subtitle={this.props.subtitle} 
                image={this.props.image}/>

        <Detail text={this.props.detail}/>
        {
          
          IntroductionStore.StoreList.map((res) => {
            console.log(res);
            if (res.Type == this.props.type) {
              return <StoreList 
            title={res.title} 
            image={res.Image}
            address={res.Address && res.Address.Country} 
            navigator={this.props.navigator}
            StoreData={res}
            price={res.Price}
            rank={res.rank}
            starCount={res.Evaluation}
            discount={res.discount}
            km={res.km}
            StoreId={res.id}/>
            ;
            }})
        }
     
      </ScrollView>
      <TouchableOpacity onPress={() => {
        this.props.navigator.push({
          screen:'MapDetail',
          passProps:{
            type:this.props.type,
          }
        });
      }} activeOpacity={0.8} style={{position:'absolute', right:20, bottom:40}}>
      <Icon name="ios-compass" size={50} color="#e69137" style={{backgroundColor:'#00000000', borderColor:'black'}} />
      </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {
            this.props.navigator.dismissModal({

            });
          }} style={{position:'absolute', right:20, top:40, }}>
      <Icon name="md-close-circle" size={50} color="#8e8e8e" style={{backgroundColor:'#00000000', borderColor:'black'}} />
      </TouchableOpacity>
      
      
      </View>
    );
  }
}