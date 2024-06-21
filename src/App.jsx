import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Companys from  './Components/Companys/Companys'
import Options from './Components/Options/Options'
import Products from './Components/Products/Products'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import FooterBottom from './Components/FooterBottom/FooterBottom'
import FooterTop from './Components/FooterTop/FooterTop'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  


  return (
    <>
      <Contact></Contact>
      <Nav></Nav>
      <Hero></Hero>
      <Companys></Companys>
      <Options></Options>
      <Products></Products>
      <Blog></Blog>
      <FooterTop></FooterTop>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </>
  )
}

export default App

// http://makeup-api.herokuapp.com/api/v1/products.json