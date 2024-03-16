import React from "react";
import{StyleSheet, Text, View, Image, ScrollView} from "react-native";
import SongListData from "../json/SongList.json";
import SongListDetail from "./SongListDetail";

const SongList = () => {
    return(
      <ScrollView>
        <SongListDetail songList = {SongListData[0]} />
        <SongListDetail songList = {SongListData[1]} />
        <SongListDetail songList = {SongListData[2]} />
        <SongListDetail songList = {SongListData[3]} />
        <SongListDetail songList = {SongListData[4]} />
      </ScrollView>
    );
};



export default SongList;