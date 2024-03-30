import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Linking } from "react-native";
import SongListData from "../json/SongList.json";
import Stars from "../components/Stars.js";
import { 
    HStack,
    Center, 
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
} from "@gluestack-ui/themed";

const DetailScreen = ({route}) => {
    const{
        title, 
        singer, 
        url, 
        date, 
        description, 
        image,
        stars,
        price,
    } = route.params;

    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
            <Center>
                <Center>
                    <Image 
                        style={style.image}
                        source={{
                            uri: image
                        }}
                    />
                </Center>
                <View style={style.card}>
                    <Text style={style.songName}>{title}</Text>
                    <Text style={style.singerName}>{singer}</Text>

                    <HStack style={style.starList}>
                        <View style={style.stars}>
                            {stars > 0? <Stars stars={stars}/> : null}
                        </View>
                        <HStack style={style.starText}>
                            <Text style={style.starNumber}>{stars}.0</Text>
                            <Text style={style.starWholeNumber}> / 5.0</Text>
                        </HStack>
                    </HStack>

                    <View style={style.description}>
                        <Text style={style.description}>{description}</Text>
                    </View>
                </View>
                
                <Button size="md" variant="solid" action="primary" style={style.btn}>
                    <ButtonText style={style.btnText}>Buy Now for ${price}</ButtonText>
                </Button>

            </Center>
            
        </ScrollView>
    );
}


const style = StyleSheet.create({
    image:{
        height: 300,
        width: 210,
        shadowColor:'#414144',
        shadowOffset: { width: 0, height: 16},
        shadowOpacity: 1,
        marginBottom:20,
    },
    card:{
        width:360,
        height:164,
        margin:0,
        // backgroundColor: '#fff',
        // borderColor:'#000',
        // borderWidth:2,
        
        marginTop: 10,
        marginBottom:35,
    },
    songName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        fontWeight:'500',
        marginBottom:8,
    },
    singerName:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'400',
        color:'#666666',
        marginBottom:8,
    },
    starList:{
        marginLeft:'auto',
        marginRight:'auto',
    },
    stars:{
        paddingTop:2,
    },
    starText:{
        marginLeft:10,
    },
    starNumber:{
        color:'#131313',
        fontSize:14,
        fontWeight:'400',
    },
    starWholeNumber:{
        color:'#666666',
        fontSize:14,
        fontWeight:'400',
    },
    description:{
        color:'#131313',
        fontSize:14,
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:1.2,
        textAlign:'center',
        marginTop:4,
    },
    btn:{
        width:200,
        padding:0,
        backgroundColor:'#6200EE',
    },
    btnText:{
        fontSize:14,
        fontWeight:'500',
        letterSpacing:1,
        textTransform:'uppercase',
        margin:0,
    }
});

export default DetailScreen;