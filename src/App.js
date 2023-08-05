import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About    from './component/about'
import Conatct from './component/contact'
import Product from './component/Product'
import Error from './component/Error'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Conatct/>}/>
            <Route path='Product' element={<Product/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
