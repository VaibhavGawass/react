import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const {userid} = useParams();
  return (
    <div className='text-white bg-gray-700 text-3xl text-center'>User:{userid}</div>
  )
}
