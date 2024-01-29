"use client";
import { useFormStatus } from "react-dom";

export default function SavePostButton({formKey, setModal}) {
    const formStatus = useFormStatus();

    // this was trying to work on the main add a beer form and causing error so added extra conditional so it only applies to a certain form
    if (formStatus.pending) {
        if (formKey === "editCommentForm") {
            setModal(false);
        }}

    return (
        <button type="submit" disabled={formStatus.pending}>
            {formStatus.pending ? "Submitting..." : "Save"}
        </button>
    )
}