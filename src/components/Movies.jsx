import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({ movies }) => {
    return (

        <div id='movies' className='h-screen flex flex-wrap gap-4 p-4  bg-gray-800 overflow-y-auto items-start justify-center sm:justify-start'>
            {movies?.map((movie) => {
                return <MovieCard key={movie?.id} movie={movie} />
            })}

        </div>
    )
}

export default Movies
