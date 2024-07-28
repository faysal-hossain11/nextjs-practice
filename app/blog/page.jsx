import React from "react";
import BlogItem from "../component/BlogItem";
import blogs from "../db/blogs";
import Link from "next/link";

const page = () => {
  // console.log(blogs);
  return (
    <div className="m-10">
      <h1 className="text-center mb-4">Blog post</h1>
      {
        blogs.map((blog) => {
          return(
            <div key={blog.id} className="mb-2">
                <Link href={`/blog/${blog.id}`}>
                <BlogItem blog={blog} />
                </Link>
            </div>
          )
            
        })
      }
    </div>
  );
};

export default page;
