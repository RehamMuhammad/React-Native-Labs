import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {dummy_data, IMAGES} from '../../common'
import FastImage from 'react-native-fast-image';


const MovieCard = ({data}) => {
    return (
        <View style={styles.container}> 
            <View style={styles.leftContainer}/>
            <View style={styles.rightContainer}>
            <View style={styles.contentContainer} >
                <Text style={styles.headerText}>{data.Title}</Text>
                <Text style={styles.releaseText}>{`Released: ${data.Year}`}</Text>
                </View>
            </View>
            <FastImage
               source={
                   data.Poster !== 'N/A'? 
                   {uri: data.Poster}
                    : IMAGES.noMoviePhoto                  
                }
               style={styles.images}
          />
        </View>
    )
}

export {MovieCard};
