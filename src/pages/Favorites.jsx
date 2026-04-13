import React, { useEffect, useState } from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import Skeleton from '../components/Skeleton'

const Favorites = () => {

  const { favorites } = useMovieContext()

  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const [filter, setFilter] = useState({ genre: '', rating: '', language: '' })



  useEffect(() => {
  try {
    let data = favorites

    // Search
    if (searchQuery.trim()) {
      data = data.filter(fav =>
        fav.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Genre
    if (filter.genre) {
      const genre = Number(filter.genre)

      data = data.filter(fav => {
        const ids =
          fav.genre_ids ||
          fav.genres?.map(g => g.id) ||
          []

        return ids.includes(genre)
      })
    }

    // Rating
    if (filter.rating) {
      data = data.filter(fav =>
        fav.vote_average >= Number(filter.rating)
      )
    }

    // Language
    if (filter.language) {
      data = data.filter(fav =>
        fav.original_language === filter.language
      )
    }

    setMovies(data)
  } catch (err) {
    console.log(err)
  } finally {
    setLoading(false)
  }
}, [searchQuery, favorites, filter])

  return (

    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilter={setFilter} />

      {loading && <Skeleton />}

      {movies?.length ? (<div id='movies' className='h-screen flex flex-wrap gap-4 p-4  bg-gray-800 overflow-y-auto items-start justify-center sm:justify-start'>
        {movies?.map((movie) => {
          return <MovieCard key={movie?.id} movie={movie} />
        })}
      </div>) : <div className='h-screen bg-gray-800 flex items-center justify-center'><h2 className='-translate-y-20  text-6xl'>No Result Found</h2></div>}

    </>
  )
}

export default Favorites
