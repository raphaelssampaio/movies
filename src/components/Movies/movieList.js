import React from 'react'
import { FlatList } from 'react-native'
import MovieCard from './movieCard'

function MovieList() {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle:
        'Vice President Vice President Vice President Vice President Vice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle:
        'Vice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice ChairmanVice Chairman',
    },
  ]

  return (
    <FlatList
      renderItem={MovieCard}
      data={list}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

export default MovieList
