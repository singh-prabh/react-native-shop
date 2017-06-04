import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

export default class Contact extends Component {
    render() {
        return (
            <View>
                <Text>
                    <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('Cart'); }}>
                        <Text>Move to Authenticate</Text>
                    </TouchableNativeFeedback>
                </Text>
            </View>
        );
    }
}
