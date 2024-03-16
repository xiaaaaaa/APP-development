import React from "react";
import{StyleSheet, Text, View} from "react-native";


const Header = (props) =>{
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}>
            {props.title}
        </Text>
      </View>
    );
};


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
});

export default Header;