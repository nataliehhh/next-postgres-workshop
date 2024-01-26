"use client";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function CategoryDropdown({categoryOptions}) {
    console.log("catOpts prop", categoryOptions)
    return (
        <DropdownButton id="CategoryDropdown" title="Category">
           
           {/* {categoryOptions.row.map((option) => (
            <Dropdown.Item href={`/beers?category=${option.category}`}>{option.category}</Dropdown.Item>
           ))}  */}
            
            <Dropdown.Item href="/beers?category=Pale%20Ale">Pale Ale</Dropdown.Item>
            <Dropdown.Item href="/beers?category=IPA">IPA</Dropdown.Item>
            <Dropdown.Item href="/beers?category=Brown%20Ale">Brown Ale</Dropdown.Item>
            <Dropdown.Item href="/beers?category=Dark%20Ale">Dark Ale</Dropdown.Item>
            <Dropdown.Item href="/beers?category=Fruit/Sour">Fruit/Sour</Dropdown.Item>
            <Dropdown.Item href="/beers?category=Farmhouse">Farmhouse</Dropdown.Item>
      </DropdownButton>
    );
  } 
 