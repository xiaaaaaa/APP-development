import React from "react";
import { StyleSheet } from "react-native";
import {Text, HStack, Pressable} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingList = ({title, navigation, destination}) => {
    return(
        <Pressable
            onPress={()=>{
                destination? navigation.navigate(destination) : null;
            }}
        >
            <HStack style={style.list}>
                <Text style={style.title}>{title}</Text>
                <AntDesign name="right" color="gray" size={16} />
            </HStack>
        </Pressable>
    );
}

const style = StyleSheet.create({
    list:{
        backgroundColor:'#000',
        padding:4, 
        borderTopWidth:1,
        borderColor:"#cbced1",
        justifyContent:'space-between',
    },
    title:{
        fontSize:16,
    },
});

export default SettingList;