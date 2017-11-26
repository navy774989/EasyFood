/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import getDirections from 'react-native-google-maps-directions';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height; 
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
  handleGetDirections = () => {
    const data = {
      source: {
         latitude: 24.820736,
         longitude: 121.018508
       },
      destination: {
        latitude: 24.820863,
        longitude: 121.022489
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
  
    };
    getDirections(data);
  }
  componentWillMount() {
    console.log(this.props.StoreData);
  }
  render() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    const Week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <View style={{flex:1}}>
        <View style={{flexDirection:'row', marginTop:90, alignItems:'center'}}>
          <Image source={{uri:this.props.StoreData && this.props.StoreData.Image}} style={{width:0.3 * Width, height:0.3 * Width, borderColor:'#8e8e8e', borderWidth:1, borderRadius:18, marginLeft:15}}>
          
          </Image>
          <View style={{flexDirection:'column', marginLeft:25, flex:1}}>
            <Text style={{fontSize:20, marginBottom:10}}>{this.props.StoreData.title}</Text>
            <Text style={{color:'#7e7e7e', marginBottom:10, marginRight:5}}>{  this.props.StoreData.Address.whole}</Text>
            <Text style={{marginBottom:10}}>{`電話：${this.props.StoreData.Phone}`}</Text>
            <View style={{flexDirection:'column', }}>
        
        {
          this.props.StoreData.OpenTime[Week[day]].map((res, index) => {
            if (index == 0 && hour <= 12) {
              return (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name="ios-clock-outline" size={30} color="#e69137" />
                <Text style={{marginLeft:10}}>{`${res.open} 至 ${res.close}`}</Text>
              </View>
          );}
            else if (index == 1 && hour > 12) {
              return (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name="ios-clock-outline" size={30} color="#e69137" />
                <Text style={{marginLeft:10}}>{`${res.open} 至${res.close}`}</Text>
              </View>
          );
            }
            else {
              null;
            }
          })
        }
            </View>
          </View>
        </View>
        <View style={{width:0.3 * Width, marginLeft:15, }}>
          <StarRating
              disabled={false}
              maxStars={5}
              iconSet={'Ionicons'}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              rating={this.props.StoreData.Evaluation}
              starColor={'#e69137'}
              starSize={25}
              disabled={true}
            />
          <Text style={{marginLeft:20}}>{`評價：${this.props.StoreData.Evaluation}`}</Text>
        </View>
                    <TouchableOpacity onPress={() => {
                      this.handleGetDirections();
                    }}>
                    <View style={{backgroundColor:'#df5b5f', width:80, height:30, position:'absolute', right:50, bottom:5, borderRadius:6, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', backgroundColor:'#00000000'}}>位置</Text>
                    </View>
                    </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


