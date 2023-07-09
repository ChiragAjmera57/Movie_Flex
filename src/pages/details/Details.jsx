import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const data = useParams()
  console.log(data);
  return (
    <div>Details</div>
  )
}
