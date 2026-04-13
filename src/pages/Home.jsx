import { useEffect, useRef, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Movies from '../components/Movies'
import { fetchMovies, searchMovies } from '../services/api'
import Skeleton from '../components/Skeleton'

const Home = () => {

    const loadMoreRef = useRef(null)

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)


    const [filter, setFilter] = useState({ genre: '', rating: '', language: '' })


    //DEBOUNCED SEARCH
    const loadMovies = async (pageToFetch = 1, isLoadMore = false) => {
        // setLoading(true)
        setError(null)
        try {
            let data
            if (!searchQuery.trim()) {
                data = await fetchMovies(pageToFetch, filter)
            } else {
                data = await searchMovies(searchQuery, pageToFetch)
            }

            if (isLoadMore) {
                setMovies(prev => [...prev, ...(data?.results?.filter(result => !prev.some(movie => movie.id === result.id)))])
            } else {
                setMovies(data?.results)
                setHasMore(false)
            }

            setHasMore(pageToFetch < data?.total_pages)

        } catch (err) {
            setError('Error loading from server. See console for details.')
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setPage(1)
            loadMovies(1)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery, filter])

    //PAGINATION and INFINITE SCROLLING
    const handleLoadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        loadMovies(page, hasMore)
    }

    // INTERSECTION OBSERVER API
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                handleLoadMore()
            }
        })

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }

        return () => observer.disconnect()
    }, [page])

    if (error) return error
    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilter={setFilter} />


            {loading && <Skeleton />}

            {movies?.length ? <Movies movies={movies} /> : <div className='h-screen bg-gray-800 flex items-center justify-center'><h2 className='-translate-y-20  text-6xl'>No Result Found</h2></div>}



            {/* pagination */}
            {/* {hasMore && !loading && <div className="flex justify-center p-3 bg-gray-700">
                <button
                    onClick={handleLoadMore}
                    className="bg-red-500 px-6 py-2 rounded text-white cursor-pointer"
                >
                    Load More
                </button>
            </div>} */}

            {/* EMPTY DIV WHICH IS BEING OBSERVED BY INTERSECTION OBSERVER AND ON REACHING WHICH MORE DATA WILL LOAD */}
            <div ref={loadMoreRef}></div>
        </>
    )
}

export default Home
