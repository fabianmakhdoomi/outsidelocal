function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="section-content hero-grid">
        <div>
          <p className="eyebrow">OUTSIDE LOCAL</p>
          <h1>Fabiayan Makhdoomi</h1>
          <p className="hero-subtitle">
            Network Engineer | Cybersecurity Enthusiast | CCNA Certified
          </p>
          <p className="hero-description">
            I design and secure modern networks with a focus on resilient infrastructure and practical
            labs. I build labs, research SD-WAN, and implement layered defenses.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-accent-card" aria-hidden="true">
          <div className="network-visual">
            <svg
              className="network-icon"
              viewBox="0 0 240 240"
              role="presentation"
              focusable="false"
              aria-hidden="true"
            >
              <g className="network-lines">
                <line x1="120" y1="120" x2="120" y2="42" />
                <line x1="120" y1="120" x2="184" y2="72" />
                <line x1="120" y1="120" x2="198" y2="120" />
                <line x1="120" y1="120" x2="184" y2="168" />
                <line x1="120" y1="120" x2="120" y2="198" />
                <line x1="120" y1="120" x2="56" y2="72" />
              </g>

              <circle className="network-node node-core" cx="120" cy="120" r="17" />
              <circle className="network-node" cx="120" cy="42" r="8" />
              <circle className="network-node" cx="184" cy="72" r="8" />
              <circle className="network-node" cx="198" cy="120" r="8" />
              <circle className="network-node" cx="184" cy="168" r="8" />
              <circle className="network-node" cx="120" cy="198" r="8" />
              <circle className="network-node" cx="56" cy="72" r="8" />

              <circle className="network-packet" cx="120" cy="120" r="3" />
            </svg>
          </div>
          <p>Network maps. Security layers. Practical infrastructure.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
