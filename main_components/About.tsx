export default function About() {
  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">02 · ABOUT</span>
          <h2>Engineering systems<br/>beyond code.</h2>
        </div>
        <span className="meta-cta"><b>—</b> 5+ yrs · automation · platform · full stack</span>
      </div>

      <div className="about-grid">
        <div>
          <p className="lead" style={{ color: "var(--text-2)" }}>
            I&apos;m a Software and Automation Engineer focused on building scalable automation and
            operational solutions for modern infrastructure and cloud-native environments.
          </p>
          <p style={{ marginTop: "18px" }}>
            Over the years, I&apos;ve worked across DevOps automation, Kubernetes operations,
            infrastructure tooling, and full stack development — delivering solutions that reduce
            manual effort, improve reliability, and streamline enterprise workflows.
          </p>
          <p style={{ marginTop: "14px" }}>
            My experience includes building automation systems for credential rotation across
            platforms such as NSX-T, Harbor, MySQL, and Red Hat environments, as well as
            developing Kubernetes backup and recovery solutions using tools like Velero, MinIO, and
            HashiCorp Vault.
          </p>

          <div className="about-stat-row">
            <div className="about-stat">
              <div className="v">5+</div>
              <div className="l">years shipping</div>
            </div>
            <div className="about-stat">
              <div className="v">99.98<small style={{ color: "var(--accent)", fontSize: "18px" }}>%</small></div>
              <div className="l">platform uptime</div>
            </div>
            <div className="about-stat">
              <div className="v">12k+<small style={{ color: "var(--text-3)", fontSize: "14px", fontFamily: "var(--mono)" }}>/mo</small></div>
              <div className="l">automated runs</div>
            </div>
          </div>
        </div>

        <div className="arch">
          <div className="arch-tb">
            <span style={{ color: "var(--text-2)" }}>stack.diagram</span>
            <span style={{ marginLeft: "auto" }}>prod · live</span>
          </div>
          {[
            { label: "L5 · interface", nodes: [
              { text: "react ui" }, { text: "next.js", type: "info" }, { text: "dashboards" }
            ]},
            { label: "L4 · api", nodes: [
              { text: "fastapi" }, { text: "node services" }, { text: "graphql", type: "info" }
            ]},
            { label: "L3 · automation", nodes: [
              { text: "rotator engine", type: "acc" }, { text: "workflow runners", type: "acc" }, { text: "scheduled jobs" }
            ]},
            { label: "L2 · platform", nodes: [
              { text: "kubernetes" }, { text: "vault" }, { text: "velero" }, { text: "gitlab ci", type: "warn" }
            ]},
            { label: "L1 · infra", nodes: [
              { text: "terraform" }, { text: "nsx-t" }, { text: "linux fleet" }, { text: "postgres / mysql" }
            ]},
          ].map((layer) => (
            <div className="arch-layer" key={layer.label}>
              <span className="label">{layer.label}</span>
              <div className="nodes">
                {layer.nodes.map((n) => (
                  <span key={n.text} className={`arch-node${n.type ? ` ${n.type}` : ""}`}>
                    <span className="dot" />
                    {n.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
