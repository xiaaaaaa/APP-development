import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyTheme from "../Theme";

import songListData from "../json/SongList.json"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <MyTab />
        </NavigationContainer>
    );
}


const MyTab = () => {
    const {colors} = useTheme();

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