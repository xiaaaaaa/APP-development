import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';

const SongListDetail = props => {
    //const {thumbnail_image, title, singer, image} = props.songList;
    let {songList} = props;
    const navigation = useNavigation();
    return(
        <View style={styles.card}>
            <Pressable onPress={() => navigation.navigate('Detail', songList)}>
              <Image
                  style={styles.songImage}
                  source={{
                      uri: songList.image
                  }} 
              />
            </Pressable>

            {/* <Image
                style={styles.songImage}
                source={{
                    uri: songList.image
                }} 
            /> */}
            
            <View style={styles.songName}>
                
                
                <View style={styles.singerText}>
                    <Text style={styles.song}>{songList.title}</Text>
                    <Text style={styles.singer}>{songList.singer}</Text>
                </View>
            </View>
        </View>
    )
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

export default SongListDetail;

