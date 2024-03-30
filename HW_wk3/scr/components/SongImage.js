import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SongImage = ({detail, image, songList}) => {
    const navigation = useNavigation();

    if(detail){
        return(
            <Pressable onPress={() => navigation.navigate('Detail', songList)}>
              <Image
                  style={styles.songImage}
                  source={{
                      uri: image
                  }} 
              />
            </Pressable>
        )
    }
    else{
        return(
            <Image
                style={styles.songImage}
                source={{
                    uri: image
                }} 
            />
        )
    }
}

const styles = StyleSheet.create({
    songImage:{
        height:200,
        width:140,
        shadowColor:'#414144',
        shadowOffset: { width: 0, height: 16},
        shadowOpacity: 1,
        marginBottom:14,
    },
});

export default SongImage;