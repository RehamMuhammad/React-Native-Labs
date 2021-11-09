import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import { COLORS } from './common/colors';
import { SearchScreen } from './screens';

//redux imports
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppContainer from './navigation';



const App = () => {

  // useEffect(() => {
  //   axios
  //     .get("http://www.omdbapi.com/?i=tt3896198&apikey=cae06b86")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
 
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
     <StatusBar barStyle={'light-content'} />
        <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.oxfordBlue,
        }}>   
        <AppContainer />    
      </SafeAreaView>
      </PersistGate>
      </Provider>
  );
};

export default App;
