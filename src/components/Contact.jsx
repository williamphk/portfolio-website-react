import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-wrapper">
        <p>Thank you for visiting my portfolio website</p>
        <p>Feel free to contact me!</p>
        <div>
          <a href="mailto:willphk@outlook.com" title="My email address">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="http://linkedin.com/in/williamphk"
            title="Link to my LinkedIn Account"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
