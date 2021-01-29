import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import './App.css'

function App () {
  return (
    // BEM class naming convention
    <div className='app'>
      {/* Header -> <Header /> */}
      <Header />
      <div className='app__page'>
        {/* Sidebar -> <Sidebar /> */}
        <Sidebar />
        {/* Recommended videos */}
        <RecommendedVideos />
      </div>
    </div>
  )
}

export default App
