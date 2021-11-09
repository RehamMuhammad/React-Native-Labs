import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View,Text} from 'react-native'

const Movie = () => {

const route = useRoute();
console.log(route)

    console.log()
    return (
        <View>
            <Text>{'Movie Screen'}</Text>
        </View>
    )
}

export default Movie
