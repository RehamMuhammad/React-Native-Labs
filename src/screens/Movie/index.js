import { useRoute } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View,Text} from 'react-native';
import { getMovieDetails } from '../../services/getMovieDetails';

const Movie = () => {

const route = useRoute();
console.log(route.params.id);

useEffect(() => {
    
    getMovieDetails(route.params.id)
}, [])

    console.log()
    return (
        <View>
            <Text>{'Movie Screen'}</Text>
        </View>
    )
}

export default Movie
