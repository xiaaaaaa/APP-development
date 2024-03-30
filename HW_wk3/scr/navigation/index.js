import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Divider, Image, VStack, Text} from '@gluestack-ui/themed';

//Home
import SongListScreen from "../screens/SongListScreen";
import DetailScreen from "../screens/DetailScreen";
import WishListScreen from "../screens/WishListScreen";
import MyBookScreen from "../screens/MyBookScreen";
//drawer
import AccountScreen from "../screens/AccountScreen";
import SettingScreen from "../screens/SettingScreen";

import MyTheme from "../Theme";

import { Pressable } from "react-native";

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
    return(
        <DrawerContentScrollView {...props}
            backgroundColor = {"#fff"}
        >
            <VStack style={styles.drawerHeader}>
                <Image style={styles.drawerUserImage}
                    size="sm"
                    borderRadius="$full"
                    source={{
                        uri: "https://s3-alpha-sig.figma.com/img/a14c/921b/dcea36fbb59ee6c44fdec352c284fb5b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AyaCYlh27eIYoF-2guDSrpqgnRLhWWxiDkXCz-VX5him7p~wdXuPxHXmtBs1dRFJdjagDxhdIyQlEXhiNk5MDGAisqZTEbT7cQboGeCAICLwZDbAboBQ06jHmPZSQ-DVQ3YNPWzZIkZgf2JsXxTZwD0TiskicoZeoIz~Vtg1INdOk-hJtuwSjJB-YcJQ0R2PIhpUZn4Jy-GMMQ3KkIk3ympb0RJpOxRYSDGQ3rwg9SQSwkqVwaHiOdXVTHfCsjp6WcEPpA8DF8ZkhV0sNWs-GNO-7C7PsCh74N0n7QN52hUhKllidmSTyxdJSIq~aZWcRcGczUud0mANI9CqkF58lw__",
                        
                    }}
                    alt="userImage"
                />
                <Text style={styles.drawerUserName}>May</Text>
                <Divider my="$0.5" />
            </VStack>
            <DrawerItemList {...props} />
            

        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    const {colors} = useTheme();

    return(
        <Drawer.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: "#fff",
                drawerActiveTintColor: "#666666",
                drawerInactiveTintColor: "#666666",
                
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
                drawerLabel: " Home",
                drawerLabelStyle:{
                    fontSize:14,
                    fontWeight:'400',
                },
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),  
                 
            }}
        />
        <Drawer.Screen 
            name="AccountStack"
            component={AccountStack}
            options={{
                headerShown: false,
                drawerLabel: "Account",
                drawerLabelStyle:{
                    fontSize:14,
                    fontWeight:'400',
                },
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                ),  
            }}
        />
        <Drawer.Screen 
            name="SettingStack"
            component={SettingStack}
            options={{
                headerShown: false,
                drawerLabel: "Setting",
                drawerLabelStyle:{
                    fontSize:14,
                    fontWeight:'400',
                },
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),  
            }}
        />
        
        </Drawer.Navigator>
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
                tabBarLabelStyle:{
                    fontSize:12,
                    marginBottom:6,
                },
                tabBarStyle:{
                    height:56,
                    padding:8,
                }
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
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="WishListStack"
                component={WishListStack}
                options={{
                    headerShown: false,
                    title: 'Wishlist',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={24} />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="MyBookStack"
                component={MyBookStack}
                options={{
                    headerShown: false,
                    title: 'My books',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={24} />
                    ),
                    
                }}
            />
        </Tab.Navigator>
    );
}

//Tab
const WishListStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="WishList"
                component={WishListScreen}
                options={{
                    title: '',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
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
        </Stack.Navigator>

    );
}

const MyBookStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="MyBook"
                component={MyBookScreen}
                options={{
                    title: '',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
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
        </Stack.Navigator>

    );
}

const HomeStack = ({navigation}) => {
    const [bookmark, setBookmark] = useState(0);
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={SongListScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={28}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginLeft:10 , marginRight: 20 }}
                        />
                    ),
                    headerRight:()=>(
                        <MaterialCommunityIcons 
                            name={'magnify'}
                            size={28}
                            style={{ marginLeft: 20 }}
                        />
                    ),
                }}
            />
            <Stack.Screen 
                name='Detail'
                component={DetailScreen}
                
                options={() => ({
                    title: "",
                    headerStyle:{
                        backgroundColor: '#fff',
                    },
                    headerShadowVisible: false,
                    headerTintColor:'#000',
                    headerTitleStyle:{
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerRight:()=>(
                        <Pressable onPress={()=>(bookmark>0? setBookmark(bookmark-1):setBookmark(bookmark+1))}>
                           {!bookmark>0?
                                <MaterialCommunityIcons 
                                    name={'bookmark-outline'}
                                    size={28}
                                    style={{ marginLeft: 20 }}
                                />
                                :
                                <MaterialCommunityIcons 
                                    name={'bookmark'}
                                    size={28}
                                    style={{ marginLeft: 20, color:'#6200EE' }}
                                />
                           } 
                        </Pressable>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

//drawer
const AccountStack = ({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                    title: "",
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
        </Stack.Navigator>
    )
    
}

const SettingStack = ({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Setting"
                component={SettingScreen}
                options={{
                    title: "",
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
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerHeader:{
        width:300,
        height:148,
        padding:14,
        paddingTop:40,
        marginBottom:16,
    },
    drawerUserImage:{
        height:48,
        width:48,
        marginBottom:16,
    },
    drawerUserName:{
        fontSize:24,
        fontWeight:'500',
        color:'#131313',
        marginBottom:16,
    },
});

export default Navigation;