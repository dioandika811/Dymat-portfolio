import profilePicture from "../assets/dymat1.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Eddy Mart Ginting</h3>

        <div className="socialMedia">
          <a href="https://www.instagram.com/ddymtginga?igsh=amJweGRlcXcyNjRw">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
