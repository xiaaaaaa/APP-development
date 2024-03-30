import React from "react";
import { Image, StyleSheet } from "react-native";
import { HStack } from "@gluestack-ui/themed";

const Stars = ({stars})=>{
    if(stars===3){
      return(
        <HStack style={styles.stars}>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/star_empty.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/star_empty.png")} style={{ width: 14, height: 14 }}/>        
        </HStack>
      )
    }
    else if(stars===4){
      return(
        <HStack style={styles.stars}>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
          <Image source={require("../images/star_empty.png")} style={{ width: 14, height: 14 }}/>        
        </HStack>
      )
    }
    else return null;
    // return(
    //     <HStack space="none">
    //        <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //        <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //        <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //        <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //        <Image source={require("../images/star_empty.png")} style={{ width: 14, height: 14 }}/>        
    //     </HStack>
    // )

    // <HStack space="none">
    //    <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //    <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //    <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //    <Image source={require("../images/Star_fill.png")} style={{ width: 14, height: 14 }}/>
    //    <Image source={require("../images/star_empty.png")} style={{ width: 14, height: 14 }}/>        
    // </HStack>
}

const styles = StyleSheet.create({
    stars:{
      display:'flex',
      width: 86,
      height:14,
      justifyContent:'space-between',
      //marginTop:5,
      marginBottom:5,
    },
});

export default Stars;