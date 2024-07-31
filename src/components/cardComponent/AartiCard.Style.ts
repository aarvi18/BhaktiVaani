import { StyleSheet } from "react-native";
import { appColors } from "../../themes/appColors";

export const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    },
    card: {
        margin: 10, // Add margin to space out the cards
        backgroundColor: appColors.primary,
        width: 150,
        height: 120,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: appColors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.65,
        elevation: 6,
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
});
