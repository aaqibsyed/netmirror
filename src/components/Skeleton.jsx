import React from 'react'
import SkeletonCard from './SkeletonCard'

const Skeleton = () => {
    return (
        <div className='h-screen flex flex-wrap gap-4 p-4  bg-gray-800 overflow-y-auto items-start justify-center sm:justify-start'>
            {Array.from({length:20})?.map((_,idx) => {
                return <SkeletonCard key={idx} />
            })}

        </div>
    )
}

export default Skeleton
