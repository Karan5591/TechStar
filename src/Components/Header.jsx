import { HashLink } from "react-router-hash-link";

import "../Styles/header.scss";
function Header() {
  return (
    <nav>
      <h1>TechStar</h1>
      <main>
        <HashLink to={"/#home"}> Home</HashLink>
        <HashLink to={"/contact"}> Contact</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}> Brands</HashLink>
        <HashLink to={"/services"}> Services</HashLink>
      </main>
    </nav>
  );
}

export default Header;
