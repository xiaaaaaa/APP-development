import React from "react";
import { View } from "react-native";
import SongList from "../components/SongList";
import SongListData from "../json/SongList.json"
import Header from './scr/components/Header';

const SongListScreen =({navigator}) => {
    <View style={{flex: 1, backgroundColor:'#fff'}}>
    <StatusBar /> 
    <Header  />
    <SongList 
        list = {SongListData.songList}
        navigator={navigator}
    />
    </View>
}

export default SongListScreen;