import React from 'react'
import Navbar from './shared/Navbar'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
       <CategoryCarousel></CategoryCarousel>
      {/* <LatestJobs></LatestJobs>
      <Footer></Footer>  */}
    </div>
  )
}

export default Home
