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
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import SearchBar from './SearchBar';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default class SearchPage extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      Tag:0
    };
  }
  tagrender() {
    if (this.state.Tag == 0) {
      return (
      <View style={{flex:1}}>
      <View style={{height:30, width:Width, backgroundColor:'#EBF0F3', justifyContent:'center'}}>
      <Text style={{fontSize:12, margin:10, color:'#50585d'}}>路程</Text></View>
      </View>
    );}
  }
  Selection(count) {
    if (count == this.state.Tag) {
      return {color:'#676767', fontFamily:'PingFangTC-Semibold'};
    }
  }
  render() {
    return (
      <View style={styles.container}>
 
       <SearchBar
        autoFocus={true}
        iconSearchName={'ios-search-outline'}
        height={50}
        autoCorrect={false}
        onPress={() => {}}
        onBackPress={() => {this.props.navigator.pop({
          animationType: 'fade',
        });}}
        selectTextOnFocus={true}
        returnKeyType={'search'}
        inputStyle={{borderColor:'#00000000', backgroundColor:'#F5F5F5', borderRadius:12, width:Width - 30, alignSelf:'center', Height:10 / 812 * Height, marginBottom:5}}
        item={this.props.item}
      /> 

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:Width * 0.1, shadowOffset:{width:375, height:1, }}}>
      <TouchableOpacity onPress={() => {
        this.setState({
          Tag:0
        });
      }}>
      <Text style={[styles.Tag, this.Selection(0)]}>全部</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.setState({
            Tag:1
          });
        }}>
       <Text style={[styles.Tag, this.Selection(1)]}>路程</Text>
      </TouchableOpacity>
         <TouchableOpacity onPress={() => {
           this.setState({
             Tag:2
           });
         }}>
        <Text style={[styles.Tag, this.Selection(2)]}>課程</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({
              Tag:3
            });
          }}>
         <Text style={[styles.Tag, this.Selection(3)]}>單元</Text>
      </TouchableOpacity>
         
      </View>
        <View style={{width:Width, height:0.8, backgroundColor:'#000', opacity:0.2}}></View>
        <ScrollView style={{flex:1}}>
        <View>{this.tagrender()}</View>
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
  Tag: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    fontFamily:'PingFangTC-Regular',
    letterSpacing:0.44,
    color:'#8E8E8E'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});