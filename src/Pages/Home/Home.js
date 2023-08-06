import React from "react";
import "./Home.css";
import { BiSearch } from "react-icons/bi";
import {BsMoonFill, BsSun} from "react-icons/bs";
import mybgbanner from "../../Assets/Imagebg.png";
import { Link } from "react-router-dom";

function Home() {

  const [isDark, setIsDark] = React.useState(false);
  const toggleTheme = () => {
    setIsDark((prevMode) => !prevMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <>
      <div className="section1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 p-5 webcontent">
              <div>
                <button className="border-0 bg-transparent" onClick={toggleTheme}>
                {isDark ? 
                <BsMoonFill size={25} className="moon" id="icons"/>
                 :
                <BsSun size={25} />}
                </button>
                <h1 className="headingtitle">WEB WIDE</h1>
                <div className="row">
                  <ul className="py-1">
                    <li className="px-2">
                      <Link href="contact.html">Contact Us</Link>
                    </li>
                    <li className="px-2">
                      <Link href="pricing.html">Pricing</Link>
                    </li>
                    <li className="px-2">
                      <Link href="about.html">About</Link>
                    </li>
                    <li className="px-2">
                      <Link href="features.html">Features</Link>
                    </li>
                    <li>
                      <Link href="features.html">
                        <BiSearch className="bisearch" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className="headingentiretxt py-3">
                  For those who believe in beautiful and creative designs
                </h1>
                <span className="paraEntiretxt py-3">
                  Web Wide is a digital design and development studio. We are
                  design experts on board with 10+ years of experience in
                  building digital projects from scratch or refreshing existing
                  ones.
                </span>
                <div className="d-flex py-2">
                  <button className="btncls">
                    contact us{" "}
                    <i class="bi bi-arrow-right-short"></i>
                  </button>
                  <button className="btn2cls mx-3">contact us</button>
                </div>
              </div>
              <div>
                <section class="mb-4">
                  <a href="#" className="btnlink  mx-2">
                    <i class="bi bi-facebook"></i>
                  </a>

                  <a href="#" className="btnlink mx-2">
                    <i class="bi bi-twitter"></i>
                  </a>

                  <a href="#" className="btnlink mx-2">
                    <i class="bi bi-linkedin"></i>
                  </a>

                  <a href="#" className="btnlink mx-2">
                    <i class="bi bi-instagram"></i>
                  </a>
                </section>
              </div>
            </div>
            <div className="col-lg-7 px-0 mx-0">
              <div className="imgbarcls">
                <div className="imgbarbgbannercls">
                  <img
                    src={mybgbanner}
                    alt="mybgbanner"
                    className="imgbgbanner"
                  />
                </div>
                <div className="vertical1-hr"></div>
                <div className="vertical2-hr"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
