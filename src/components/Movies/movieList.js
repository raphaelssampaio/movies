import React, { useEffect, useState, memo } from 'react'
import { FlatList } from 'react-native'
import MovieCard from './movieCard'
import { getMovies } from '../../api'
import { getTopTen } from '../../functions'

function MovieList(props) {
  const [movies, setMovies] = useState([])
  const { startAt, endAt, allTime } = props

  useEffect(() => {
    async function getData() {
      const response = await getMovies(startAt, endAt, allTime)

      setMovies(getTopTen(response))
    }
    getData()
  }, [])

  return (
    <FlatList
      renderItem={(item) => MovieCard(item, props)}
      data={movies}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

export default memo(MovieList)
