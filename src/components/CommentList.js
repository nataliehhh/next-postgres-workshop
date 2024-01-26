import { sql } from "@vercel/postgres";
import EditCommentButton from "@/components/EditCommentButton"

export default async function CommentList({beerId}) {
    console.log("params comment list comp", beerId)
    
    const comments = await sql`
    SELECT comments.id, comments.username, comments.comment, comments.created, beers_comments_junction.beers_id
    FROM comments
    JOIN beers_comments_junction ON comments.id = beers_comments_junction.comments_id
    WHERE beers_comments_junction.beers_id = ${beerId}`;

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
        </div>
    );
}