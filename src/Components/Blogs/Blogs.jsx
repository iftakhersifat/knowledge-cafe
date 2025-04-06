import React, { use, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blog}) => {
    const uses =use(blog);

    // for bookmarked count
    const [bookMark, setBookMark] =useState([]);
    const handelBookMark=(blogger)=>{
        const newBookMark=[...bookMark, blogger];
        setBookMark(newBookMark);
    }

    // for reading time
    const [reading, setReading] =useState(0);
    const handelReading=(time)=>{
        const newReading =(reading + time);
        setReading(newReading);
    }

    return (
        <div>
            <div className="flex text-center">

        <div className="left w-[70%]">
        <h1 className="text-3xl font-bold mb-8 mt-8">Blogs : {uses.length}</h1>
        <div className="grid grid-cols-2 gap-0">
            {
                uses.map(blogger=><Blog 
                    key={blogger.id}
                    blogger={blogger}
                    handelBookMark={handelBookMark}
                    handelReading={handelReading}>
                    </Blog>)
            }
            </div>
        </div>

        <div className="right w-[30%] p-3 mb-8 mt-8 font-bold">
            <h1>Reading Time :{reading}</h1>
        <h1>Bookmarked Count : {bookMark.length}</h1>
        {
            bookMark.map(marked=><p className='bg-gray-500 p-2 text-white mb-3 mt-3 rounded-xl'>{marked.title}</p>)
        }
        </div>

      </div>

            
        </div>
    );
};

export default Blogs;