import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landpage from './screens/Landpage';
import ElementsList from './screens/ElementsList';
import tw from './tailwind';
import { setCustomText } from 'react-native-global-props';
import {useFonts} from 'expo-font';
import Login from './screens/Login';

export default function App() {
	let [fontsLoaded] = useFonts({
    	Montserrat: require('./assets/fonts/Montserrat-Regular.otf'),
    	MontserratBlack: require('./assets/fonts/Montserrat-Black.otf'),
    	MontserratBold: require('./assets/fonts/Montserrat-Bold.otf'),
  	});

  if(!fontsLoaded) return(
    <View></View>
  );

  setCustomText({
    style: { 
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: tw.color(`black`)
    }
  });

  return (
    <View style={tw`pt-10`}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}


