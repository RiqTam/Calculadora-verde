import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Landpage from "../screens/Landpage";
import ElementsList from "../screens/ElementsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import AddData from "../screens/AddData";
import Tips from "../screens/Tips";
import Settings from "../screens/Settings";
import Fingerprint from "../screens/Fingerprint";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Add Data"
        screenOptions={({route})=>({tabBarIcon: (props)=>{
			const icons={
				"Add Data": "add-box",
				Tips: "list",
				Fingerprint: "fingerprint",
				Settings: "settings"
			}
			return(
				<MaterialIcons name={icons[route.name]} color={props.color} size={30}/>
			)
		}, headerShown: false, tabBarActiveTintColor: "#188216", tabBarInactiveTintColor: "#000"})}
      >
        <Tab.Screen name="Fingerprint" component={Fingerprint} />
        <Tab.Screen name="Add Data" component={AddData}/>
        <Tab.Screen name="Tips" component={Tips} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
