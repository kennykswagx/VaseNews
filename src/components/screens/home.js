import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";


const Home = () =>  {
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.newsContainer}>
                    <TouchableOpacity style={styles.touchableNews}>
                        <View style={styles.vendor}>
                            <Text style={styles.vendorTxt}> CNN</Text>
                        </View>
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
        // borderWidth:1,
        width: '100%',
        paddingHorizontal: '1%'
    },
    touchableNews: {
        // borderWidth:1,
    },
    vendor:{},
    vendorTxt:{
        fontSize: 20,
        borderWidth: 1,
        width: '50%'
    }
})
export default Home;