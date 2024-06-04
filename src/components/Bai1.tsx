import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bai1() {
    const { id } = useParams<{ id: string }>();
  return (
    <div>
        <h1>Product ID: {id}</h1>
    </div>
  )
}
