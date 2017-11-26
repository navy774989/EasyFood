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
    TouchableOpacity,
    Platform
} from 'react-native';
import Header from './Header';
import Detail from './Detail';
import Card from './Card';
import OrderDetail from './OrderDetail';
import { observer } from 'mobx-react';
import IntroductionStore from '../../Mobx/Introduction';
import OrderStore from '../../Mobx/Order';
@observer
export default class StoreDetail extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarNoBorder: true,
    navBarBackgroundColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
  componentWillMount() {
    IntroductionStore.getItemDetail(25);
    OrderStore.getOrderItem(this.props.id);
    console.log(this.props.StoreData);
    console.log(IntroductionStore.ItemList);
  }
  _renderCard() {
    if (this.props.type == 'Order' && Platform.OS == 'android') {
      return  OrderStore.orderItem.map((res) => {
        return <OrderDetail Title={res.Name}  Price={res.SubTotal} Count={res.Qty} Description={res.Property} navigator={this.props.navigator} />;
      });
    }
    else if (this.props.type == 'Store') {
      return  IntroductionStore.ItemList.map((res) => {
        return <Card Title={res.Name} id={res._id} Price={res.Price}
        Description={res.Description} image={res.Image} ar={res.Ar} type={this.props.type} navigator={this.props.navigator}/>;
      });
    }
    else if (this.props.type == 'In') {
      return <Card />;

    }
    else {
      return null;
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header StoreData={this.props.StoreData}/>
        <Detail type={this.props.type} rank={this.props.rank}/>
       {this._renderCard()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
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
