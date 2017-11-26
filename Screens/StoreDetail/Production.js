import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import { observer } from 'mobx-react';
import IntroductionStore from '../../Mobx/Introduction';
import Icon from 'react-native-vector-icons/Entypo';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
@observer
export class Production extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionsweet:null,
      selectedOptionfavor:null,
      selectedOptionice:null,
      count:0
    };
  }
  sent() {
    this.props.navigator.pop({

    });
  }
  plus() {
    if (this.state.count <= 9) {
      this.setState({
        count:this.state.count + 1,
      });
    }
  }
  minus() {
    if (this.state.count >= 1) {
      this.setState({
        count:this.state.count - 1,
      });
    }
  }
  setSelectedOptionfavor(selectedOption) {
    this.setState({
      selectedOptionfavor:selectedOption
    });
  }
  setSelectedOptionsweet(selectedOption) {
    this.setState({
      selectedOptionsweet:selectedOption
    });
  }
  setSelectedOptionice(selectedOption) {
    this.setState({
      selectedOptionice:selectedOption
    });
  }
  componentWillMount() {
    IntroductionStore.getAttributes(this.props.id);
  }
  renderOption(option, selected, onSelect, index) {
    const style = selected ? { fontWeight: 'bold', color:'#e69137'} : {};
    if (selected) {
      var checkMark =
  <Icon name="check" size={20} style={{marginRight:20}} color="#28917a" />;
      
    }
    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={[style, {marginVertical:5}]}>{option}</Text>
        {checkMark}
        
        
        </View>
      </TouchableWithoutFeedback>
    );
  }
  renderContainer(options) {
    return (
        <View style={{
          backgroundColor: 'white',
          paddingLeft: 20,
          borderTopWidth: 1,
          borderTopColor: '#cccccc',
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          padding:10
        }}>
          {options}
        </View>
      );
  }
  favor() {
    if (IntroductionStore.attributes.favor) {
      return <View style={{ backgroundColor: '#eeeeee',
justifyContent:'center'}}>
    <Text style={{
      color: '#555555',
      paddingLeft: 20,
      marginBottom: 5,
      marginTop: 5,
      fontSize: 12,
    }}>口味
    </Text>
            <RadioButtons
        options={IntroductionStore.attributes.favor}
        onSelection={ this.setSelectedOptionfavor.bind(this) }
        selectedOption={this.state.selectedOptionfavor }
        renderOption={ this.renderOption }
        renderContainer={ this.renderContainer }
      /></View>;

    }}
  sweet() {
    if (IntroductionStore.attributes.sweet) {

    
 
      return <View style={{ backgroundColor: '#eeeeee',
justifyContent:'center'}}>
    <Text style={{
      color: '#555555',
      paddingLeft: 20,
      marginBottom: 5,
      marginTop: 5,
      fontSize: 12,
    }}>甜度
    </Text>
            <RadioButtons
        options={IntroductionStore.attributes.sweet}
        onSelection={ this.setSelectedOptionsweet.bind(this) }
        selectedOption={this.state.selectedOptionsweet }
        renderOption={ this.renderOption }
        renderContainer={ this.renderContainer }
      /></View>;
    }
  }
  ice() {
    if (IntroductionStore.attributes.sweet) {

    
 
      return <View style={{ backgroundColor: '#eeeeee',
justifyContent:'center'}}>
    <Text style={{
      color: '#555555',
      paddingLeft: 20,
      marginBottom: 5,
      marginTop: 5,
      fontSize: 12,
    }}>甜度
    </Text>
            <RadioButtons
        options={IntroductionStore.attributes.ice}
        onSelection={ this.setSelectedOptionice.bind(this) }
        selectedOption={this.state.selectedOptionice }
        renderOption={ this.renderOption }
        renderContainer={ this.renderContainer }
      /></View>;
    }
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <Image source={{uri:this.props.image}} style={{width:Width, height:0.3 * Height}}/>
{this.favor()}
{this.sweet()}
{this.ice()}
<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:5}}>
<TouchableOpacity onPress={() => this.plus()}>
 <Icon name="circle-with-plus" size={60} style={{marginHorizontal:20}} color="#e69137"  />
 </TouchableOpacity>
 <View style={{width:80, height:80, borderRadius:40, borderColor:'#8e8e8e', borderWidth:1, justifyContent:'center', alignItems:'center'}}><Text style={{backgroundColor:'#00000000', color:'black', fontSize:40}}>{this.state.count}</Text></View>
 <TouchableOpacity onPress={() => this.minus()}>
 <Icon name="circle-with-minus" size={60} style={{marginHorizontal:20}} color="#28917a" />
 </TouchableOpacity>
 </View>
 <TouchableOpacity onPress={() => {
   this.sent();
 }} style={{alignSelf:'center', marginTop:30, marginBottom:30, borderColor:'#8e8e8e', borderWidth:1, borderRadius:12}}>
 <View style={{width:200, height:40, justifyContent:'center', alignItems:'center'}}>
 <Text>送出</Text>
 </View>
 </TouchableOpacity>
      </ScrollView>
    );
  }
}