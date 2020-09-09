import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

class Forecast extends Component {
  render() {
    const { name, main, description, temp } = this.props.forecast;
    const { welcome, container, bigText, mainText } = styles;
    return (
      <View style={container}>
        <Text style={welcome}>Weather for {name}.</Text>
        <Text style={bigText}>{main}</Text>
        <Text style={mainText}>Current conditions: {description}</Text>
        <Text style={bigText}>{temp} F</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center', 
    margin: 10,
    color: 'black'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'black'
  }
});

export default Forecast;