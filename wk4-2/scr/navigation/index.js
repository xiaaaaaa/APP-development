import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";

import songListData from "../json/SongList.json"

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <StackNaviagator />
        </NavigationContainer>
    );
}

const StackNaviagator = () => {
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