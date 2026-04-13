import { Star, Heart } from 'lucide-react';
import { useMovieContext } from '../contexts/MovieContext';

const MovieDetailsCard = ({ movie, trailerKey, showTrailer, setShowTrailer }) => {
    console.log(movie)

    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()

    const favorite = isFavorite(movie?.id)

    const handleClick = () => {
        if (favorite) removeFromFavorites(movie?.id)
        else addToFavorites(movie)
    }

    return (
        <div className='bg-gray-800 min-h-screen' >
            <div className='flex flex-col sm:flex-row items-center justify-center mt-14 gap-10 mx-5 p-10'>


                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/300x450"
                    }
                    alt={movie?.title}
                    className=' w-full rounded-lg shadow-lg h-auto'
                />


                <div className='flex flex-col gap-10'>
                    <h2 className='text-6xl font-extrabold'>{movie?.title}</h2>
                    <h2 className='text-2xl font-bold'>{movie?.release_date.split("-")[0]}</h2>
                    <h2 className='flex items-center gap-5'><Star fill='yellow' size={60} /> <span className='text-lg text-yellow-400 font-medium'>{movie?.vote_average}</span></h2>
                    <button
                        onClick={handleClick}
                        className={`px-4 py-2 rounded ${favorite ? 'bg-red-500' : 'bg-gray-700'} cursor-pointer`}
                    >
                        {favorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
                    </button>
                    {trailerKey && (
                        <button
                            onClick={() => setShowTrailer(true)}
                            className="bg-red-600 px-4 py-2 rounded cursor-pointer"
                        >
                            ▶ Watch Trailer
                        </button>
                    )}
                    <p className='text-xl font-bold'>{movie?.overview}</p>
                </div>
            </div>
            {showTrailer && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowTrailer(false)}>

                    <div className="relative w-[90%] md:w-200">

                        <button
                            onClick={() => setShowTrailer(false)}
                            className="absolute -top-10 right-0 text-white text-xl cursor-pointer"
                        >
                            ✖
                        </button>

                        <iframe
                            width="100%"
                            height="450"
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            title="Trailer"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>

                    </div>
                </div>
            )}
        </div>

    )
}

export default MovieDetailsCard
