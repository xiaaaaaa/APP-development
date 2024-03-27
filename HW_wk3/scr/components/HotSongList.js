import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const HotSongList = props => {
    let { songList } = props;
    return(
        <View style={{flexDirection:'column'}}>
            <View style={styles.card}>
                <Image
                    style={styles.songImage}
                    source={{
                        uri: songList.image
                    }} 
                />
                <View style={styles.songName}>
                    {/* <Image
                        style={styles.singerImage}
                        source={{
                            uri: songList.thumbnail_image
                        }} 
                    /> */}
                    <View style={styles.singerText}>
                        <Text style={styles.song}>{songList.title}</Text>
                        <Text style={styles.singer}>{songList.singer}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
      height: 280,
      width:190,
      marginTop:0,
      marginBottom:30,
      marginLeft:10,
      marginRight:5,
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
      height:170,
      width:null,
      margin:10,
    },
    songName:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop:0,
      marginLeft:10,
      marginRight:20,
      marginBottom:20,
      
    },
    singerImage:{
      height:30,
      width:30,
    },
    singerText:{
      flexDirection:'column',
      justifyContent:'space-around',
      marginLeft: 10,
    },
    song:{
      fontSize: 14,
    },
    singer:{
      marginTop:7,
      fontSize: 11,
    },
});

export default HotSongList;