import {  StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import FitnessCards from '../components/FitnessCards';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
       
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Home WorkOut</Text>
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLabel}>WORKOUTS</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLabel}>KCAL</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLabel}>MINS</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
                            }}
                        />
                    </View>
                </View>
                <FitnessCards />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        backgroundColor: "#CD853F",
        padding: 10,
        width: "100%",
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    statsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    statItem: {
        alignItems: "center",
    },
    statValue: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
    },
    statLabel: {
        color: "#D0D0D0",
        fontSize: 17,
        marginTop: 6,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "90%",
        height: 120,
        marginTop: 20,
        borderRadius: 7,
    },
});
