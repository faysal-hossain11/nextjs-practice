// import blogs from "@/app/db/blogs";
// import { redirect } from "next/navigation";


// export async function GET(_request, { params }) {
//     const blogId = parseInt(params.id);

//     if(blogId > blogs.length){
//         redirect('/api/blogs')
//     }

//     const blog = blogs.find((blog) => blog?.id === blogId)
//     return Response.json(blog);
// }


// export async function PATCH( request, {params} ) {
//     const updatedBlog = await request.json();
//     const blogId = params.id;
//     const blogIndex = blogs.findIndex((blog) => blog?.id === parseInt(blogId))

//     if(blogIndex === -1){
//         return new Response(JSON.stringify({ error: "blog not Found"}), {status: 404})
//     }


//     blogs[blogIndex] = { ...blogs[blogIndex], ...updatedBlog}

//     return new Response(JSON.stringify(blogs[blogIndex]), {status: 200});
// }


// export async function DELETE( _request, {params}) {
//     const blogId = parseInt(params.id);

//     const blogIndex = blogs.findIndex((blog) => blog?.id === blogId)

//     const deleteBlog = blogs[blogIndex];
//     blogs.splice(blogIndex, 1);


//     return Response.json(deleteBlog)
// }