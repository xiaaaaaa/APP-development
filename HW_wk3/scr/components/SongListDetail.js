import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack } from "@gluestack-ui/themed";

import Stars from "../components/Stars.js";
import SongImage from "./SongImage.js";

const SongListDetail = props => {
    //const {thumbnail_image, title, singer, image} = props.songList;
    let {songList} = props;
    const navigation = useNavigation();

    return(
      <View style={styles.bookList}>
        <View style={styles.card}>
            <SongImage detail={songList.detail} image={songList.image} songList={songList}/>
            
            
            <View style={styles.songName}>
               
                
                <View style={styles.singerText}>
                    {/* <Stars stars={songList.stars} /> */}
                    <View style={styles.stars}>
                      {songList.stars > 0? <Stars stars={songList.stars}/> : null}
                    </View>
                    
                    <Text style={styles.song}>{songList.title}</Text>
                    <Text style={styles.singer}>{songList.singer}</Text>
                </View>
            </View>
        </View>
      </View>
        
    )
};

const styles = StyleSheet.create({
    bookList:{
      width:115,
      marginLeft:20,
      marginRight:20,
      display:'flex',
      justifyContent:'space-between',
      
      
    },
    card:{
      
      
      backgroundColor:'#fff',
      
    },
    
    songName:{
      flexDirection:'row',
      justifyContent:'flex-start',
      
      
    },
    
    singerText:{
      
    },
    stars:{
      
    },
    song:{
      width:140,
      fontSize: 16,
      fontWeight:'500',
      color:'#131313',
      marginBottom:5,
    },
    singer:{
      fontSize: 12,
      fontWeight:'500',
      color:'#666666',
    },
});

export default SongListDetail;

