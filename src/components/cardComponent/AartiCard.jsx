import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './AartiCard.Style';

const Card = ({ title, image, onPress }) => (
    <Pressable onPress={onPress}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Image style={styles.cardImage} source={{ uri: image }} />
        </View>
    </Pressable>
);

const AartiCard = ({ navigation }) => {
    const cards = [
        {
            title: 'श्री हनुमान जी',
            image: 'https://static.vecteezy.com/system/resources/previews/029/631/173/large_2x/3d-illustration-of-the-indian-god-hanuman-with-a-floral-background-surrounding-it-free-photo.jpeg'
        },
        // {
        //     title: 'महादेव जी',
        //     image: 'https://static.sadhguru.org/d/46272/1664421322-shiva-wallpaper-blue-purple-sky.jpg'
        // }
    ];

    return (
        <>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    onPress={() => navigation.navigate('AartiScreen')}
                />
            ))}
        </>
    );
};

export default AartiCard;
