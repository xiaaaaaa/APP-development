import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingsScreen from "../screens/SettingsScreen";

import songListData from "../json/SongList.json"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}


const MyTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor:'#379bde'
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
                name="Setting"
                component={SettingsScreen}
                options={{
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