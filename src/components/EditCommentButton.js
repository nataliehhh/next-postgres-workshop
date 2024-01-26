"use client";
import EditComment from "@/components/EditComment";
import { useState } from 'react';

export default function EditCommentButton({comment, handleUpdateComment}) {
    const [modal, setModal] = useState(false);

    function handleModalClick() {
        if (!modal) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    return (
       <>
        <button onClick={handleModalClick} >Edit Comment</button>
        <div style={{display: modal ? "block" : "none"}}>
            <EditComment comment={comment} handleUpdateComment={handleUpdateComment} setModal={setModal} />
        </div>
       </>
    )

}