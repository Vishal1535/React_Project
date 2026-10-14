import React from 'react'
import { Hero } from '../Hero/Hero'
import { Popular } from '../Popular/Popular'
import { Offer } from '../Offer/Offer'
import { NewCollections } from '../NewCollection/NewCollection'
import { NewsLetter } from '../NewsLetter/NewsLetter'
import { Footer } from '../Footer/Footer'


export const Home = () => {
  return (
   <>
   <Hero/>
   <Popular/>
   <Offer/>
   <NewCollections/>
   <NewsLetter/>
   <Footer/>
   </>
  )
}
