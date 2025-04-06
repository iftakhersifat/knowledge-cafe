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
      
      <div className="flex text-center">
        <div className="left w-[70%]">
        <Blogs blog={blog}></Blogs>
        </div>
        <div className="right w-[30%]">
        <h1>Hi</h1>
        </div>

      </div>
      </Suspense>

      
      
    </>
  )
}

export default App
