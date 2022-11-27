import react from "react";
import Link from "next/link";
import Router from "next/router";

function Carousel(){
    return(
        <div className="slider mx-auto mt-3">
            <div className="slides mb-2">
                <div name="slide-1" id="slide-1">1</div>
                <div name="slide-2" id="slide-2">2</div>
                <div id="slide-3">3</div>
            </div>
            <Link href="#slide-1" scroll={false}>
            1
            </Link>
            <Link href="#slide-2" scroll={false}>
            2
            </Link>
            <Link href="#slide-3" scroll={false}>
            3
            </Link>
        </div>
    )
};

export default Carousel
