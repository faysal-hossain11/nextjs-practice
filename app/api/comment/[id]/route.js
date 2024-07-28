import comments from "@/app/data/comment";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
    const commentId = params.id;

    if (parseInt(commentId) > comments.length) {
        redirect("/api/comments");
    }

    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );

    return Response.json(comment);
}

export async function PATCH(request, { params }) {
    const comment = await request.json();
    const commentId = params.id;
    const commentIndex = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
    );
    comments[commentIndex].text = comment.text;

    return Response.json(comments[commentIndex]);
}
