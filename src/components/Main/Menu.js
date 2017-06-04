import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TouchableNativeFeedback } from 'react-native';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Authentication' })
    ]
}); 

export default class Menu extends Component {


    render() {
        return (
            <View>
                <TouchableNativeFeedback 
                    onPress={() => this.props.navigation.dispatch(resetAction)}
                >
                    <Text>
                        Go to Authenticate
                    </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback 
                    onPress={() => this.props.navigation.navigate('ChangeInfo')}
                >
                    <Text>
                        Go to Change Info
                    </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback 
                    onPress={() => this.props.navigation.navigate('OrderHistory')}
                >
                    <Text>
                        Go to OrderHistory
                    </Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
