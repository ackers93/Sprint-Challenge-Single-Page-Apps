import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Nav">
      <Nav>
        <NavItem>
          <NavLink><Link to="/">Welcome Page</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/CharacterList">Character Page</Link></NavLink>
        </NavItem>
      </Nav>
      <h1>Rick and Morty Fan Page</h1>
    </div>
  );
}
