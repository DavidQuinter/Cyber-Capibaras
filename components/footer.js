import react from "react";
import Link from "next/link";

function Footer() {
  return (
    <div class="footer-basic w-100 bg-transparent m-0 p-0 text-dark fw-bold">
      <footer>
        {/* <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div> */}
        <ul class="list-inline">
          <li class="list-inline-item"><Link href="/">Página principal</Link></li>
          <li class="list-inline-item"><Link href="/juego">Juego</Link></li>
        </ul>
        <p class="copyright">Cyber capibara © 2022</p>
      </footer>
    </div>
  )
}

export default Footer