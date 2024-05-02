import "../Styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your IT needs.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics"></img>
        <p>
          We are here to provide you the IT solution that meet your all needs.
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            We would be pleased to work with you to introduce you to the
            solutions available through us in the field of Information
            Technology. Established in 1996, I.T. Solutions India Pvt Ltd (ITS)
            is one of the pioneers in providing I.T. infrastructure and
            solutions on various platforms. IT Solutions has been patronized by
            the corporate world since inception. Blending intuition and rigor
            with ground reality business acumen, I.T. Solutions believes in
            going beyond the role of a mere solution provider to its clientele.
            IT Solutions uses technology as a means to empower customers by
            providing them with user-friendly solutions that enhance their
            productivity. You can take the help of I.T. Solutions in solution
            specification finalization according to your application
            requirement, country wide installation, and make use of its post
            sales support.You can get software based solutions for networks,
            file servers, database servers, web application servers, system
            management servers, content management, e-security, and a host of
            other solutions including storage & backup management from one place
            itself rather than patching up different vendors or integrators.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.1s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
