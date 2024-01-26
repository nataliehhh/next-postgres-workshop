import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function ListPage({ searchParams }) {
  const result = await sql`
  SELECT beers.id, beers.beer_name, beers.style, beers.brewery, beers.abv, category_table.category AS category
  FROM beers 
  JOIN category_table ON beers.category_id = category_table.id;
  `;
  let beers = result.rows;

  if (searchParams.sort === "desc") {
    beers.reverse();
  }

  if (searchParams.category) {
    beers = beers.filter((beer) => 
    beer.category == searchParams.category)
    console.log("searchParams", searchParams)
    console.log("filtered beers", beers)
    console.log("beer.category", beers.category)
  }

  return (
    <div>
      <h2>All Beers</h2>
      <Link href="/beers?sort=asc">Sort ascending</Link>
      <Link href="/beers?sort=desc">Sort descending</Link>
      <Link href="/beers?category=Pale%20Ale">Pale Ale</Link>
      <Link href="/beers?category=IPA">IPA</Link>
      <Link href="/beers?category=Brown%20Ale">Brown Ale</Link>
      <Link href="/beers?category=Dark%20Ale">Dark Ale</Link>
      <Link href="/beers?category=Fruit/Sour">Fruit/Sour</Link>
      <Link href="/beers?category=Farmhouse">Farmhouse</Link>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <Link href={`/beers/${beer.id}`}>{beer.beer_name}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}