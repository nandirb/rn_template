import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/Routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Routes />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
