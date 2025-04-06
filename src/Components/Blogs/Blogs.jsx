import React, { use, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blog}) => {
    const uses =use(blog);

    const [bookMark, setBookMark] =useState([]);

    const handelBookMark=(blogger)=>{
        const newBookMark=[...bookMark, blogger];
        setBookMark(newBookMark);
    }

    return (
        <div>
            <div className="flex text-center">
        <div className="left w-[70%]">
        <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Blogs : {uses.length}</h1>
        </div>
        <div className="right w-[30%] mb-8 mt-8 font-bold">
            <h1>Reading Time :</h1>
        <h1>Bookmarked Count : {bookMark.length}</h1>
        </div>

      </div>

            <div className="grid grid-cols-2">
            {
                uses.map(blogger=><Blog 
                    key={blogger.id}
                    blogger={blogger}
                    handelBookMark={handelBookMark}>
                    </Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;