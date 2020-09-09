import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import Forecast from './Forecast';
import { fetchForecast } from '../utils/asyncActions';

class ZipCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: null,
            forecast: null
        };
    }

    handleZipChange = e => {
        const zip = e.nativeEvent.text;
        fetchForecast(zip).then(forecast => this.setState({ zip, forecast}));
    };

    render() {
        const { forecast, zip } = this.state;
        const { container, welcome, input } = styles;
        return (
            <View style={container}>
                {forecast && <Forecast forecast={forecast} />}
                <TextInput style={input} placeholder='Enter a zip code' onSubmitEditing={this.handleZipChange} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        fontSize: 20,
        margin: 10,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 200,
        textAlign: 'center'
    }
});

export default ZipCode;