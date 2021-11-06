import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../common";

export default StyleSheet.create({
    container:{
        marginTop:20,
    },
    headerText: {
        fontFamily:FONTS.medium,
        color:COLORS.white,
        fontSize:16,
    },
    divider:{
        width:155,
        paddingBottom:20,
        borderBottomColor:COLORS.sun,
        borderBottomWidth:2,
    }
})