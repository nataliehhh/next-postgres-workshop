"use client";
import { useFormStatus } from "react-dom";

export default function DeleteButton({ handleDeleteBeer }) {
    const formStatus = useFormStatus();

    return (
        <form action={handleDeleteBeer} >
            <button type="submit" disabled={formStatus.pending}>
            {formStatus.pending ? "Delete..." : "Delete"}
            </button>        
        </form>
    )
}