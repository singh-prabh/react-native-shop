import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './components/Main/Main';
import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import OrderHistory from './components/OrderHistory/OrderHistory';

const Root = StackNavigator({
    Main: { 
        screen: Main,
        navigationOptions: {
            header: null            
        }
     },
    Authentication: { screen: Authentication,
        navigationOptions: {
            title: 'Đăng nhập'
        }    
    },
    ChangeInfo: { screen: ChangeInfo,
        navigationOptions: {
            title: 'Thay đổi thông tin'
        }   
    },
    OrderHistory: { screen: OrderHistory,
        navigationOptions: {
            title: 'Lịch sử người dùng'
        }       
    },
});

export default class App extends Component {
    render() {
        return <Root />;
    }
}
