import React, { useEffect, useState, memo } from 'react'
import { FlatList } from 'react-native'
import MovieCard from './movieCard'
import { getMovies } from '../../api'

function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await getMovies()
      setMovies(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    console.log('Filmes', movies)
  }, [movies])

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

export default memo(MovieList)
