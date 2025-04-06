import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'

function App() {
  

  const blog=fetch("blogs.json")
  .then(res=>res.json())
  return (
    <>
    {/* 1st */}
    <Navbar></Navbar>

      
      {/* 2nd */}
      <Suspense fallback={<h1 className='text-center'>loading...</h1>}>
      <Blogs blog={blog}></Blogs>
      </Suspense>

      
      
    </>
  )
}

export default App
