import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SavePostButton from "@/components/SavePostButton"

export default async function EditBeer({params}) {
    const categoryOptions = await sql`
    SELECT * FROM category_table;
    `;

    const result = await sql`
    SELECT beers.id, beers.beer_name, beers.style, beers.brewery, beers.abv, beers.review, category_table.category AS category
    FROM beers 
    JOIN category_table ON beers.category_id = category_table.id
    WHERE beers.id = ${params.id};`
    const beer = result.rows[0];
    console.log(beer.style)
     
    async function handleUpdateBeer(formData) {
        "use server";
        console.log("Saving post to the database...");

        const beer_name = formData.get("beer_name");
        const style = formData.get("style");
        const brewery = formData.get("brewery");
        const abv = formData.get("abv");
        const review = formData.get("review");
        const categoryId = formData.get("category");

        const updatedBeer = await sql`UPDATE beers SET beer_name = ${beer_name}, style = ${style}, brewery = ${brewery}, abv = ${abv}, review = ${review}, category_id = ${categoryId} WHERE beers.id = ${params.id};
        `;
        console.log("params.id on edit beer page", params.id)
        revalidatePath(`/beers/${params.id}`);
        redirect(`/beers/${params.id}`);
    }

    return (
       <form action={handleUpdateBeer}>
        <label htmlFor="beer_name">Beer Name</label>
        <input id="beer_name" name="beer_name" type="text" required defaultValue={beer.beer_name} />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" required >
            {categoryOptions.rows.map((option) => (
                <option key={option.id} value={option.id}>{option.category}
                </option>
            ))}
        </select>

        <label htmlFor="style">Beer Style</label>
        <input id="style" name="style" type="text" required defaultValue={beer.style} />

        <label htmlFor="brewery">Brewery</label>
        <input id="brewery" name="brewery" type="text" required defaultValue={beer.brewery} />

        <label htmlFor="abv">ABV</label>
        <input id="abv" name="abv" type="text" inputmode="numeric" required defaultValue={beer.abv} />

        <label htmlFor="review">Your Review</label>
        <textarea id="review" name="review" type="text" required defaultValue={beer.review}></textarea>

        <SavePostButton />
       </form> 
    )
}