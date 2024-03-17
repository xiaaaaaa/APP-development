import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from "react-native";
import SongListData from "../json/SongList.json";

const DetailScreen = ({route}) => {
    const{
        title, 
        singer, 
        url, 
        date, 
        description, 
        image
    } = route.params;

    return(
        <ScrollView style={{backgroundColor:'#F2FCFC'}}>
            <View>
                <Image 
                    style={style.image}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={style.linkCard}>
                <Text style={style.songName}>{title}</Text>
                <Text style={style.singerName}>{singer}</Text>
                <Button 
                    onPress={()=>Linking.openURL(url)}
                    color="#5c99ed"
                    title="Listen on YouTube"
                />
            </View>
            <View style={style.description}>
                <Text>
                    <Text style={{fontSize:18, marginTop:15,fontWeight:'bold'}}>Issue Date:   </Text>
                    <Text style={{fontSize:14,lineHeight:20}}>{date}</Text>
                </Text>
                <Text style={{fontSize:18, marginTop:15,marginBottom: 5, fontWeight:'bold'}}>Descriptions: </Text>
                <Text style={{fontSize:14,lineHeight:20}}>{description}</Text>
            </View>
        </ScrollView>
    );
}


const style = StyleSheet.create({
    image:{
        height: 350,
        width: null
    },
    linkCard:{
        backgroundColor: '#fff',
        padding: 30,
        marginHorizontal: 10,
        marginTop: 10
    },
    songName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 33,
        marginVertical: 10,
    },
    singerName:{
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },
    description:{
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 10,
        marginTop: 10,
        
    }
});

export default DetailScreen;