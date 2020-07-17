export function getTopTen(array) {
  const topTen = array
    .sort(function (a, b) {
      return a.rating < b.rating ? 1 : -1
    })
    .slice(0, 10)
  return topTen
}

export function getMovieYear({ data }, startAt, endAt, allTime) {
  const { movies } = data
  let yearList = []

  if (allTime) {
    return movies
  }

  movies.map((movie) => {
    if (endAt !== undefined) {
      if (
        String(movie.year).valueOf() >= startAt &&
        String(movie.year).valueOf() < endAt
      ) {
        yearList.push(movie)
      }
      if (String(movie.year).valueOf() <= 1959) {
        yearList.push(movie)
      }
    }
  })

  return yearList
}

export function getDrawerYear(title) {
  const year = {
    "2010's Top 10": { startAt: 2010, endAt: 2019 },
    "2000's Top 10": { startAt: 2000, endAt: 2009 },
    "90's Top 10": { startAt: 1990, endAt: 1999 },
    "80's Top 10": { startAt: 1980, endAt: 1989 },
    "70's Top 10": { startAt: 1970, endAt: 1979 },
    "60's Top 10": { startAt: 1960, endAt: 1969 },
    "50's and less Top 10": { endAt: 1959 },
  }

  return year[title] || { allTime: true }
}
