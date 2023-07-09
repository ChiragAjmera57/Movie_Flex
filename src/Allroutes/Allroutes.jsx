import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Searchresult from '../pages/searchresult/Searchresult'
import Movieexplore from '../pages/explore/Movieexplore'
import Notfound from '../pages/404/Notfound'
import Details from '../pages/details/Details'

export default function () {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/search/:query' element={<Searchresult />}></Route>
        <Route path='/explore/:mediatype' element={<Movieexplore />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='*' element={<Notfound />}></Route>
    </Routes>
  )
}
