import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, View, FlatList, Text, ActivityIndicator} from 'react-native';
import {COLORS, dummy_data} from '../../common';
import {MovieCard, MovieList, SearchBar} from '../../components';
import {Header} from '../../components';
import {getAllMovies} from '../../services';
import {client} from '../../services/client';
import styles from './styles';
import _ from 'lodash'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import {storeMovie} from "../../store/actions"

export default function Search() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
 const dispatch = useDispatch();
 const movies = useSelector(state => state.movies)

console.log(movies)
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async (_vaule) => {
  //   const res = await getAllMovies(_vaule);
  //   console.log(res);
  // };

 // memoization with debouncing
  const getData = useCallback( 
    _.debounce( async (_vaule) => {
      setLoading(true)
    const res = await getAllMovies(_vaule);
    console.log(res);
    setData(res)
    setLoading(false)
  }, 1000), [],)


//On Press Movie
const onPressMovie = (movie) => {
  dispatch(storeMovie(movie))

}


  //handle the serch keyword using search input value
  const onChangeText = async (_vaule) => {
    setValue(_vaule);
    await getData(_vaule);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <SearchBar
       value={value} 
        onChange={(val) => onChangeText(val)}
        onPress={() => {}}
      />
      <Header text={!data ? 'Recent Searches' : 'Search Results' } />
      </View>
      {loading? <ActivityIndicator color={COLORS.sun} style={styles.activityIndicator}/> : <MovieList data={data} onPress={(item) => onPressMovie(item)} /> }
    </View>
  );
}
