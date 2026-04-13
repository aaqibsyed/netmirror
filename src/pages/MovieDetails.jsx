import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails, fetchMovieVideos } from '../services/api'
import MovieDetailsCard from '../components/MovieDetailsCard'

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    const [trailerKey, setTrailerKey] = useState(null)
    const [showTrailer, setShowTrailer] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        const loadMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(id)
                setMovie(data)
                const videosData = await fetchMovieVideos(id)
                console.log(videosData)
                const trailer = videosData?.results.find(video=>video?.type?.toLowerCase() === 'trailer' && video?.site?.toLowerCase() === 'youtube')

                if(trailer) setTrailerKey(trailer.key)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadMovieDetails()
    }, [])
    if (loading) return (<div className='h-screen bg-gray-800 flex items-center justify-center'><h2 className='-translate-y-20  text-6xl'>Loading...</h2></div>)
    return (
        <MovieDetailsCard movie={movie} trailerKey={trailerKey} showTrailer={showTrailer} setShowTrailer={setShowTrailer} />
    )
}

export default MovieDetails
