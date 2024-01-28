import Image from "next/image";
import beerHand from "../../public/beer-in-hand.jpg";
import "@/css/home.css"

export default async function Home() {
 
  return (
    <div className="homePage">
      <div className="colorArea"></div>
      <div className="imageArea">
       <Image
        src={beerHand}
        alt="Glass of craft beer being held against a off white wall" 
        placeholder="blur"
        />
     </div>
     <div className="homeTextArea">
       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
       <p>Sed do eiusmod tempor incididunt ut labore et dolore magna   aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
     </div>
    </div>
  );
}