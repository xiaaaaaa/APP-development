import React from "react";
import { SectionList, FlatList, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import SongListData from "../json/SongList.json";
import SongListDetail from "./SongListDetail";
import HotSongList from "./HotSongList";

const SongList = () => {

  const renderSectionHeader = ({ section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HotSongList songList={item}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section , navigation}) => {
    if (section.horizontal) {
      return null;
    }
    return <SongListDetail songList={item} navigation={navigation}/>
  };

  return (
    <SectionList
      sections={SongListData}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      // stickySectionHeadersEnabled={false}
      // showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};


const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
  }
})


export default SongList;