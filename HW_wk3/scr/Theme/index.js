import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        light400:'#6200EE',
        primary700:'#a8a29e',
    }
};

export default MyTheme;