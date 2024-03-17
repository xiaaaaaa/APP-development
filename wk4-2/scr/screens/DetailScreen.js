import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from "react-native";

const DetailScreen = ({route}) => {
    const{title, 
        singer, 
        url, 
        date, 
        description, 
        image
    } = route.parms;

    return(
        <ScrollView>
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
                    title="Listen on YouTube"
                />
            </View>
            <View style={style.description}>
                <Text>
                    <Text style={{fontWeight:'bold'}}>Issue Date: </Text>
                    {date}
                </Text>
                <Text style={{marginTop:15, fontWeight:'bold'}}>Descriptions: </Text>
                <Text style={{lineHeight:18}}>{'\t'}{description}</Text>
            </View>
        </ScrollView>
    );
}


const style = StyleSheet.create({
    image:{
        height: 200,
        width: null
    },
    linkCard:{
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10
    },
    songName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
        marginVertical: 20,
    },
    singerName:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    description:{
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10
    }
});

export default DetailScreen;