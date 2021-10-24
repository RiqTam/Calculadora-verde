import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from './tailwind';
import { setCustomText } from 'react-native-global-props';
import {useFonts} from 'expo-font';
import Login from './screens/Login';
import Navigator from './navigation/Navigator';
import AuthContext from './context/AuthContext';
import useAuth from './hooks/useAuth';
import useProviderAuth from "./hooks/useProviderAuth";

export default function App() {
  const [showLogin, setshowLogin] = useState(true);
	const auth = useAuth();
  const providerValue = useProviderAuth();
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
      <AuthContext.Provider value={providerValue}>
        {!showLogin?
          <Navigator setshowLogin={setshowLogin}/>
        :
          <View style={tw`mt-10`}>
            <Login setshowLogin={setshowLogin} />
            <Text>
              {JSON.stringify(auth.user)}
            </Text>
            <StatusBar style="auto" />
          </View>
        }
      </AuthContext.Provider>
  );   


}


