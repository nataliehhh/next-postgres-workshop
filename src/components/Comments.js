import { sql } from "@vercel/postgres";
import CommentForm from "@/components/CommentForm";
import EditCommentButton from "@/components/EditCommentButton"
import { revalidatePath } from "next/cache";
import "@/css/singleBeerPage.css";


export default async function Comments({ params }) {
    const comments = await sql`
    SELECT comments.id, comments.username, comments.comment, comments.created, beers_comments_junction.beers_id
    FROM comments
    JOIN beers_comments_junction ON comments.id = beers_comments_junction.comments_id
    WHERE beers_comments_junction.beers_id = ${params.id}`;

    async function handleUpdateComment(formData) {
        "use server";
        console.log("Updating comment to the database...");

        const username = formData.get("username");
        const comment = formData.get("comment");
        const commentId = formData.get("commentId");

        await sql`UPDATE comments SET username = ${username}, comment = ${comment} WHERE id = ${commentId};
        `;
        revalidatePath(`/beers/${params.id}`);
    }

    return (
        <div className="commentsArea">
            <ul className="commentsList">
                {comments.rows.map((comment) => (
                    <li key={comment.id + comment.beer_id}>
                    <h3>{comment.username}</h3>
                    <p>{comment.comment}</p>
                    <EditCommentButton comment={comment} commentId={comment.id} params={params} handleUpdateComment={handleUpdateComment}/>
                    </li>
                ))}
                </ul>
            <CommentForm params={params} />
        </div>
    )
}
