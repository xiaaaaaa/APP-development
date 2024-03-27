import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, 
} from "@react-navigation/drawer";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Divider, Image, Input, HStack, Text} from '@gluestack-ui/themed';

import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DisplaySettingScreen from "../screens/DisplaySettingScreen";
import MyTheme from "../Theme";

import songListData from "../json/SongList.json"
import { Colors } from "react-native/Libraries/NewAppScreen";
// import { color } from "native-base/lib/typescript/theme/styled-system";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return(
        <NativeBaseProvider>
            <NavigationContainer theme={MyTheme}>
                <MyDrawer />
            </NavigationContainer>
         </NativeBaseProvider>
        
    );
}


const CustomDrawerContent = (props) => {
    const{colors} = useTheme();

    return(
        <DrawerContentScrollView {...props}
            // contentContainerStyle = {{paddingTop:0}}
            backgroundColor = {"#f7fcfc"}
        >
            <Image
                h={200}
                w="100%"
                marginBottom={20}
                source={require("../images/drawerTile.jpg")}
                alt="albumImage"
            />
            <DrawerItemList {...props} />
            <DrawerItem 
                label="Help"
                activeBackgroundColor={colors.primary100}
                activeTintColor={colors.light400}
                inactiveTintColor={colors.primary700}
                labelStyle={{fontSize:16}}
                icon={({color})=>(
                    <MaterialCommunityIcons name="alert-circle-outline" color={color} size={26} />
                )}
            />
            <DrawerItem 
                label="Contact Us"
                activeBackgroundColor={colors.primary100}
                activeTintColor={colors.light400}
                inactiveTintColor={colors.primary700}
                labelStyle={{fontSize:16}}
                icon={({color})=>(
                    <MaterialCommunityIcons name="contacts-outline" color={color} size={26} />
                )}
            />

        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    const {colors} = useTheme();

    return(
        <Drawer.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: colors.primary100,
                drawerActiveTintColor: colors.light400,
                drawerInactiveTintColor: colors.primary700,
                
                drawerStyle:{width:300},
                drawerLabelStyle:{ fontSize:16, fontWeight:'400'},
            }}
            drawerContent={ props => <CustomDrawerContent {...props}/> } 
        >
        <Drawer.Screen 
            name="HomeStack"
            component={MyTabs}
            options={{
                headerShown: false,
                drawerLabel: "Main Page",
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),  
                 
            }}
        />
        
        </Drawer.Navigator>
    );
}

const MyTabs = ({navigation}) => {
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
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
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

const SettingsStack = ({navigation}) => {
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
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                        />
                    ),
                   
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

const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={SongListScreen}
                options={{
                    title: "Home",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                        />
                    ),
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