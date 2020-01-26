import React from 'react';
import { SafeAreaView, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeView from './src/components/Home/HomeView';
import FinishView from './src/components/Finish/FinishView';
import HistoryView from './src/components/History/HistoryView';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView,
    },
    Finish: {
      screen: FinishView,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
  },
  History: {
    screen: HistoryView
  },
}, {
  tabBarOptions: {
    activeTintColor: '#6D6D6D',
    inactiveTintColor: '#A3A3A3',
    labelStyle: {
      fontSize: 30,
    },
    style: {
      backgroundColor: '#E0E0E0',
      borderColor: 'rgba(140,140,140, 0.8)',
      borderTopWidth: 1,
    }
  }
}

);

export default createAppContainer(BottomTabNavigator);

