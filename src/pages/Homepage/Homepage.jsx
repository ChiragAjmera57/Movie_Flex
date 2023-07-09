import React from 'react'
import Herobanner from './Herobanner'
import './homepage.scss'
import Movieexplore from '../explore/Movieexplore'
import Trending from './Trending'
import Popular from './Popular'
import Upcoming from './Upcoming'

export default function Homepage() {
  return (
    <>    <div>
      <Herobanner />
      <Trending />
      <Popular />
      <Upcoming />
    </div>
    </>

  )
}
