

const SearchBar = ({ searchQuery, setSearchQuery, setFilter }) => {

    return (
        <>
            <form onSubmit={e => handleSearch(e)} className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 p-4  bg-gray-800 mt-20 sm:mt-14 '>
                <input type="text" placeholder='Search by movies...' className='w-full sm:w-auto text-white placeholder:text-white py-2 px-5 outline-0 bg-gray-700 rounded' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />

                <div className="flex gap-3 p-4 bg-gray-900 flex-wrap text-white rounded">
                    <select className='outline-0 cursor-pointer bg-gray-900' onChange={e => setFilter(prev => ({ ...prev, genre: e.target.value }))}>
                        <option value="">All Genres</option>
                        <option value="28">Action</option>
                        <option value="35">Comedy</option>
                        <option value="18">Drama</option>
                    </select>
                    <select className='outline-0 cursor-pointer bg-gray-900' onChange={e => setFilter(prev => ({ ...prev, rating: e.target.value }))}>
                        <option value="">All Ratings</option>
                        <option value="7">7+</option>
                        <option value="8">8+</option>
                    </select>
                    <select className='outline-0 cursor-pointer bg-gray-900' onChange={e => setFilter(prev => ({ ...prev, language: e.target.value }))}>
                        <option value="">All Languages</option>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="ko">Korean</option>
                    </select>
                </div>
            </form>
        </>


    )
}

export default SearchBar
