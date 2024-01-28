"use client";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SortDropdown() {
    return (
        <DropdownButton id="sortDropdown" title="Sort" down="down-centered">
            <Dropdown.Item href="/beers?sort=asc">Ascending</Dropdown.Item>
            <Dropdown.Item href="/beers?sort=desc">Descending</Dropdown.Item>
      </DropdownButton>
    );
  }
