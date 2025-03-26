import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle=' estate app displays the latest listed properties, allowing users to quickly view new homes, apartments, or commercial spaces available for sale or rent' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
