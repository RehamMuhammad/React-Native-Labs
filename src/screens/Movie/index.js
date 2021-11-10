import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import { getMovieDetails } from '../../services/getMovieDetails';
import {MovieInfo} from '../../components/MovieInfo/'

const Movie = () => {

const [movieData, setMovieData] = useState([]);

const route = useRoute();
console.log(route.params.id);
let movieId = route.params.id;

(async (movieId)=>{

    const res = await getMovieDetails(movieId)
     console.log(res) 
     setMovieData(res)
  })(movieId)





  return (
        <View>
            <Text>{'Movie Screen'}</Text>
           <MovieInfo movieData={movieData}/>
        </View>
    )
}

export default Movie
