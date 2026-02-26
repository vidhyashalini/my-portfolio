import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success | error | loading

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      "service_92gkb4o",      // replace
      "template_delgrgj",     // replace
      form.current,
      "vz1ko8072J_7-f73Z"     // replace
    )
    .then(() => {
      setStatus("success");
      form.current.reset();

      setTimeout(() => {
        setStatus("");
      }, 3000);
    })
    .catch(() => {
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 3000);
    });
  };

  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* SUCCESS MESSAGE */}
      {status === "success" && (
        <div className="success-message">
          ✅ Message Sent Successfully!
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div className="error-message">
          ❌ Something went wrong. Try again.
        </div>
      )}
    </section>
  );
}

export default Contact;