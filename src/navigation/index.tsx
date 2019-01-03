import React from 'react';
import { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomePage from '../pages/HomePage';
import TaskDetailPage from '../pages/TaskDetailPage';

const AppNavigator = createStackNavigator({
    Home: {screen: HomePage},
    Detail: {screen: TaskDetailPage}
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// export default class NavigationPage extends Component {
//     render() {
        
//         return (
//             <AppContainer style={{flex: 1}}/>
//         );
//     }
// }