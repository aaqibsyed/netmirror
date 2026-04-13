import React from 'react'

const SkeletonCard = () => {
    return (
        <>
            <div className="w-57 max-w-xs rounded-lg overflow-hidden bg-gray-700 animate-pulse h-110">

                {/* Image */}
                <div className="w-full h-75 bg-gray-600"></div>

                {/* Content */}
                <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                </div>

            </div>

        </>
    )
}

export default SkeletonCard
