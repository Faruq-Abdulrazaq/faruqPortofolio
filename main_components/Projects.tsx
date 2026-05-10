const checkIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const arrowIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function Projects() {
  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">04 · FEATURED WORK</span>
          <h2>Selected projects.</h2>
          <p>
            A subset of recent platforms — automation systems, Kubernetes
            tooling, and internal products shipped to enterprise environments.
          </p>
        </div>
        <a className="btn-link mono" href="#contact">
          request full case studies →
        </a>
      </div>

      <div className="proj-stack">
        {/* Project 1 — hero */}
        <article className="proj">
          <div className="proj-hero">
            <div className="proj-hero-content">
              <div className="proj-tag">
                <b>01</b> · enterprise · automation · 2025
              </div>
              <h3>Enterprise Credential Rotation Platform</h3>
              <p>
                An automation system for rotating credentials across enterprise
                infrastructure platforms — including NSX-T, Harbor, and
                database systems — through a structured, auditable execution
                pipeline.
              </p>
              <ul className="proj-features">
                <li>{checkIcon}Automated credential rotation</li>
                <li>{checkIcon}Secure operational workflows</li>
                <li>{checkIcon}Structured execution pipeline</li>
                <li>{checkIcon}Audit logging end-to-end</li>
                <li>{checkIcon}Scalable automation engine</li>
                <li>{checkIcon}RBAC &amp; approval workflows</li>
              </ul>
              <div className="proj-stack-row">
                {[
                  "Python",
                  "FastAPI",
                  "Vault",
                  "PostgreSQL",
                  "React",
                  "GitLab CI",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <a className="proj-cta" href="#contact">
                read case study {arrowIcon}
              </a>
            </div>
            <div className="proj-hero-mock">
              <div
                style={{
                  border: "1px solid var(--border-2)",
                  borderRadius: "10px",
                  background: "var(--surface-1)",
                  overflow: "hidden",
                  boxShadow: "0 24px 48px -24px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    borderBottom: "1px solid var(--border)",
                    background: "rgba(0,0,0,0.25)",
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--text-3)",
                  }}
                >
                  <span style={{ display: "inline-flex", gap: "5px" }}>
                    <i
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#f87171",
                        display: "inline-block",
                      }}
                    />
                    <i
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#fbbf24",
                        display: "inline-block",
                      }}
                    />
                    <i
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#34d399",
                        display: "inline-block",
                      }}
                    />
                  </span>
                  <span>rotator.platform.io</span>
                </div>
                <div style={{ padding: "16px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    {[
                      { label: "queued", val: "128", accent: false },
                      { label: "in flight", val: "14", accent: true },
                      { label: "rotated · 30d", val: "3.2k", accent: false },
                    ].map(({ label, val, accent }) => (
                      <div
                        key={label}
                        style={{
                          border: `1px solid ${accent ? "var(--accent)" : "var(--border-2)"}`,
                          borderRadius: "6px",
                          padding: "10px",
                          background: accent
                            ? "rgba(251,146,60,0.05)"
                            : "var(--surface-2)",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "9px",
                            color: accent ? "var(--accent)" : "var(--text-3)",
                            textTransform: "uppercase",
                          }}
                        >
                          {label}
                        </div>
                        <div style={{ fontSize: "18px", fontWeight: 600 }}>
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--text-3)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    recent rotations
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {[
                      {
                        color: "#34d399",
                        name: "harbor.prod / svc-acct-19",
                        time: "14:02:31",
                        status: "ok",
                        sc: "#34d399",
                      },
                      {
                        color: "#fbbf24",
                        name: "harbor.eu / api-key-04",
                        time: "14:02:18",
                        status: "running",
                        sc: "#fbbf24",
                      },
                      {
                        color: "#34d399",
                        name: "nsx-t.dc1 / admin",
                        time: "14:01:54",
                        status: "ok",
                        sc: "#34d399",
                      },
                      {
                        color: "#34d399",
                        name: "mysql.dr / replica-rw",
                        time: "14:01:39",
                        status: "ok",
                        sc: "#34d399",
                      },
                    ].map((row) => (
                      <div
                        key={row.name}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "14px 1fr auto auto",
                          gap: "10px",
                          alignItems: "center",
                          padding: "8px 10px",
                          border: "1px solid var(--border-2)",
                          borderRadius: "6px",
                          background: "var(--surface-2)",
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                        }}
                      >
                        <span
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: row.color,
                            display: "inline-block",
                          }}
                        />
                        <span style={{ color: "var(--text)" }}>{row.name}</span>
                        <span style={{ color: "var(--text-3)" }}>
                          {row.time}
                        </span>
                        <span style={{ color: row.sc }}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="proj-metrics">
            {[
              {
                v: (
                  <>
                    87<small>%</small>
                  </>
                ),
                l: "manual ops removed",
              },
              {
                v: (
                  <>
                    3.2k
                    <small
                      style={{
                        fontSize: "13px",
                        color: "var(--text-3)",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      /mo
                    </small>
                  </>
                ),
                l: "rotations executed",
              },
              { v: "SOC 2", l: "audit-ready logs" },
              { v: "0", l: "incidents · 14 mo" },
            ].map((m, i) => (
              <div key={i} className="proj-metric">
                <div className="v">{m.v}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Projects 2 + 3 row */}
        <div className="proj-row">
          <article className="proj proj-card">
            <div>
              <div className="proj-tag">
                <b>02</b> · platform · k8s · 2026
              </div>
              <h3>Kubernetes Backup &amp; Recovery Automation</h3>
              <p>
                Backup and restoration platform for Kubernetes applications
                using Velero, MinIO, and HashiCorp Vault — with namespace-scoped
                DR workflows.
              </p>
              <ul className="proj-features" style={{ marginTop: "18px" }}>
                <li>{checkIcon}Backup scheduling</li>
                <li>{checkIcon}Namespace restore</li>
                <li>{checkIcon}Secret-safe handling</li>
                <li>{checkIcon}DR runbooks</li>
              </ul>
              <div className="proj-stack-row" style={{ marginBottom: "8px" }}>
                {["Velero", "MinIO", "Vault", "Python"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="proj-mock">
              <svg
                viewBox="0 0 400 200"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: "100%", height: "100%" }}
              >
                <g fontFamily="IBM Plex Mono" fontSize="9" fill="#5b6473">
                  <text x="20" y="22">
                    backup timeline · 7d
                  </text>
                </g>
                <line
                  x1="20"
                  y1="80"
                  x2="380"
                  y2="80"
                  stroke="#2a313e"
                  strokeWidth="1"
                />
                {[
                  { cx: 40, day: "mon", color: "#34d399", pulse: false },
                  { cx: 100, day: "tue", color: "#34d399", pulse: false },
                  { cx: 160, day: "wed", color: "#34d399", pulse: false },
                  { cx: 220, day: "thu", color: "#34d399", pulse: false },
                  {
                    cx: 280,
                    day: "fri · partial",
                    color: "#fbbf24",
                    pulse: false,
                  },
                  { cx: 340, day: "sat · live", color: "#34d399", pulse: true },
                ].map(({ cx, day, color, pulse }) => (
                  <g key={day}>
                    <circle cx={cx} cy="80" r="6" fill={color}>
                      {pulse && (
                        <animate
                          attributeName="r"
                          values="6;9;6"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      )}
                    </circle>
                    <text
                      x={cx}
                      y="105"
                      fill={
                        pulse || day.includes("partial") ? color : "#5b6473"
                      }
                      fontFamily="IBM Plex Mono"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      {day}
                    </text>
                  </g>
                ))}
                <g
                  transform="translate(20 140)"
                  fontFamily="IBM Plex Mono"
                  fontSize="10"
                >
                  <rect
                    width="160"
                    height="40"
                    rx="4"
                    fill="#141821"
                    stroke="#2a313e"
                  />
                  <text x="10" y="16" fill="#5b6473" fontSize="8">
                    RPO
                  </text>
                  <text
                    x="10"
                    y="32"
                    fill="#f3f4f6"
                    fontSize="13"
                    fontWeight="600"
                  >
                    15 min
                  </text>
                  <rect
                    x="180"
                    width="160"
                    height="40"
                    rx="4"
                    fill="#141821"
                    stroke="#2a313e"
                  />
                  <text x="190" y="16" fill="#5b6473" fontSize="8">
                    RTO
                  </text>
                  <text
                    x="190"
                    y="32"
                    fill="#fb923c"
                    fontSize="13"
                    fontWeight="600"
                  >
                    &lt; 8 min
                  </text>
                </g>
              </svg>
            </div>
          </article>

          <article className="proj proj-card">
            <div>
              <div className="proj-tag">
                <b>03</b> · devops · platform · 2026
              </div>
              <h3>DevOps Automation Platform</h3>
              <p>
                Internal platform integrating GitLab, GitLab Runners, virtual
                machines, and deployment automation workflows — single pane for
                ops orchestration.
              </p>
              <ul className="proj-features" style={{ marginTop: "18px" }}>
                <li>{checkIcon}Deploy orchestration</li>
                <li>{checkIcon}Operational workflows</li>
                <li>{checkIcon}Infra automation</li>
                <li>{checkIcon}Centralized mgmt</li>
              </ul>
              <div className="proj-stack-row" style={{ marginBottom: "8px" }}>
                {["GitLab", "Terraform", "FastAPI", "React"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="proj-mock">
              <svg
                viewBox="0 0 400 200"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: "100%", height: "100%" }}
              >
                <text
                  x="20"
                  y="22"
                  fill="#5b6473"
                  fontFamily="IBM Plex Mono"
                  fontSize="9"
                >
                  runner pool · live
                </text>
                <g transform="translate(20 36)">
                  {[
                    {
                      x: 0,
                      color: "#34d399",
                      name: "runner-01",
                      sub: "3 jobs · idle 12s",
                    },
                    {
                      x: 96,
                      color: "#fb923c",
                      name: "runner-02",
                      sub: "8 jobs · busy",
                    },
                    {
                      x: 192,
                      color: "#34d399",
                      name: "runner-03",
                      sub: "2 jobs · idle 4m",
                    },
                    {
                      x: 288,
                      color: "#34d399",
                      name: "runner-04",
                      sub: "5 jobs · idle 41s",
                    },
                  ].map(({ x, color, name, sub }) => (
                    <g key={name} transform={`translate(${x} 0)`}>
                      <rect
                        width="90"
                        height="40"
                        rx="4"
                        fill="#141821"
                        stroke={color}
                      />
                      <text
                        x="10"
                        y="14"
                        fill={color}
                        fontFamily="IBM Plex Mono"
                        fontSize="9"
                      >
                        {name}
                      </text>
                      <text
                        x="10"
                        y="30"
                        fill="#5b6473"
                        fontFamily="IBM Plex Mono"
                        fontSize="8"
                      >
                        {sub}
                      </text>
                    </g>
                  ))}
                </g>
                <g transform="translate(20 100)">
                  <text fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="9">
                    jobs / hr
                  </text>
                  <polyline
                    points="0,80 30,72 60,68 90,55 120,60 150,40 180,48 210,28 240,34 270,18 300,22 330,8 360,14"
                    fill="none"
                    stroke="#fb923c"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="0,80 30,72 60,68 90,55 120,60 150,40 180,48 210,28 240,34 270,18 300,22 330,8 360,14 360,90 0,90"
                    fill="rgba(251,146,60,0.08)"
                    stroke="none"
                  />
                </g>
              </svg>
            </div>
          </article>
        </div>

        {/* Project 4 */}
        <article
          className="proj proj-card"
          style={{ padding: "28px 28px 28px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="proj-tag">
                <b>04</b> · full stack · operational · ongoing
              </div>
              <h3>ERP &amp; Operational Platforms</h3>
              <p>
                A collection of ERP, e-commerce, logistics, and operational
                management systems built for real businesses — clean enterprise
                UX backed by reliable APIs and audit trails.
              </p>
              <div className="proj-stack-row" style={{ marginTop: "18px" }}>
                {["Next.js", "Node.js", "PostgreSQL", "FastAPI", "Docker"].map(
                  (t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "8px",
              }}
            >
              {[
                { label: "erp", val: "06" },
                { label: "commerce", val: "04" },
                { label: "logistics", val: "03" },
                { label: "internal", val: "11" },
              ].map(({ label, val }) => (
                <div
                  key={label}
                  style={{
                    border: "1px solid var(--border-2)",
                    borderRadius: "8px",
                    padding: "14px",
                    background: "var(--surface-2)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "9px",
                      color: "var(--text-3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      marginTop: "4px",
                    }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
