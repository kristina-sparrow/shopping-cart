import React from "react";
import {
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="page-section contact">
      <div className="contact-info">
        <p>Ukiyo-e Shop</p>
        <p>123 Fake Street, Denver CO</p>
      </div>
      <ul className="social-list">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <FaFacebookMessenger />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <FaInstagram />
        </a>
      </ul>
    </section>
  );
}
