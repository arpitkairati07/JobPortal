import React from 'react'
import Navbar from './shared/Navbar'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
       <CategoryCarousel></CategoryCarousel>
      <LatestJobs></LatestJobs>
      {/* <Footer></Footer>  */}
    </div>
  )
}

export default Home
