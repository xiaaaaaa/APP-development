import React from "react";
import{StyleSheet, Text, View, Image} from "react-native";
import SongListData from "../json/SongList.json";

const SongList = () => {
    return(
      <View>
        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={{
              uri: SongListData[0].image
            }} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={{
                uri: SongListData[0].thumbnail_image
              }} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>{SongListData[0].title}</Text>
              <Text style={styles.singer}>{SongListData[0].singer}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={{
              uri: SongListData[1].image
            }}  
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={{
                uri: SongListData[1].thumbnail_image
              }} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>{SongListData[1].title}</Text>
              <Text style={styles.singer}>{SongListData[1].singer}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={{
              uri: SongListData[2].image
            }} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={{
                uri: SongListData[2].thumbnail_image
              }} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>{SongListData[2].title}</Text>
              <Text style={styles.singer}>{SongListData[2].singer}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={{
              uri: SongListData[3].image
            }} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={{
                uri: SongListData[3].thumbnail_image
              }} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>{SongListData[3].title}</Text>
              <Text style={styles.singer}>{SongListData[3].singer}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={{
              uri: SongListData[4].image
            }} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={{
                uri: SongListData[4].thumbnail_image
              }} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>{SongListData[4].title}</Text>
              <Text style={styles.singer}>{SongListData[4].singer}</Text>
            </View>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    card:{
      marginTop:0,
      marginBottom:30,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:9,
      borderColor:'#fff',
      shadowColor:'#435a5e',
      shadowOffset: { width: 0, height: 20},
      shadowOpacity: 0.1,
      // Android Only
      elevation: 10,
    },
    songImage:{
      height:350,
      width:null,
      margin:20,
    },
    songName:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop:0,
      marginLeft:20,
      marginRight:20,
      marginBottom:20,
      
    },
    singerImage:{
      height:50,
      width:50,
    },
    singerText:{
      flexDirection:'column',
      justifyContent:'space-around',
      marginLeft: 10,
    },
    song:{
      fontSize: 15,
    },
    singer:{
      fontSize: 12,
    },
});

export default SongList;