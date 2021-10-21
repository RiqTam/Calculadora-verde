import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import tw from './tailwind';
import { setCustomText } from 'react-native-global-props';
import {useFonts} from 'expo-font';
import Login from './screens/Login';
import Navigator from './navigation/Navigator';
import LoginContext from './context/LoginContext';

export default function App() {
  const [logged, setLogged] = useState(false);
  const value = useMemo(
    () => ({ logged, setLogged }), 
    [logged]
  );

    // font loading
    let [fontsLoaded] = useFonts({
      Montserrat: require('./assets/fonts/Montserrat-Regular.otf'),
      MontserratBlack: require('./assets/fonts/Montserrat-Black.otf'),
      MontserratBold: require('./assets/fonts/Montserrat-Bold.otf'),
    });

    if(!fontsLoaded) return(<View></View>);

    setCustomText({
      style: { 
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: tw.color(`black`)
      }
    }); 

  return (
      <LoginContext.Provider value={value}>
        {logged?
          <Navigator logout={()=>setLogged(false)}/>
        :
          <View style={tw`mt-10`}>
            <Login login={()=>setLogged(true)} />
            <StatusBar style="auto" />
          </View>
        }
      </LoginContext.Provider>
  );   


}


