
import React from 'react';
import { FlatList } from 'react-native';
import { MovieCard } from '..';
import styles from './styles';



function MovieList({data}) {
const renderItem = ({item}) => <MovieCard data={item} />
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}

        />
            
    )
}

export {MovieList};
