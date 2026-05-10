import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-bio">
            <a className="brand" href="#top" style={{ marginBottom: "14px" }}>
              <Image
                src="/icon.png"
                alt="Faruq Abdulrazaq"
                width={36}
                height={36}
                className="brand-mark"
              />
              <span className="brand-name">Faruq Abdulrazaq</span>
            </a>
            <p>
              Building automation and platform solutions for serious
              infrastructure and operational environments.
            </p>
          </div>
          <div className="foot-col">
            <h5>Sitemap</h5>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#stack">Stack</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="mailto:faruqtayeabdulrazaq@gmail.com">Email</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/faruq-taye-abdulrazaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/faruq-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#contact">Calendly</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Status</h5>
            <ul>
              <li>
                <span style={{ color: "var(--success)" }}>●</span>{" "}
                &nbsp;Available · Jun 2026
              </li>
              <li>
                <span
                  className="mono"
                  style={{ color: "var(--text-3)", fontSize: "12px" }}
                >
                  Lagos / Remote
                </span>
              </li>
              <li>
                <span
                  className="mono"
                  style={{ color: "var(--text-3)", fontSize: "12px" }}
                >
                  UTC +1
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Faruq Abdulrazaq. All systems nominal.</span>
          <span className="right">
            <span>v2.14.0</span>
            <span>·</span>
            <span>built &amp; deployed via gitlab ci</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
