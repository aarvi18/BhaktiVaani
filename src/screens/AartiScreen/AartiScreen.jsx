import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './AartiScreen.Style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import { appColors } from '../../themes/appColors';
// import GodImage from '../../images/Hanuman.png'

const AartiScreen = () => {


  return (
    <SafeAreaView style={styles.mainCnt}>
      <YoutubePlayer
        height={200}
        videoId={"r7GJ8GoGSD8"}
      // onPlaybackQualityChange={'Small'}
      />
      <ScrollView>
        {/* <Image style={styles.topHeading} source={require('../../images/Hanuman.png')} /> */}
        <View style={styles.aartiCnt}>
          <View style={styles.aartiUnderCnt}>
            <Text style={styles.aartiText}>हनुमान जी की आरती</Text>
            <Text style={styles.aartiPara}>
              आरती कीजै हनुमान लला की।{"\n"}दुष्ट दलन रघुनाथ कला की।। {"\n"}
              जाके बल से गिरिवर कांपे।{"\n"}रोग दोष जाके निकट न झांके।।
            </Text>
            <Text style={styles.aartiPara}>
              अंजनि पुत्र महाबलदायी।{"\n"}संतान के प्रभु सदा सहाई।।{"\n"}
              दे बीरा रघुनाथ पठाए।{"\n"}लंका जारी सिया सुध लाए।।
            </Text>
            <Text style={styles.aartiPara}>
              लंका सो कोट समुद्र सी खाई।{"\n"}जात पवनसुत बार न लाई।।{"\n"}
              लंका जारी असुर संहारे।{"\n"}सियारामजी के काज संवारे।।
            </Text>
            <Text style={styles.aartiPara}>
              लक्ष्मण मूर्छित पड़े सकारे।{"\n"}आणि संजीवन प्राण उबारे।।{"\n"}
              पैठी पताल तोरि जमकारे।{"\n"}अहिरावण की भुजा उखाड़े।।
            </Text>
            <Text style={styles.aartiPara}>
              बाएं भुजा असुर दल मारे।{"\n"}दाहिने भुजा संतजन तारे।।{"\n"}
              सुर-नर-मुनि जन आरती उतारे।{"\n"}जै जै जै हनुमान उचारे।।{"\n"}
            </Text>
            <Text style={styles.aartiPara}>
            कंचन थार कपूर लौ छाई।{"\n"}आरती करत अंजना माई।।{"\n"}
            लंकविध्वंस कीन्ह रघुराई।{"\n"}तुलसीदास प्रभु कीरति गाई।।{"\n"}
            </Text>
            <Text style={styles.aartiPara}>
            जो हनुमानजी की आरती गावै।{"\n"}बसी बैकुंठ परमपद पावै।।{"\n"}
            </Text>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AartiScreen