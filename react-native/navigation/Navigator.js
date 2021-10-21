import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Landpage from "../screens/Landpage";
import ElementsList from "../screens/ElementsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route})=>({tabBarIcon: (props)=>{
			const icons={
				"New Data": "add-box",
				Tips: "list",
				Fingerprint: "fingerprint",
				Settings: "settings"
			}
			return(
				<MaterialIcons name={icons[route.name]} color={props.color} size={30}/>
			)
		}, headerShown: false, tabBarActiveTintColor: "#188216", tabBarInactiveTintColor: "#000"})}
      >
        <Tab.Screen name="New Data" component={Landpage}/>
        <Tab.Screen name="Tips" component={ElementsList} />
        <Tab.Screen name="Fingerprint" component={ElementsList} />
        <Tab.Screen name="Settings" component={ElementsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
