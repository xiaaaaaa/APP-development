import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './scr/components/Header';
import SongList from './scr/components/SongList';
import Navigation from './scr/navigation';

export default function App() {
  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <Navigation />   
    </SafeAreaView>
  );
}


