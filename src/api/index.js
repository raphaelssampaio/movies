import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import { getMovieYear } from '../functions'

export async function getMovies(startAt, endAt, allTime) {
  const BASE_URL = `https://www.myapifilms.com/imdb/top?start=1900&end=2020&token=${API_KEY}&format=json&data=1`

  let movies

  const response = await axios.get(BASE_URL)

  if (allTime === undefined) {
    movies = getMovieYear(response.data, startAt, endAt, false)
  } else {
    movies = getMovieYear(response.data, null, null, true)
  }

  return movies
}
