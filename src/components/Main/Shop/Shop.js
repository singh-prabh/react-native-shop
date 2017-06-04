import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';


const ShopScreen = TabNavigator({
        Home: { screen: Home },
        Cart: { screen: Cart },
        Search: { screen: Search },
        Contact: { screen: Contact },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            
        },
    }
);

const { height } = Dimensions.get('window');

export default class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height / 8, backgroundColor: 'green' }}>
                    <TouchableNativeFeedback 
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    >                        
                        <Text>Open Drawer</Text>
                    </TouchableNativeFeedback>
                </View>
                <ShopScreen />
            </View>
        );            
    }
}
