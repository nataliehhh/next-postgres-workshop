"use client";
import EditComment from "@/components/EditComment";
import { useState } from 'react';

export default function EditCommentButton({comment, commentId, params, handleUpdateComment}) {
    const [modal, setModal] = useState(false);

    function handleModalClick() {
        setModal(true)
    }

    return (
       <>
        <button onClick={handleModalClick} >Edit Comment</button>
        <div style={{display: modal ? "block" : "none"}}>
            <EditComment comment={comment} params={params} commentId={commentId} handleUpdateComment={handleUpdateComment} />
        </div>
       </>
    )

}