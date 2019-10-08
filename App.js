import React from "react";
import { Image} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SignUp from "./screens/SignUp";
import Loading from "./screens/Loading";
import Login from "./screens/Login";

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Home`,
      headerTruncatedBackTitle: `to A`,
      headerTintColor:'blue',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24}}
          source={require("./assets/house.png")}
        />
      ),
     }),
    },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      title: `Settings`,
      headerTruncatedBackTitle: `to A`,
      headerTintColor:'blue',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("./assets/house.png")}
        />
      ),
     }),
    
  },
  Signup: {
    screen: SignUp,
    navigationOptions: () => ({
      title: `Signup`,
      headerTruncatedBackTitle: `to A`,
      headerTintColor:'blue',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24}}
          source={require("./assets/house.png")}
        />
      ),
     }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: `Login`,
        headerTruncatedBackTitle: `to A`,
        headerTintColor:'blue',
        drawerIcon: (
          <Image
            style={{ width: 24, height: 24}}
            source={require("./assets/house.png")}
          />
        ),
       }),
      },
      Loading: {
        screen: Loading,
        navigationOptions: () => ({
          title: `Loading`,
          headerTruncatedBackTitle: `to A`,
          headerTintColor:'blue',
          drawerIcon: (
            <Image
              style={{ width: 24, height: 24}}
              source={require("./assets/house.png")}
            />
          ),
         }),
        },
});

export default createAppContainer(AppNavigator);