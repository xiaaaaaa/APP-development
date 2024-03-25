import React from "react";
import{Center, Switch, HStack, Text} from 'native-base';
import { StyleSheet } from "react-native";

const DisplaySettingScreen = () => {
    return(
        <Center style={style.card}>
            <HStack style={style.content}>
                <Text style={style.text}>Light Mode</Text>
                <Switch 
                    name = "light Mode"
                    accessibilityLabel = "display-mode"
                    accessibilityHint="light or dark mode"
                />
            </HStack>
        </Center>
    );
};

const style = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        width:'90%',
        marginTop:20,
        alignSelf:'center',
        borderWidth:1,
        borderRadius:9,
        borderColor:'#fff',
        shadowColor:'#435a5e',
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.1,
    },
    content:{
        margin:10,
        alignItems:'center',
    },
    text:{
        fontSize:18,
        marginRight:10,
    },
});

export default DisplaySettingScreen;