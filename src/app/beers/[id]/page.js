import { sql } from "@vercel/postgres";

export default async function SingleBeerPage({ params }) {
    
    const beer = await sql`
    SELECT * FROM beers WHERE id = ${params.id};
    `;

    console.log("beer:", beer)

    return (
        <div>
            <h2>{beer.rows[0].beer_name}</h2>
            <p>{beer.rows[0].style}</p>
            <p>{beer.rows[0].brewery}</p>
            <p>{beer.rows[0].abv}</p>
        </div>
    );
}