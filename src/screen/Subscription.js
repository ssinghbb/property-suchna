import { View, Text, Image, StyleSheet, Button, Dimensions, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';
import { themeStyles } from "../../styles";
import CustomeButton from "../components/common/CoustomButton";

export default function Subscription() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    const data = [
        {
            id: '1', title: 'Basic Plan', price: '123.00', details: [
                { desc: 'Access to a limited selection of post reels and photos.' },
                { desc: 'Monthly newsletter with curated content.' },
                { desc: 'Basic customer support..' },
            ]
        },
        {
            id: '2', title: 'Advance Plan', price: '223.00', details: [
                { desc: 'Access to a advance selection of post reels and photos.' },
                { desc: 'Monthly newsletter with curated content.' },
                { desc: 'Basic customer support..' },
            ]
        },
        {
            id: '3', title: 'Premium Plan', price: '323.00', details: [
                { desc: 'Access to a premium selection of post reels and photos.' },
                { desc: 'Monthly newsletter with curated content.' },
                { desc: 'Basic customer support..' },
            ]
        },
        // Add more card data as needed
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={{ paddingTop: 10 }}>
                    <CustomeButton title={`Monthly price ${item.price}`} />

                </View>
                <Text style={[styles.cardTitle, { paddingTop: 10 }]}>Features</Text>
                <View style={{ paddingTop: 30 }}>
                    <FlatList
                        data={item.details}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginBottom: 5, }}>
                                    <Text style={styles.heading1}>* {item.desc}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles?.subscription}>
            {/* <Text style={{color:'white'}}>hhh</Text> */}
            <View style={styles.container}>
                <View style={styles?.imgDiv}>
                    <Image style={styles.logo} source={require("../../assets/logo.png")} />
                </View>
                <View>
                    <Text style={styles.cardTitle}>Unlimited Post and have a access </Text>
                </View>

                <View>
                    <Text style={[styles.heading1, styles.heading2]}>This subscription plan offers customers a choice of access levels, catering to various needs and preferences while allowing your service to generate revenue </Text>
                </View>
                <View style={styles.carousel}>
                    <Carousel
                        data={data}
                        renderItem={renderItem}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth * 0.7}
                        layout="default"
                        loop
                    />
                </View>
                {/* <View style={{ flex: 4 }}>
                    <View style={styles?.btnDiv}>
                        <Button title="Login" />
                    </View>
                    <View style={styles?.btnDiv}>
                        <Button title="Sign Up" />
                    </View>
                </View> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    subscription: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
    ,
    container: {
        flex: 1,
        alignItems: 'center',

        // flexDirection: "column",
    },
    imgDiv: {
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        marginTop: '20%'
    },
    btnDiv: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
    },
    logo: {
        height: 45,
        width: 90,
    },
    heading1: {
        color: "white",
        paddingTop: 10
    },
    heading2: {
        paddingHorizontal: 50,
        textAlign: 'center',
        color: 'gray'
    },
    card: {
        marginTop: 20,
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 20,
        marginLeft: 20,
        marginRight: 10,
        width: 250,
        height: 390,
        borderWidth: 1,
        borderColor: themeStyles.primaryColor,
        // width: screenWidth * 0.7,
        // height: screenHeight * 0.5,
        alignItems: 'center',

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',

        // flex: 1
    },
    carousel: {
        // backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        display: 'flex'
    }
});
