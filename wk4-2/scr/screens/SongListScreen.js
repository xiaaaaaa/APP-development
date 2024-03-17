import React from "react";
import { View } from "react-native";
import SongList from "../components/SongList";
import SongListData from "../json/SongList.json"
//import Header from './scr/components/Header';

const SongListScreen =({navigation}) => {
    return(
        <View style={{flex: 1, backgroundColor:'#fff'}}>
            {/* <StatusBar /> 
            <Header  /> */}
            <SongList 
                list = {SongListData.songList}
                navigation={navigation}
            />
        </View>

    );
        
}

export default SongListScreen;