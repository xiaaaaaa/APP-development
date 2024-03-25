import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Box} from 'native-base';
import ListItem from "../components/ListItem";

const SettingsScreen = ({navigation}) => {
    return(

        // <Box mt="1" borderBottomWidth={1} borderColor="lightgray">
        //     <ListItem title='Display' navigation={navigation} destination="DisplaySetting" />
        //     <ListItem title='Account' navigation={navigation} />
        // </Box>
        <View style={style.setting}>
            <ListItem title='Display' navigation={navigation} destination="DisplaySetting" />
            <ListItem title='Account' navigation={navigation} />
        </View>
    );
}


const style = StyleSheet.create({
    setting:{
        flex:1,
        backgroundColor:'#fff',
        borderBottomWidth:1, 
        borderColor: '#cbced1',
    },
    
});

export default SettingsScreen;