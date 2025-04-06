import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blogger, handelBookMark, handelReading}) => {
    // console.log(blogger)
    const {cover, title, author, author_img}=blogger;

    const handel=()=>{
        handelBookMark(blogger);
        
    }
    return (
        <div className='m-8'>
            <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={cover} alt="" />
        </figure>

        {/* author section */}
        <div className='flex justify-around items-center mt-2'>
            <h1>{author}</h1>
            <img className='w-16' src={author_img} alt="" />
            <button onClick={handel}><FaBookmark  size={25}/></button>
        </div>


        <div className="card-body">
          <h2 className="card-title text-center">{title}</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          
          {/* hashtag section show */}
          <div className='flex'>
          {
            blogger.hashtags.map(has=><p>{has}</p>)
          }
          </div>
          
          <div className="card-actions justify-end">
            <button onClick={()=>handelReading(blogger.reading_time)} className="btn btn-primary">mark as read</button>
          </div>
        </div>
    </div>
        </div>
    );
};

export default Blog;