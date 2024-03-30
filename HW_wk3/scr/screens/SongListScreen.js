import React from "react";
import { View } from "react-native";
import SongList from "../components/SongList";
import SongListData from "../json/SongList.json"

const SongListScreen =({navigation}) => {
    return(
        <View style={{flex: 1, backgroundColor:'#fff'}}>
            <SongList 
                list = {SongListData.songList}
            />
        </View>

    );
        
}

export default SongListScreen;