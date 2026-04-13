import React from 'react'
import { Heart } from 'lucide-react';
import { useMovieContext } from '../contexts/MovieContext';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()

    const favorite = isFavorite(movie?.id)

    const navigate = useNavigate()

    const handleClick = () => {
        if (favorite) removeFromFavorites(movie?.id)
        else addToFavorites(movie)
    }
    return (
        <>
            <div key={movie.id} className='bg-gray-400 rounded-lg overflow-hidden shadow-md w-57 max-w-xs h-110 hover:scale-102 hover:border-4 hover:border-black active:scale-95'>
                <div className='relative'>
                    <Heart fill={favorite ? "red" : "white"} onClick={handleClick} size={30} className={`absolute top-2 right-2 hover:scale-150 cursor-pointer ${favorite && 'text-red-500'}`} />
                    <img
                        onClick={() => navigate(`/movie/${movie?.id}`)}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie?.title}
                        className='w-full  object-contain cursor-pointer'
                    />
                </div>

                <div className='p-4 flex flex-col justify-between'>
                    <h2 className='font-extrabold text-lg line-clamp-2'>{movie?.title}</h2>
                    <h2 className='font-bold text-sm text-gray-700 mt-auto'>{movie?.release_date?.split("-")[0]}</h2>
                </div>

            </div>

        </>
    )
}

export default MovieCard