import React from "react";
import{StyleSheet, Text, View, Image} from "react-native";

const SongList = () => {
    return(
        <View>
        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={require('wk2-3\img\戸締まり.jpeg')} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={require('.../img/singer.jpg')} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>戸締まり [Audio]</Text>
              <Text style={styles.singer}>RADWIMPS</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={require('.../img/suzume.jpg')} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={require('.../img/singer.jpg')} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>すずめ feat.十明 [Official Lyric Video]</Text>
              <Text style={styles.singer}>RADWIMPS</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={require('.../img/すずめの涙.jpg')} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={require('.../img/singer.jpg')} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>すずめの涙 [Audio]</Text>
              <Text style={styles.singer}>RADWIMPS</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={require('.../img/tamaki.png')} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={require('.../img/singer.jpg')} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>Tamaki [Audio]</Text>
              <Text style={styles.singer}>RADWIMPS</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.songImage}
            source={require('.../img/カナタハルカ.jpg')} 
          />
          <View style={styles.songName}>
            <Image
              style={styles.singerImage}
              source={require('.../img/singer.jpg')} 
            />
            <View style={styles.singerText}>
              <Text style={styles.song}>カナタハルカ [Official Lyric Video]</Text>
              <Text style={styles.singer}>RADWIMPS</Text>
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