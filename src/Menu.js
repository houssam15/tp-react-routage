import React from "react";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Exercice/1">Ex1</Link>
        </li>
        <li>
          <Link to="/Exercice/2">Ex2</Link>
        </li>
        <li>
          <Link to="/Exercice/3">Ex3</Link>
        </li>
        <li>
          <Link to="/Exercice/4">Ex4</Link>
        </li>
        <li>
          <Link to="/Exercice/5">Ex5</Link>
        </li>
        <li>
          <Link to="/Exercice/6">Ex6</Link>
        </li>
        <li>
          <Link to="/country/France">Safi</Link>
        </li>
        <li>
          <Link to="/country/Germany">MArrakech</Link>
        </li>
        <li>
          <Link to="/country/Canada">MOrroco</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
