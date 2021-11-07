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

  useEffect(() => {
    _onLoad();
  }, []);

  const _onLoad = async () => {
    const data = await getAllMovies('me before you');
    console.log('reham');
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <SearchBar
        value={value}
        onChange={val => setValue(val)}
        onPress={() => {}}
      />
      <Header text={true ? 'Search Results' : 'Recent Searches'} />
      </View>
      <MovieList data={dummy_data} />
    </View>
  );
}
