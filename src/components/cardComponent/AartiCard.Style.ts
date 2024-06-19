import { StyleSheet } from "react-native";
import { appColors } from "../../themes/appColors";

export const styles = StyleSheet.create({
    buttonContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    card: {
        marginVertical: 10,
        backgroundColor: '#76b5c5',
        width: 150,
        height: 110,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: appColors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardTitle: {
        color: appColors.mainText,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 5,
    },
    cardImage: {
        width: 120,
        height: 80,
        borderRadius: 5,
    },
})