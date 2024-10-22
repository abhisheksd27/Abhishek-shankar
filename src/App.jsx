import React from 'react'
import { Route,Routes ,BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/about' element={ <About/>} />
                <Route path='/projects' element={<Projects/> } />
                <Route path='/contact' element={<Contact/> } />
                <Route path='/blog' element={<Blogs/>}/>
                <Route path='/blog/:id' element={<Blog/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default App
