import Link from "next/link";

export default function Header() {
    return (
        <header>
        <h1>BeerBase</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/beers">All Beers</Link>
          <Link href="/addbeer">Add Beer</Link>
        </nav>
        </header>
    )
}