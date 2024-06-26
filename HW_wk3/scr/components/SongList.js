import React from "react";
import { SectionList, FlatList, StyleSheet, Text } from "react-native";
import SongListData from "../json/SongList.json";
import SongListDetail from "./SongListDetail";

const SongList = () => {

  const renderSectionHeader = ({ section , navigation}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <SongListDetail songList={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
      />
    </>
  );
  const renderItem = ({ item, section , navigation}) => {
    return null
  };

  return (
    <SectionList 
      sections={SongListData}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};


const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '500',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 0,
    lineHeight:28,
    marginBottom:16,
    marginLeft:20,
  }
})


export default SongList;