import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './scr/components/Header';
import SongList from './scr/components/SongList';


export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <StatusBar /> 
      <Header  />
      <SongList />
      </SafeAreaView>
    </ScrollView>
  );
}

