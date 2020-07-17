import React, { useEffect, useState, memo } from 'react'
import { FlatList } from 'react-native'
import MovieCard from './movieCard'
// import { getMovies } from '../../api'

function MovieList(props) {
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
      title: 'As tranças do rei careca',
      urlPoster:
        'https://em.wattpad.com/b43de7bff30678c4b053b3ba7e06521a548b17f5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6f54746659386f58653777726a513d3d2d3534333531323735302e313531386435633838646634303466633434353831343835373933332e6a7067?s=fit&w=720&h=720https://em.wattpad.com/b43de7bff30678c4b053b3ba7e06521a548b17f5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6f54746659386f58653777726a513d3d2d3534333531323735302e313531386435633838646634303466633434353831343835373933332e6a7067?s=fit&w=720&h=720',
      ranking: '1',
      year: '1959',
      rating: '9.5',
    },
    {
      title: 'A volta dos que não foram',
      urlPoster: 'https://m.media-amazon.com/images/I/51ACiqhiCxL.jpg',
      ranking: '2',
      year: '1940',
      rating: '9.3',
    },
  ]

  return (
    <FlatList
      renderItem={(item) => MovieCard(item, props)}
      data={list}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

export default memo(MovieList)
