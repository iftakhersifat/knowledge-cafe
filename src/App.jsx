import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'

function App() {

  const blog=fetch("blogs.json")
  .then(res=>res.json())
  return (
    <>
      <h1 className='font-bold text-2xl'>knowledge-cafe</h1>
      <Navbar></Navbar>
      
      <Suspense fallback={<h1>loading...</h1>}>
      <Blogs blog={blog}></Blogs>
      </Suspense>
      
    </>
  )
}

export default App
