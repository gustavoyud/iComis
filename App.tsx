import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {TabsStack} from './src/screens/tabs';
import {store} from './src/shared/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
