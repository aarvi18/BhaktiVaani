import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './AartiCard.Style'
import React from 'react'

const AartiCard = ({ navigation }) => {

    const VISHNUJI = 'https://www.templepurohit.com/wp-content/uploads/2015/07/Lord-Vishnu-Hindu-Gods-and-Deities.jpg';
    const HANUMANJI = 'https://mir-s3-cdn-cf.behance.net/projects/404/cc2060189699933.Y3JvcCwyMjQ4LDE3NTgsMCwxMDg1.jpg';

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('AartiScreen')}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>विष्णु जी</Text>
                    <Image style={styles.cardImage} source={{ uri: VISHNUJI }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AartiScreen')}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>हनुमान जी</Text>
                    <Image style={styles.cardImage} source={{ uri: HANUMANJI }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AartiCard