import React from "react";
import{FlatList} from "react-native";
import SongListDetail from "./SongListDetail";

const SongList = ({list}) => {
  const renderItem = ({item}) => <SongListDetail songList={item} />
    return(
      <FlatList 
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    );
};



export default SongList;