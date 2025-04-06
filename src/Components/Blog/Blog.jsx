import React from 'react';

const Blog = ({blogger}) => {
    console.log(blogger)
    const {cover, title, author, author_img}=blogger;
    return (
        <div className='m-8'>
            <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={cover} alt="" />
        </figure>

        {/* author section */}
        <div className='flex justify-around items-center p-3'>
            <h1>{author}</h1>
            <img className='w-16' src={author_img} alt="" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          
          {/* hashtag section show */}
          <div className='flex'>
          {
            blogger.hashtags.map(has=><p>{has}</p>)
          }
          </div>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">mark as read</button>
          </div>
        </div>
    </div>
        </div>
    );
};

export default Blog;