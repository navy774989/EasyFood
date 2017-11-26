/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { OrderCard } from './OrderCard';
import OrderStore from '../../Mobx/Order';
import { observer } from 'mobx-react';
import { PastOrder } from './PastOrder';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
@observer
export default class Order extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      tab:'now'
    };
  }
  componentWillMount() {
    OrderStore.getOrderList();
  }
  onChoose(item) {
    if (item) {
      return {backgroundColor:'#e69137'};
    }
    else {
      return {backgroundColor:'white'};
    }
  }
  onChooseText(item) {
    if (item) {
      return {color:'white'};
    }
    else {
      return {color:'#8e8e8e'};
    }
  }
  _renderScrollView() {
    if (this.state.tab == 'now') {

      return  OrderStore.OrderList.map((res) => {
        console.log(res.StoreId);
        return  <OrderCard navigator={this.props.navigator} id={res._id} date={res.PickTime} Image={res.Image} price={res.Price} StoreName={res.StoreName} takeway={res.TakeWay} payway={res.PayMethod}  StoreId={'59cdc30ca1f145545327806d'}/>;
      });
    }
    else if (this.state.tab == 'past') {
      return  OrderStore.OrderList.map((res) => {
        return  <PastOrder navigator={this.props.navigator} id={res._id} date={res.PickTime} Image={res.Image} price={res.Price} StoreName={res.StoreName} takeway={res.TakeWay} payway={res.PayMethod}  StoreId={'59cdc30ca1f145545327806d'}/>;
      });
    }
    else {
      null;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'left', marginLeft:15,
            fontSize: 30,
            letterSpacing: 0.44,
            fontWeight:'bold',
            color: "#353535", marginBottom:5, fontFamily:'PingFangTC-Semibold',
          alignSelf:'flex-start'}}>Orders
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, marginLeft:0.05 * Width, marginRight:0.05 * Height}}>
          <TouchableOpacity onPress={() => {
            this.setState({
              tab:'now'
            });
          }}>
          <View style={[this.onChoose(this.state.tab == 'now'), {width:Width * 0.45, height:30 * Height / 812, justifyContent:'center', alignItems:'center', borderRadius:5, }]}>
              <Text style={this.onChooseText(this.state.tab == 'now')}>進行中</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              tab:'past'
            });
          }}>
          <View style={[this.onChoose(this.state.tab == 'past'), {width:Width * 0.45, height:30 * Height / 812, justifyContent:'center', alignItems:'center', borderRadius:5}]}>
          <Text style={this.onChooseText(this.state.tab == 'past')}>已完成</Text>
          </View>
          </TouchableOpacity>

          </View>
        <ScrollView style={{flex:1, marginTop:20}}> 
        <View>
        {
 this._renderScrollView()
                      }
        </View>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:50,
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