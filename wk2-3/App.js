
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <StatusBar /> 
      <View style={styles.header}>
        <Text style={styles.headerText}>
          【 Suzume 】-  RADWIMPS
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.songImage}
          source={require('./img/戸締まり.jpeg')} 
        />
        <View style={styles.songName}>
          <Image
            style={styles.singerImage}
            source={require('./img/singer.jpg')} 
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
          source={require('./img/suzume.jpg')} 
        />
        <View style={styles.songName}>
          <Image
            style={styles.singerImage}
            source={require('./img/singer.jpg')} 
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
          source={require('./img/すずめの涙.jpg')} 
        />
        <View style={styles.songName}>
          <Image
            style={styles.singerImage}
            source={require('./img/singer.jpg')} 
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
          source={require('./img/tamaki.png')} 
        />
        <View style={styles.songName}>
          <Image
            style={styles.singerImage}
            source={require('./img/singer.jpg')} 
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
          source={require('./img/カナタハルカ.jpg')} 
        />
        <View style={styles.songName}>
          <Image
            style={styles.singerImage}
            source={require('./img/singer.jpg')} 
          />
          <View style={styles.singerText}>
            <Text style={styles.song}>カナタハルカ [Official Lyric Video]</Text>
            <Text style={styles.singer}>RADWIMPS</Text>
          </View>
        </View>
      </View>

      </SafeAreaView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  
  header:{
      marginBottom:30,
      backgroundColor:'#132326',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      shadowColor:'#435a5e',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 20,
  },
  headerText: {
    fontSize: 20,
    color:'#fff'
  },

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
