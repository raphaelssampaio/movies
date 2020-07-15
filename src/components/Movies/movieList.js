import React, { useEffect, useState, memo } from 'react'
import { FlatList } from 'react-native'
import MovieCard from './movieCard'
// import { getMovies } from '../../api'

function MovieList() {
  const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   async function getData() {
  //     const response = await getMovies()
  //     setMovies(response.data)
  //   }
  //   getData()
  // }, [])

  // useEffect(() => {
  //   console.log('Filmes', movies)
  // }, [movies])

  /* Retorno da função:
    title
    ranking
    rating
    urlPoster
    year  
  */

  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      ranking: '1',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      ranking: '2',
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
