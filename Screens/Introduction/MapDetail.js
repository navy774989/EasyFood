import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IntroductionStore from '../../Mobx/Introduction';
const Width = Dimensions.get('window').width;
const     store = {
  "_id": "59e6ca195126a4225233640a",
  "OwnerID": "59b6618051269b1048172cc4",
  "Title": "23123",
  "Address": {
    "City": "嘉義市",
    "Country": "東區",
    "whole": "嘉義市東區中正路547號",
    "_id": "59e6ca195126a42252336415"
  },
  "Description": "說明",
  "OrderStatus": "",
  "OpenTime": {
    "_id": "59e6ca195126a4225233640c",
    "Sat": [
      {
        "open": "1000",
        "close": "2300",
        "_id": "59e6ca195126a4225233640d"
      }
    ],
    "Fri": [
      {
        "open": "1000",
        "close": "2300",
        "_id": "59e6ca195126a4225233640e"
      }
    ],
    "Thu": [
      {
        "open": "1000",
        "close": "2300",
        "_id": "59e6ca195126a4225233640f"
      }
    ],
    "Wed": [
      {
        "open": "1000",
        "close": "2300",
        "_id": "59e6ca195126a42252336410"
      }
    ],
    "Tue": [
      {
        "open": "1000",
        "close": "2300",
        "_id": "59e6ca195126a42252336411"
      }
    ],
    "Mon": [
      {
        "open": "1000",
        "close": "1400",
        "_id": "59e6ca195126a42252336413"
      },
      {
        "open": "1700",
        "close": "2300",
        "_id": "59e6ca195126a42252336412"
      }
    ],
    "Sun": [
      {
        "open": "1100",
        "close": "2100",
        "_id": "59e6ca195126a42252336414"
      }
    ]
  },
  "GPS": {
    "Longitude": 120,
    "Laitude": 23,
    "_id": "59e6ca195126a4225233640b"
  },
  "CreateTime": "2017-10-18T03:27:21.287Z",
  "UpdateTime": "2017-10-18T03:27:21.287Z",
  "__v": 0,
  "isRemove": false,
  "Image": [],
  "Category": [
    "59e4a47100cd7a5d6f7c68e0"
  ],
  "Holiday": [],
  "Phone": []
};
const Height = Dimensions.get('window').height;
@observer
export class MapDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {     
        latitude:24.7994525,
        longitude: 120.9768319,
        latitudeDelta: 0.0012,
        longitudeDelta: 0.0011, }
    };
  }
  onRegionChange(region) {
    this.setState({
      region
    });
  }
  componentWillMount() {
    this.setState({
      region: {     
        latitude:24.7994525,
        longitude: 120.9768319,
        latitudeDelta: 0.0012,
        longitudeDelta: 0.0011, }
    });
  }
  _renderCard(res) {
    return (            
            <View style={{width:Width * 0.8, height:150, backgroundColor:'white', marginHorizontal:Width * 0.1}}>
            <View style={{flex:1}}>
                        <Image source={{uri:res.Image}} style={{height:150, width:0.2 * Width, position:'absolute'}}/>
                        <Text style={{textAlign:'center', marginTop:20, backgroundColor:'#00000000', position:'absolute', alignSelf:'center'}}>{res.title}</Text>
                            <Text style={{textAlign:'center', bottom:20, backgroundColor:'#00000000', position:'absolute', alignSelf:'center'}}>{res.Address.whole}</Text>
            <View style={{flex:1, alignItems:'flex-end', justifyContent:'space-around', marginRight:10}}>

                <TouchableOpacity               
                 onPress={() => {
                   this.props.navigator.push({
                     screen:'StoreDetail',
                     passProps: {StoreId:'59e6ca195126a4225233640a', type:'Store', StoreData:res},
                   });
                 }}>
                <View style={{padding:15, backgroundColor:'#e69137', borderRadius:5}}>
                <Text>前往</Text>
                </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.setState({
                region:{
                  latitude: res.GPS.Laitude, 
                  longitude: res.GPS.Longitude,
                  latitudeDelta: 0.0012,
                  longitudeDelta: 0.0011,
                }
              });
            }}>
            <View style={{padding:15, backgroundColor:'#e69137', borderRadius:5}}>
            <Text>查看</Text></View>
            </TouchableOpacity>
            </View>
            </View>
            </View>);
          

  }
  render() {
    return (
<View style={{flex:1}}>
      <MapView style={{width:Width, height:Height}}
      onRegionChange={this.onRegionChange.bind(this)}
      region={this.state.region}
    initialRegion={{
      latitude: 24.7994525, 
      longitude: 120.9768319,
      latitudeDelta: 0.0012,
      longitudeDelta: 0.0011,
    }}
  >
                {
              IntroductionStore.StoreList.map((res) => {
                if (res.Type == this.props.type)
                  return    <MapView.Marker
                                onPress={() => {
                                  this.props.navigator.push({
                                    screen:'StoreDetail',
                                    passProps: {StoreId:'59e6ca195126a4225233640a', type:'Store', StoreData:res},
                                  });
                                }}
                  coordinate={{latitude: res.GPS.Laitude,
      longitude: res.GPS.Longitude, }}
                />;
              })
                }

  </MapView>
  <ScrollView pagingEnabled horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:1, height:150, position:'absolute', bottom:100}}>
{
  IntroductionStore.StoreList.map((res) => {
    if (res.Type == this.props.type)
      return this._renderCard(res);
  })
}
              </ScrollView>
            
            </View>

    );
  }
}