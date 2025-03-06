import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface logoProps {
    fontSize?: number,
}

const BanterBoxLogo: React.FC<logoProps> = ({fontSize}) => {
  return (
    <View style={styles.wrapper}>
        <Text style={[styles.logo, {fontSize: fontSize ? fontSize : 35}]}>BanterBox</Text>
    </View>
  )
}

export default BanterBoxLogo;

const styles = StyleSheet.create({
    wrapper: {
        padding: 0,
    },
    logo: {
        color: '#086e5a',
        fontWeight: 'bold',
    }
});