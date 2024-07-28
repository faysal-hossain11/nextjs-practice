import blogs from '@/app/db/blogs';
import React from 'react';

const page = ({ params }) => {
    const {id} = params;
    const blog = blogs.find((blog) => blog.id === id);
    console.log(blog);
    return (
        <div>
            <h1>single blog post</h1>
            <h1>{blog?.content}</h1>
        </div>
    );
};

export default page;