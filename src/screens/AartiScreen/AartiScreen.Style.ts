import { StyleSheet } from "react-native";
import { appColors } from "../../themes/appColors";

export const styles = StyleSheet.create({
    mainCnt: {
        flex: 1,
        backgroundColor: appColors.secondary,
    },
    topHeading: {
        marginVertical: 10,
        alignSelf: 'center',
        width: 180,
        height: 180,
    },
    aartiCnt: {
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: appColors.white,
        borderRadius: 15
    },
    aartiUnderCnt: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    aartiText: {
        color: appColors.black,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    aartiPara: {
        color: appColors.black,
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 15
    }

});