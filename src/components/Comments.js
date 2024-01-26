import { sql } from "@vercel/postgres";
// import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentsForm";
import EditComment from "@/components/EditComment";
import EditCommentButton from "@/components/EditCommentButton"

export default async function Comments({ params }) {
    const comments = await sql`
    SELECT comments.id, comments.username, comments.comment, comments.created, beers_comments_junction.beers_id
    FROM comments
    JOIN beers_comments_junction ON comments.id = beers_comments_junction.comments_id
    WHERE beers_comments_junction.beers_id = ${params.id}`;

    console.log(comments);

    return (
        <div>
            <ul>
                {comments.rows.map((comment) => (
                    <li key={comment.id + comment.beer_id}>
                    <h3>{comment.username}</h3>
                    <p>{comment.comment}</p>
                    <p>{comment.id}</p>
                    <EditCommentButton commentId={comment.id} beerId={params.id} />
                    </li>
                ))}
                </ul>
            <CommentForm />
            {/* <EditComment /> */}
        </div>
    )
}
