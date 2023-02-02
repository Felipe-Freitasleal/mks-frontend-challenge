import React, { useContext } from 'react'
import { Cart } from '../components/Cart'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Product } from '../components/Product'
import { MksContext } from '../contexts/MksContext'


export const HomePage = () => {

  const context = useContext(MksContext)
  const { } = context

  return (
    <div>
        <Header/>
        <p> Home Page</p>
        <Cart/>
        <Product/>
        <Footer/>

    </div>
  )
}
