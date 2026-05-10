"use client";
import { useState } from "react";

const calendarStates = [
  "", "", "partial", "", "", "", "",
  "busy", "partial", "", "", "", "", "partial",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.target as HTMLFormElement;
    const get = (id: string) =>
      (form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value ?? "";

    const data = {
      name:        get("f-name"),
      company:     get("f-co"),
      email:       get("f-email"),
      projectType: get("f-type"),
      message:     get("f-msg"),
    };

    try {
      const res = await fetch("/api/brevo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || `Error ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try email directly.");
      setStatus("error");
    }
  }

  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">07 · WORK TOGETHER</span>
          <h2>
            Let&apos;s build reliable<br />systems together.
          </h2>
          <p>
            Open to enterprise automation, DevOps, platform engineering,
            infrastructure tooling, and scalable software projects.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input id="f-name" name="f-name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="f-co">Company</label>
              <input id="f-co" name="f-co" type="text" placeholder="Acme Platform Co." />
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" name="f-email" type="email" placeholder="jane@acme.io" required />
          </div>
          <div className="field">
            <label htmlFor="f-type">Project type</label>
            <select id="f-type" name="f-type">
              <option>Infrastructure / DevOps automation</option>
              <option>Kubernetes &amp; platform engineering</option>
              <option>Enterprise automation</option>
              <option>Full stack engineering</option>
              <option>Consultation / advisory</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-msg">Brief</label>
            <textarea
              id="f-msg"
              name="f-msg"
              placeholder="A short description of what you're trying to build or solve..."
            />
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "6px" }}>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === "loading"}
              style={{ opacity: status === "loading" ? 0.7 : 1 }}
            >
              {status === "loading" ? "Sending…" : "Send brief"}
              {status !== "loading" && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              )}
            </button>
            <span className="mono" style={{ fontSize: "11.5px", color: "var(--text-4)" }}>
              replies within 24 hrs
            </span>
          </div>

          {status === "success" && (
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "12px 14px",
              background: "rgba(52,211,153,0.06)",
              border: "1px solid rgba(52,211,153,0.3)",
              borderRadius: "8px",
              fontFamily: "var(--mono)", fontSize: "12px", color: "#34d399",
              marginTop: "6px",
            }}>
              <span>✓</span> Brief received. I&apos;ll be in touch shortly.
            </div>
          )}

          {status === "error" && (
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "12px 14px",
              background: "rgba(248,113,113,0.06)",
              border: "1px solid rgba(248,113,113,0.3)",
              borderRadius: "8px",
              fontFamily: "var(--mono)", fontSize: "12px", color: "#f87171",
              marginTop: "6px",
            }}>
              <span>✗</span> {errorMsg}
            </div>
          )}
        </form>

        <aside className="contact-side">
          <h4>Channels</h4>
          {[
            {
              label: "Email", value: "faruqtayeabdulrazaq@gmail.com",
              href: "mailto:faruqtayeabdulrazaq@gmail.com", btnLabel: "Open",
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>,
            },
            {
              label: "LinkedIn", value: "in/faruq-abdulrazaq",
              href: "https://www.linkedin.com/in/faruq-taye-abdulrazaq/", btnLabel: "Open",
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
            },
            {
              label: "GitHub", value: "@faruq-developer",
              href: "https://github.com/faruq-developer", btnLabel: "Open",
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.4 3.4 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.43 5.43 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.4 13.4 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.43 5.43 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
            },
            {
              label: "Consultations", value: "Book a 30-min call",
              href: "#contact", btnLabel: "Book",
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
            },
          ].map(({ label, value, href, btnLabel, icon }) => (
            <div key={label} className="contact-channel">
              <div className="left">
                <div className="ico">{icon}</div>
                <div>
                  <div className="clabel">{label}</div>
                  <div className="cvalue">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {value}
                    </a>
                  </div>
                </div>
              </div>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-sm btn-ghost">
                {btnLabel}
              </a>
            </div>
          ))}

          <div className="availability">
            <div className="row">
              <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Next 2 weeks
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--success)" }}>
                <span className="status-dot" style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--success)", marginRight: "6px", verticalAlign: "middle" }} />
                open
              </span>
            </div>
            <div className="calendar">
              {calendarStates.map((state, i) => (
                <span key={i} className={`day${state ? ` ${state}` : ""}`} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
