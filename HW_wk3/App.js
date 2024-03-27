import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './scr/components/Header';
import SongList from './scr/components/SongList';
import Navigation from './scr/navigation';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <GluestackUIProvider config={config}>
        <Navigation />  
      </GluestackUIProvider>
    </SafeAreaView>
  );
}


