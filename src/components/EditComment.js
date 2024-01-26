import SavePostButton from "@/components/SavePostButton"

export default function CommentForm({ comment, handleUpdateComment, setModal }) {
    return (
       <form action={handleUpdateComment}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required defaultValue={comment.username}/>

        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" type="text" required defaultValue={comment.comment}></textarea>

        <input name="commentId" value={comment.id} type="hidden" />        
        <SavePostButton setModal={setModal} />
       </form> 
    );
}