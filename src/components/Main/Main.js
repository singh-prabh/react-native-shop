import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Menu from './Menu';
import Shop from './Shop/Shop';


const { width } = Dimensions.get('window'); 
const Main = DrawerNavigator({
                    Shop: { screen: Shop }
                },
                {
                    drawerWidth: width * 0.8,
                    drawerPosition: 'left',
                    contentComponent: props => <ScrollView><Menu {...props} /></ScrollView>
                }
            );

export default Main;
