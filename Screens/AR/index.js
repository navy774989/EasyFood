import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class Ar extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <ARKit
          style={{ flex: 1 }}
          planeDetection
          lightEstimationEnabled
          onPlaneDetected={console.log} // event listener for plane detection
          onPlaneUpdate={console.log} // event listener for plane update
        >
           <ARKit.Model
            position={{ x: 0.0, y: 0, z: 0 }}
            id="object_10"
            model={{
              file: 'art.scnassets/hamburger.scn', scale: 0.03 // make sure you have the model file in the ios project
            }}
          />
        </ARKit>
      </View>
    );
  }
}
