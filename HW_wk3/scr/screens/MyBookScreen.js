import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const MyBookScreen = () => {
    return(
        <Text style={styles.text}>The MyBook Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default MyBookScreen;