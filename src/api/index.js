import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'

// export function getMovies(startAt, endAt) {
export async function getMovies() {
  const startAt = '2010'
  const endAt = '2019'
  // const API_KEY = '79216e60-59e4-4647-96fb-6e74201a74b5'
  const BASE_URL = `https://www.myapifilms.com/imdb/top?start=${startAt}&end=${endAt}&token=${API_KEY}&format=json&data=0`

  const response = await axios.get(BASE_URL)

  return response.data
}
