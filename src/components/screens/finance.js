import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { width, height } from "../dimensions/Dimensions";

const FinanceScreen = () =>  {
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.newsContainer}>
                    <TouchableOpacity style={styles.touchableNews}>
                        <Text>NEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWSNEWS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {},
    container:{
        borderWidth:1,
    },
    newsContainer:{
        borderWidth:1,
        // paddingHorizontal: 100,
        
    },
    touchableNews: {
        borderWidth:1,
    },
})
export default FinanceScreen;