import { sql } from "@vercel/postgres";
import Link from "next/link";
import SortDropdown from "@/components/SortDropdown";
import CategoryDropdown from "@/components/CategoryDropdown";

export default async function ListPage({ searchParams }) {
  const categoryOptions = await sql`
    SELECT * FROM category_table;
    `;
  
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
  }

  return (
    <div>
      <h2>All Beers</h2>
      <SortDropdown />
      <CategoryDropdown categoryOptions={categoryOptions} />

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