import React from 'react'
import {CDN_URL} from "../utils/constants";

const CategoryItems = ({data}) => {
  return (
    <div>
        {data?.map((item)=> (
            <div key={item?.card?.info?.id} className='p-2 m-2 border-b-2 border-gray-200 flex justify-between'>
                 <div>
                    <div className={`w-5 h-5 flex justify-center items-center border-2 ${item?.card?.info?.isVeg ? 'border-green-800' : 'border-red-500'} rounded-md`}>
                        <div className={`w-3 h-3 ${item?.card?.info?.isVeg ? 'bg-green-800' : 'bg-red-500'} rounded-full`}></div>
                    </div>
                    <div>
                        <h4 className='text-md font-bold'>{item?.card?.info?.name}</h4>
                        <p className='text-md font-semibold mt-[1px]'>₹ {item?.card?.info?.price / 100}</p>
                    </div>
                 </div>
                 <div className='relative'>
                    <img src={CDN_URL + item?.card?.info?.imageId} className='w-28 h-16' alt={item?.card?.info?.name} />
                    <button className='absolute bottom-0 bg-black text-white text-xs px-2 py-1 mb-2 rounded-sm right-4/12'>
                       Add
                    </button>
                 </div>
            </div>
        ))}
    </div>
  )
}

export default CategoryItems