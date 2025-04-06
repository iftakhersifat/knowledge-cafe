import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blog}) => {
    const uses =use(blog);
    return (
        <div>
            <h1 className="text-3xl mb-8">Blogs : {uses.length}</h1>

            <div className="grid grid-cols-2">
            {
                uses.map(blogger=><Blog blogger={blogger}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;