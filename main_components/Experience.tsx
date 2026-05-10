const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}>
    <path d="M5 13l4 4L19 7"/>
  </svg>
);

const contributions = [
  "Building credential rotation automation for enterprise infrastructure platforms — NSX-T, Harbor, and database systems — through a structured, auditable execution pipeline.",
  "Developing Kubernetes backup and restoration automation using Velero, MinIO, and HashiCorp Vault, with namespace-scoped DR workflows.",
  "Contributing to a DevOps automation platform integrating GitLab, GitLab Runners, virtual machines, and deployment workflows for centralized ops orchestration.",
  "Designing operational tooling that improves platform reliability, scalability, and engineering efficiency across infrastructure environments.",
];

export default function Experience() {
  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">03 · PROFESSIONAL EXPERIENCE</span>
          <h2>Where I contribute.</h2>
          <p>Full-time engineering role building automation and platform systems for enterprise telecommunications infrastructure.</p>
        </div>
      </div>

      <div className="exp-card">
        <div className="exp-inner">

          {/* Left — identity */}
          <div className="exp-meta">
            <div className="exp-company">EGA Tech</div>
            <div className="exp-role">Automation Engineer</div>

            <div className="exp-period">
              <span style={{ color: "var(--text-4)" }}>period</span>
              <br />
              Jan 2025 — Present
            </div>

            <div className="exp-period" style={{ marginTop: "14px" }}>
              <span style={{ color: "var(--text-4)" }}>sector</span>
              <br />
              Telecommunications &amp; Infrastructure
            </div>

            <div className="exp-period" style={{ marginTop: "14px" }}>
              <span style={{ color: "var(--text-4)" }}>environment</span>
              <br />
              Enterprise · On-site &amp; Remote
            </div>

            <div className="exp-status" style={{ marginTop: "24px" }}>
              <span className="status-dot" />
              Current position
            </div>
          </div>

          {/* Right — detail */}
          <div className="exp-body">
            <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: "1.65", marginBottom: "28px", marginTop: 0 }}>
              Working on enterprise automation and cloud-native operational tooling for telecommunications and infrastructure environments — building the systems that keep platforms reliable, auditable, and scalable.
            </p>

            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "14px" }}>
              Key contributions
            </div>

            <ul className="exp-contributions">
              {contributions.map((c, i) => (
                <li key={i}>
                  {checkIcon}
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="proj-stack-row" style={{ marginTop: "8px" }}>
              {["Python","FastAPI","GitLab CI","Kubernetes","Velero","HashiCorp Vault","Terraform","React","PostgreSQL"].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
