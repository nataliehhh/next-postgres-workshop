import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import SavePostButton from "@/components/SavePostButton"
import "@/css/singleBeerPage.css";

export default function CommentForm({ params }) {

    async function handleAddComment(formData) {
        "use server";
        console.log("Saving comment to the database...");

        const username = formData.get("username");
        const comment = formData.get("comment");

        const newComment = await sql`INSERT INTO comments (username, comment) VALUES (${username}, ${comment})
        RETURNING id;
        `;
        const newCommentId = newComment.rows[0].id;

        await sql`INSERT INTO beers_comments_junction (beers_id, comments_id) VALUES (${params.id}, ${newCommentId})`

        console.log("New comment added: beer id:, comment id:", params.id, newCommentId)

        revalidatePath(`/beers/${params.id}`);
    }

    return (
       <form className="commentForm" action={handleAddComment}>
        <p>Leave a comment below!</p>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />

        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" type="text" required></textarea>

        <SavePostButton />
       </form> 
    );
}