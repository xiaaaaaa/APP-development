import React from "react";
import{FlatList, SectionList, StyleSheet} from "react-native";
import SongListDetail from "./SongListDetail";
import HotSongListDetail from "./HotSongListDetail";
import sections from "../json/SongList_section.json";

// const SongList = ({list}) => {
//   const renderItem = ({item}) => <SongListDetail songList={item} />
//     return(
//       <FlatList 
//         data={list}
//         renderItem={renderItem}
//         keyExtractor={item => item.title}
//       />
//     );
// };

const SongList = () => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>

      { section.horizontal?(
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({item}) => <HotSongListDetail songList={item} />}
          showsHorizontalScrollIndicator = {flase}
          keyExtractor={item => item.title}
        />
      ): null}
    </>
  );
    
  const renderItem = ({item, section}) => {
    if(section.horizontal){
      return null;
    }
    return <SongListDetail songList={item} />
  }

  return(
    <SectionList 
      sections={sections}
      contentContainerStyle={{paddingHorizontal: 10}}
      stickySectionHeadersEnabled = {flase}
      showsHorizontalScrollIndicator={flase}
      //renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader:{
    fontWeight:'600',
    fontSize: 18,
    paddingTop: 20,
    paddimgBotton: 5,
    paddingLeft: 10,
    textTranform: 'uppercase',
  },
})


export default SongList;

