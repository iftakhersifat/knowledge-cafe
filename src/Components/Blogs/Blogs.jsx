import React, { use } from 'react';

const Blogs = ({blog}) => {
    const uses =use(blog)
    return (
        <div>
            <h1 className='text-3xl'>Blogs : {uses.length}</h1>
        </div>
    );
};

export default Blogs;