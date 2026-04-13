import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </MovieProvider>
    </>
  )
}

export default App
