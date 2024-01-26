"use client";
import { useFormStatus } from "react-dom";

export default function SavePostButton({setModal}) {
    const formStatus = useFormStatus();

    if (formStatus.pending) {
            setModal(false)
        }

    return (
        <button type="submit" disabled={formStatus.pending}>
            {formStatus.pending ? "Submitting..." : "Save"}
        </button>
    )
}