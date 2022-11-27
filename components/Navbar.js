import react from "react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src="/logo.png" width={160} height={70}></Image>
        </Link>
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex flex-row">
          <li className="nav-item mx-2">
            <Link className="nav-link active text-dark" aria-current="page" href="/juego">Juego</Link>
          </li>
          <li className="nav-item text-dark fs-3 mx-3">
            <FontAwesomeIcon icon={faCartShopping} /> &nbsp;
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar