import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import HomeView from './src/components/Home/HomeView';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeView />
    </SafeAreaView>
  );
};

export default App;
