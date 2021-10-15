import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tw from './tailwind';
import { StyleSheet, Text, View } from 'react-native';
import Landpage from './components/views/Landpage';
import ElementsList from './components/views/ElementsList';


export default function App() {
  return (
    <View style={tw`pt-10`}>
      <ElementsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
});
