import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

export default function App() {
    return(
        <View style={styles.container}>
            {/* Single Restaurant Item */}
            <View style={styles.restaurantContainer}>
                <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'}}
                style={styles.image}
                />
                <Text style={styles.title}>El Cabo Coffee Bar Tres De May</Text>
                <Text style={styles.subtitle}>$1.99 15-30 minutes</Text>

            </View>
        
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    restaurantContainer:{
        width: "100%",
    },
    image: {
        width: "100%",
        aspectRatio: 5/3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
        
    }
});

