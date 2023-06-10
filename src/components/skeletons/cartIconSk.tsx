import React from 'react'
import { Skeleton } from '../ui/skeleton'

export const CartIconSk = () => {
  return (
    <div className="py-3">
    {" "}
    <Skeleton className="bg-gray-200 p-3 hover:bg-gray-200 rounded-full inline-block">
      <Skeleton className="text-black w-5 h-5 rounded-full font-extrabold  hover:scale-110" />
    </Skeleton>
  </div>
  )
}

