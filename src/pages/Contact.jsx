import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // Simulated submission — swap with a real endpoint (e.g. Formspree) if desired.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  if (status === 'success') {
    return (
      <section className={`container ${styles.wrapper}`}>
        <div className={styles.success}>
          <h2>Message sent</h2>
          <p>Thanks for reaching out — we'll get back to you soon.</p>
          <button className={styles.resetButton} onClick={() => setStatus('idle')}>
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.header}>
        <h1>Get in Touch</h1>
        <p className={styles.subtitle}>Questions about a course or enrollment? Send us a message.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
          {errors.subject && <span className={styles.error}>{errors.subject}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}