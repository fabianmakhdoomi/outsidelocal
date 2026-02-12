function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-content contact-wrap contact-layout">
        <h2>Contact</h2>
        <div className="contact-items" aria-label="Contact links">
          <a className="contact-link" href="mailto:fabianmakhdoomi12@gmail.com">
            fabianmakhdoomi12@gmail.com
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/fabiayanmakhdoomi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
      <style>{`
        .contact-layout {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .contact-items {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
        }

        .contact-link {
          display: inline-block;
          font-size: clamp(1rem, 2.1vw, 1.1rem);
          letter-spacing: 0.02em;
          color: var(--text);
          border-bottom: 1px solid transparent;
          transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .contact-link:hover,
        .contact-link:focus-visible {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
          outline: none;
        }

        @media (max-width: 620px) {
          .contact-items {
            margin-top: 0.9rem;
            gap: 0.75rem;
          }

          .contact-link {
            text-align: center;
            line-height: 1.5;
            word-break: break-word;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
