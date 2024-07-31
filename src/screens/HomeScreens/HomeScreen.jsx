import { SafeAreaView, StatusBar, View, Image, Text } from 'react-native';
import React from 'react';
import { styles } from './HomeScreen.Style';
import { appColors } from '../../themes/appColors.js';
import AartiCard from '../../components/cardComponent/AartiCard.jsx';

const HomeScreen = ({ navigation }) => {

  const URLIMAGE = 'https://www.bachpanglobal.com/blog/wp-content/uploads/2023/09/banner-860x280.jpg';


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={appColors.primary} barStyle="light-content" />
      <View style={styles.content}>
        <Image style={styles.headerImage} source={{ uri: URLIMAGE }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>सभी देवी देवताओं की आरती।</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <AartiCard navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
