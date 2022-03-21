import React from 'react'
import CoverPic from '../Components/CoverPic'
import FeaturedCategories from '../Components/FeaturedCategories'
import Navbar from '../Components/Navbar'
import "../Styles/Homepage.css"

const Homepage = () => {
  return (
    <>
      <div className="Cover-wrapper">

      
      <div className="home-container">
          <Navbar/>
      <CoverPic/>
      
       </div>
      </div>
      <FeaturedCategories/>
      </>

  )
}

export default Homepage