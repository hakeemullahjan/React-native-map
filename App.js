import React from 'react';
import {View, Image, Dimensions, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Config/Redux/store/index';
import AppNavigate from './Navigation';
import Logo from './assets/TrackBuddy.png';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <AppNavigate />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
