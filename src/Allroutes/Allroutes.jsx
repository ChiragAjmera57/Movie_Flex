import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Searchresult from '../pages/searchresult/Searchresult'
import Movieexplore from '../pages/explore/Movieexplore'
import Seriesexplore from '../pages/explore/Seriesexplore'
import Notfound from '../pages/404/Notfound'

export default function () {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/search/:query' element={<Searchresult />}></Route>
        <Route path='/explore/movies' element={<Movieexplore />}></Route>
        <Route path='/explore/series' element={<Seriesexplore />}></Route>
        <Route path='*' element={<Notfound />}></Route>
    </Routes>
  )
}
