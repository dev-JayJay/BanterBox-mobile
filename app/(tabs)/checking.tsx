import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Checking() {
    return (
        <View style={styles.componentWrapper}>
            <View style={styles.screenContainer}>
                <Text style={styles.componentText}>I am checking the check component</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        backgroundColor: 'white',
    },
    screenContainer: {
        width: '95%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    componentText: {
        color: 'red',
    }
});