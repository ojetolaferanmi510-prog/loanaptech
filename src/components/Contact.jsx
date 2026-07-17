import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to Firebase / your backend of choice
    setSent(true);
  }

  return (
    <main className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We're here to help! Reach out anytime.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@loanaptech.com</p>
          <p><strong>Phone:</strong> +234 123 456 7890</p>
          <p><strong>Hours:</strong> Mon-Fri 9AM-6PM WAT</p>
        </div>

        {sent ? (
          <p className="contact-success">
            Thanks for reaching out! We'll get back to you shortly.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;