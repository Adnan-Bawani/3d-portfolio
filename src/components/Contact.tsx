import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/adnan-bawani"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — adnan-bawani
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E Computer Science With (AI&ML), University of Mumbai — 2023–2027
            </p>
            <h4>Mail me at</h4>
            <p>
              <a href="mailto:intern.adnan5@gmail.com" data-cursor="disable">
                intern.adnan5@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Adnan-Bawani"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/adnan-bawani"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/adnan.bawani"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="mailto:intern.adnan5@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Adnan Bawani</span>
            </h2>
            <h5>
              <MdCopyright /> 2026-27
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
