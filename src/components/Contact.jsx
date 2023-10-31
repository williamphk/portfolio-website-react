import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  useEffect(() => {
    const getContact = async () => {
      const response = await fetch("/contact.json");
      const data = await response.json();
      setEmail(data.email);
      setLinkedIn(data.linkedIn);
    };
    getContact();
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-wrapper">
        <p>Thank you for visiting my portfolio website</p>
        <p>Feel free to contact me!</p>
        <div>
          <a
            href={email}
            title="My email address"
            target="_blank"
            className="icon email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/williamphk"
            title="Link to my Github"
            target="_blank"
            className="icon github"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href={linkedIn}
            title="Link to my LinkedIn Account"
            target="_blank"
            className="icon linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
