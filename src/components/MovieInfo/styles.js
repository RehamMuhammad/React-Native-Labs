import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor:COLORS.spaceCadet,
    flexDirection:'row',
    height: 250,
  },
  leftContainer:{
      backgroundColor:COLORS.spaceCadet,
      width:'40%',
      height:'100%',
      borderRadius:10,
  },
  rightContainer:{
    width:'60%',
    height:'100%',
  },
  contentContainer:{
    marginTop:40,
    },
    headerText:{
      color:COLORS.white,
      fontFamily: FONTS.bold,
      marginStart:20,
      fontSize:20
    },
    releaseText:{
      color:COLORS.white,
      fontFamily: FONTS.medium,
      marginStart:25,
      marginTop:14,
      fontSize:16
    },
    images:{
      width:130,
      height:190,
      position:'absolute',
      borderRadius:15,
      bottom:37,
      left:15
    }
});