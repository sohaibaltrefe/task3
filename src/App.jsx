import React from 'react'
import Navbar from './assets/components/navbar/Navbar'
import Products from './assets/components/products/Products'
import Restaurant from './assets/components/restaurant/Restaurant'

import Footer from './assets/components/footer/Footer'
import {Routes,Route} from 'react-router-dom'

function App() {
return (
<>

  <Navbar/>
  <Routes>
    <Route path='/products' element={<Products/>}  />
    <Route path='/restaurant' element={<Restaurant/>} />
  </Routes>
  <Footer/>
</> )
}

export default App
