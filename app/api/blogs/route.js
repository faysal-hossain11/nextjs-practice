import blogs from "@/app/db/blogs";

export async function GET( request ) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')

    if(query){
        const filteredBlogs = blogs.filter((blog) => blog.title.toLocaleLowerCase().includes(query))
        return Response.json(filteredBlogs)
    }

    return Response.json(blogs)
    
}

export async function POST(request){
    const blog = await request.json()
    const newBlog = {
        id: blogs.length + 1,
        title: blog.title,
        author: blog.author,
        date: blog.date,
        content: blog.content
    }
    blogs.push(newBlog);

    return new Response(JSON.stringify(newBlog), {
        headers: {
            "content-type": "faysal/json"
        },
        status: 201
    })
}