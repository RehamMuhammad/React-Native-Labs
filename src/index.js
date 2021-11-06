import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import { COLORS } from './common/colors';
import { SearchScreen } from './screens';



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
    <>
     <StatusBar barStyle={'light-content'} />
        <View
        style={{
          flex: 1,
          backgroundColor: COLORS.oxfordBlue,
        }}>       
        <SearchScreen />

      </View>
      </>
  );
};

export default App;
