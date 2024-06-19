import { StyleSheet } from "react-native";
import { appColors } from "../../themes/appColors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.secondary,
    },
    content: {
        paddingHorizontal: 8,
        paddingBottom: 5,
        backgroundColor: appColors.primary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: appColors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    headerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        marginTop: 15,
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: appColors.white,
        margin: 8,
        borderRadius: 8
    },
    title: {
        color: appColors.black,
        fontSize: 18,
        fontWeight: 'bold',
        borderLeftWidth: 4,
        borderColor: appColors.primary,
        paddingHorizontal: 10,
    },

});
