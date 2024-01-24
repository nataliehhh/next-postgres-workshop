import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function ListPage() {
  const beers = await sql`
    SELECT * FROM beers;
    `;

  return (
    <div>
      <h2>All Beers</h2>
      <ul>
        {beers.rows.map((beer) => (
          <li key={beer.id}>
            <Link href={`/beers/${beer.id}`}>{beer.beer_name}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}