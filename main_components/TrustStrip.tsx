const items = [
  { text: "5+ Years Experience",        icon: "clock" },
  { text: "Enterprise Automation",       icon: "lock" },
  { text: "Kubernetes & DevOps",         icon: "cube" },
  { text: "Infrastructure Operations",   icon: "server" },
  { text: "Full Stack Engineering",      icon: "code" },
  { text: "Cloud Native Tooling",        icon: "cloud" },
];

const icons: Record<string, React.ReactNode> = {
  clock: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  lock:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>,
  cube:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>,
  server:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="6" rx="1"/><rect x="3" y="13" width="18" height="6" rx="1"/><path d="M7 6h.01M7 16h.01"/></svg>,
  code:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
  cloud: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 10a6 6 0 0 0-11-2 4 4 0 0 0-2 7.5h13a4 4 0 0 0 0-5.5z"/></svg>,
};

import React from "react";

function StripContent() {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="strip-item">
            {icons[item.icon]}
            <span>{item.text}</span>
          </span>
          <span className="strip-divider" />
        </React.Fragment>
      ))}
    </>
  );
}

export default function TrustStrip() {
  return (
    <section className="strip" aria-label="Areas of expertise">
      <div className="strip-track">
        <StripContent />
        <StripContent />
        <StripContent />
      </div>
    </section>
  );
}
