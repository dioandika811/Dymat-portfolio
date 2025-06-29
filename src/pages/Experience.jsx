import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlinePiano } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlinePiano />}
          >
            <h3 className="vertical-timeline-element-title">Piano</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lubuk Pakam, Sumatera Utara
            </h4>
            <p>
              Hobi saya bermain Piano sejak saya SD, Saya meyukai Piano karena
              menurut saya piano bisa membuat saya bahagia
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
