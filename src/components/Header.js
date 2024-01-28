import Link from "next/link";
import "@/css/header.css";

export default function Header({lilitaOne}) {

    return (
        <header>
        <h1 className={lilitaOne.className}>BeerBase</h1>
        <nav>
          <button>Log in</button>
          <Link href="/">Home</Link>
          <Link href="/beers">All Beers</Link>
          <Link href="/addbeer">Add Beer</Link>
        </nav>
        </header>
    )
}