import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import SettingList from "../components/SettingList";

const SettingsScreen = ({navigation}) => {
    return(
    <View style={style.setting}>
        <SettingList title='Display' navigation={navigation} destination="DisplaySetting" />
        <SettingList title='Account' navigation={navigation} />
    </View>
    );
}


const style = StyleSheet.create({
    setting:{
        flex:1,
        borderBottomWidth:1, 
        borderColor: '#cbced1',
    },
    
});

export default SettingsScreen;