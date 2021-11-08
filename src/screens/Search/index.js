import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {dummy_data} from '../../common';
import {MovieCard, MovieList, SearchBar} from '../../components';
import {Header} from '../../components';
import {getAllMovies} from '../../services';
import {client} from '../../services/client';
import styles from './styles';

export default function Search() {
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   getData();
  // }, []);

  const getData = async (_vaule) => {
    const res = await getAllMovies(_vaule);
    console.log(res);
  };

  const onChangeText = async (_vaule) => {
    setValue(_vaule);
    await getData(_vaule);

  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <SearchBar
      //  value={value}
        onChange={(val) => onChangeText(val)}
        onPress={() => {}}
      />
      <Header text={true ? 'Search Results' : 'Recent Searches'} />
      </View>
      <MovieList data={dummy_data} />
    </View>
  );
}
