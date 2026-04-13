const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

export const fetchMovies = async (page = 1, filter = { genre: '', rating: '', language: '' }) => {

    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`

    if (filter?.genre) url += `&with_genres=${filter?.genre}`

    if (filter?.rating) url += `&vote_average.gte=${filter?.rating}`

    if (filter?.language) url += `&with_original_language=${filter?.language}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const searchMovies = async (searchQuery, page = 1) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&page=${page}`)
    const data = await response.json()
    return data
}

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
}

export const fetchMovieVideos = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    const data = await response.json()
    return data
}