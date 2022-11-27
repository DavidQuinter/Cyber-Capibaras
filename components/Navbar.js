import react from "react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-nav">
            <div class="container-fluid">
                <div className={'image-container'} >
                    <a class="navbar-brand" href="#">
                    <Image width={100} height={100} src={"/img/logoCompleto.png"} style={{objectFit: "contain", position: "initial"}}>
                    </Image>
                    </a>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navflex" id="navbarTogglerDemo02">
                    <ul class="navbar-nav row nav-font menu">
                        <li class="nav-item col-2">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item col-2">
                        <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item col-2">
                        <a class="nav-link" href="#">Productos</a>
                        </li>
                        <li class="nav-item col-6">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
                <a href="#">
                    <svg class="mx-3 iconos" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                </a>
            </div>
        </nav>
    )
};

export default Navbar