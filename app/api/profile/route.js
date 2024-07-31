import { cookies, headers } from "next/headers";

export async function GET( request ) {
     const headerList = headers();
     console.log(headerList.get("Authorization"));
     
     cookies().set("page", "3")
     console.log(request .cookies.get("theme"));
     console.log(cookies().get("page"));

     return new Response("profile api", {
        headers: {
            "Set-Cookie": "theme=dark"
        }
     })
}