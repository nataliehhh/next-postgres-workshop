import { sql } from "@vercel/postgres";
import Comments from "@/components/Comments";
import DeleteButton from "@/components/DeleteButton";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import "@/css/singleBeerPage.css";

export default async function SingleBeerPage({ params }) {
    
    const result = await sql`
    SELECT beers.id, beers.beer_name, beers.style, beers.brewery, beers.abv, beers.review, category_table.category
    FROM beers 
    JOIN category_table ON beers.category_id = category_table.id
    WHERE beers.id = ${params.id};
    `;
    const beer = result.rows[0]

    // console.log("beer:", beer)

    async function handleDeleteBeer() {
        "use server";
        console.log("delete clicked")
        await sql`
        DELETE FROM beers WHERE id = ${params.id};
        `
        revalidatePath("/beers");
        redirect("/beers");
    }

    return (
        <div className="singleBeerPage">
            <div className="beerProfile">
                <h2>Beer Name: {beer.beer_name}</h2>
                <p>Category: {beer.category}</p>
                <p>Style: {beer.style}</p>
                <p>Brewery: {beer.brewery}</p>
                <p>ABV: {beer.abv}%</p>
                <p>Review: {beer.review}</p>
            </div>
            <div className="buttonArea">
                <button>
                    <Link href={`/beers/${beer.id}/edit`}>Edit Beer</Link>
                </button>
                <DeleteButton handleDeleteBeer={handleDeleteBeer} />
            </div>
            <Comments className="commentsArea" params={params} />
        </div>
    );
}