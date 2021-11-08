import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {dummy_data} from '../../common';
import {MovieCard, MovieList, SearchBar} from '../../components';
import {Header} from '../../components';
import {getAllMovies} from '../../services';
import {client} from '../../services/client';
import styles from './styles';
import _ from 'lodash'

export default function Search() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async (_vaule) => {
  //   const res = await getAllMovies(_vaule);
  //   console.log(res);
  // };

  const getData = useCallback( 
    _.debounce( async (_vaule) => {
    const res = await getAllMovies(_vaule);
    console.log(res);
    setData(res)

  }, 1000), [],)

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
      <Header text={true ? 'Search Results' : 'Recent Searches'} />
      </View>
      <MovieList data={data} />
    </View>
  );
}
