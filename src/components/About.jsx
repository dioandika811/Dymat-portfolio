import "../styles/About.css";
import { FaGuitar } from "react-icons/fa";
import { MdOutlinePiano } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import { MdOutlineNoPhotography } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Nama saya Eddy Mart Ginting , saya tamatan sma methodist lubuk PAKAM
          dengan jurusan IPS
        </p>
        <p>
          Banyak yang saya pelajari ketika saya duduk di bangku sma pengalaman
          yang saya rasakan di sma adalah berbakti sosial satu sama lain. <br />
          saya juga memiliki hobi seperti menyukai langit sore dengan memfotokan
          langit nya , bermain gitar , bermain piano , dan juga melakukan turing
        </p>
        <h4>Pianist & Guitarist</h4>
        <div className="skills">
          <FaGuitar />
          <MdOutlinePiano />
          <FaMountain />
          <MdOutlineNoPhotography />
          <HiOutlinePhotograph />
        </div>
      </div>
    </section>
  );
}

export default About;
