import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


const Home = () =>  {
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.newsContainer}>
                    <TouchableOpacity style={styles.touchableNews}>
                        <View style={styles.vendor}>
                            <Text style={styles.vendorTxt}> CNN</Text>
                        </View>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </TouchableOpacity>
                    <Icons name='chevron-left' size={30} color={'blue'}/>
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