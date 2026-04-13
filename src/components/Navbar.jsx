import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-black text-blue-600 flex flex-col sm:flex-row justify-between items-center px-4 py-3'>
            <Link to='/'>
                <h2 className='text-xl sm:text-2xl font-bold'>
                    Netmirror
                </h2>
            </Link>


            <div className='font-bold flex gap-4 sm:gap-6 mt-2 sm:mt-0'>
                <Link className='cursor-pointer' to='/'>Home</Link>
                <Link className='cursor-pointer' to='/favorites'>Favorites</Link>
            </div>

        </div>
    )
}

export default Navbar