import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {MovieCard, SearchBar} from '../../components';
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
    const data = await getAllMovies("me before you");
    console.log("reham")
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={value}
        onChange={val => setValue(val)}
        onPress={() => {}}
      />
      <Header text={true? 'Search Results' : 'Recent Searches'} />
      <MovieCard />
    </View>
  );
}
