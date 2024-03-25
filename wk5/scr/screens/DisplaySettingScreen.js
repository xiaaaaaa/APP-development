import React from "react";
import{Center, Switch, HStack, Text} from 'native-base';
import { StyleSheet } from "react-native";

const DisplaySettingScreen = () => {
    return(
        <Center style={style.card}>
            <HStack style={style.content}>
                <Text>Light Mode</Text>
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
});

export default DisplaySettingScreen;