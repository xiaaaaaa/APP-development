import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
// import { useTheme } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createDrawerNavigator } from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DisplaySettingScreen from "../screens/DisplaySettingScreen";
import MyTheme from "../Theme";

import songListData from "../json/SongList.json"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NativeBaseProvider>
            <NavigationContainer theme={MyTheme}>
                <MyTabs />
            </NavigationContainer>
        </NativeBaseProvider>
        
    );
}


const MyTabs = () => {
    const { colors } = useTheme();

    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarInactiveTintColor: colors.primary700,
                tabBarActiveTintColor: colors.light400,
            }}
        >
            <Tab.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title:'Home',
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="SettingsStack"
                component={SettingsStack}
                options={{
                    headerShown: false,
                    title: 'Settings',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const SettingsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Setting"
                component={SettingsScreen}
                options={{
                    title:'Settings', 
                    headerTitleStyle:{
                        fontWeight:'400',
                        fontSize:20,
                    },
                }}
            />
            <Stack.Screen 
                name="DisplaySetting"
                component={DisplaySettingScreen}
                options={{
                    //headerShown: false,
                    title: "Display",
                    headerTitleStyle:{
                        fontWeight:'400',
                        fontSize:20,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={SongListScreen}
                option={{
                    title: songListData.title,
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    }
                }}
            />
            <Stack.Screen 
                name='Detail'
                component={DetailScreen}
                options={({route}) => ({
                    title: route.params.title,
                    headerStyle:{
                        backgroundColor: '#fff',
                    },
                    headerTintColor:'#000',
                    headerTitleStyle:{
                        fontWeight:'400',
                        fontSize:20
                    },
                })}
            />
        </Stack.Navigator>
    );
}

export default Navigation;