import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SearchBar} from '../../components';
import {getAllMovies} from '../../services';
import {client} from '../../services/client';
import styles from './styles';

export default function Search() {
  const [value, setValue] = useState('');

  useEffect(() => {
    _onLoad();
  }, []);

  const _onLoad = async () => {
    const data = await axios.get(
      'http://www.omdbapi.com/?i=tt3896198&apikey=cae06b86',
    );
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={value}
        onChange={val => setValue(val)}
        onPress={() => {}}
      />
    </View>
  );
}
