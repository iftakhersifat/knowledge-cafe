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
            <h1 className="text-3xl mb-8">Blogs : {uses.length}</h1>

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