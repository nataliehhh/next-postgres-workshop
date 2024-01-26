import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import SavePostButton from "@/components/SavePostButton"

export default async function AddBeer() {
    const categoryOptions = await sql`
    SELECT * FROM category_table;
    `;

    async function handleSaveBeer(formData) {
        "use server";
        console.log("Saving post to the database...");

        const beer_name = formData.get("beer_name");
        const style = formData.get("style");
        const brewery = formData.get("brewery");
        const abv = formData.get("abv");
        const review = formData.get("review");
        const categoryId = formData.get("category");

        const newBeer = await sql`INSERT INTO beers (beer_name, category_id, style, brewery, abv, review) VALUES (${beer_name}, ${categoryId}, ${style}, ${brewery}, ${abv}, ${review})
        RETURNING *;
        `;
        const newBeerId = newBeer.row[0].id;
        console.log("New Beer Id", newBeerId);
        revalidatePath("/beers");
        redirect("/beers");
    }

    return (
       <form action={handleSaveBeer}>
        <label htmlFor="beer_name">Beer Name</label>
        <input id="beer_name" name="beer_name" type="text" required />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" required >
            {categoryOptions.rows.map((option) => (
                <option key={option.id} value={option.id}>{option.category}
                </option>
            ))}
        </select>

        <label htmlFor="style">Beer Style</label>
        <input id="style" name="style" type="text" required />

        <label htmlFor="brewerye">Brewery</label>
        <input id="brewery" name="brewery" type="text" required />

        <label htmlFor="abv">ABV</label>
        <input id="abv" name="abv" type="text" inputmode="numeric" required />

        <label htmlFor="review">Your Review</label>
        <textarea id="review" name="review" type="text" required></textarea>

        <SavePostButton />
       </form> 
    )
}