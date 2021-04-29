import React from 'react'

const SaleDetails = ({ oldPic, pic, name, oldPrice, price }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img 
                    src={oldPic}
                    alt={name}
                    className="w-full"
                    onLoad={()=> setImageLoaded(true)}
                />
                {!imageLoaded && (
                    <div className="animate-pulse" />
                )}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="px-2 line-through text-gray-700 text-base">
                       Rs.{oldPrice}
                    </p>
                </div>
                <div className="px-6 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.{price}</span>
                </div>
            </div>
        </div>
    )
}

export default SaleDetails;