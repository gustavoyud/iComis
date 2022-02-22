import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TabsStack} from './src/screens/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <TabsStack />
    </NavigationContainer>
  );
};

export default App;
