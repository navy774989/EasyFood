import React, { Component } from 'react';
import { View, Image, Dimensions, TouchableHighlight, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import IntroductionStore from '../../Mobx/Introduction';
import Icon from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react';
import StarRating from 'react-native-star-rating';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
@observer
export default class StoreList extends Component {
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarHidden: true,
    statusBarHidden: true,
    statusBarHideWithNavBar: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  _renderMoney(){
    return   <Icon name="logo-usd" size={20} color="#e69137" />;
  }
  _count(time){
    for(var i=0;i<=time;i++){
      return this._renderMoney();
    }
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.4} onPress={() => {
        this.props.navigator.push({
          screen:'StoreDetail',
          passProps: {StoreData:this.props.StoreData,type:'Store',StoreId:this.props.StoreId,rank:this.props.rank},
        });
      }}>
        <View style={{flex:1, flexDirection:'row', }}>
          <View style={{height:Width * 0.16, width:Width * 0.16, borderColor:'#8e8e8e', borderRadius:Width * 0.032, borderWidth:0.5, margin:15 }}>
          <Image source={{uri:this.props.image}} style={{height:Width * 0.16, width:Width * 0.16, borderColor:'#8e8e8e', borderRadius:Width * 0.032,}}></Image>
            <Text style={{backgroundColor:'#00000000'}}>{IntroductionStore.token}
            </Text>
          </View>
<View style={{flex:1, justifyContent:'center', borderBottomColor:'#8e8e8e', borderBottomWidth:1, marginLeft:0, margin:8, marginRight:15}}>
          <View style={{flexDirection:'column'}}>
            <Text style={{marginBottom:10, fontFamily:"PingFangSC-Regular"}}>{this.props.title}</Text>
          <View style={{width:Width * 0.187, }}>
            <StarRating
              disabled={false}
              maxStars={5}
              iconSet={'Ionicons'}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              rating={this.props.starCount}
              starColor={'#e69137'}
              starSize={15}
              disabled={true}
            />
          </View>
        </View>
        <View style={{ alignSelf:'center', position:'absolute'}}>
        {
        this._count(this.props.price)

        }
        
        </View>
        <View style={{position:'absolute', right:10, flexDirection:'column'}}>
          <Text style={{margin:10, fontFamily:"PingFangSC-Regular",textAlign:'right'}}>{this.props.address}</Text>
          {this.props.discount>0?
          <Text style={{textAlign:'right',backgroundColor:'#FF9797'}}>{`目前優惠:${this.props.discount}%`}</Text>:null}
          <Text style={{marginBottom:10, fontFamily:"PingFangSC-Regular", color: "#7e7e7e",textAlign:'right'}}>{`大約${this.props.km>=0? this.props.km:1.8}km`}</Text>
        </View>
        </View>
</View>
      </TouchableOpacity>
    );
  }
}