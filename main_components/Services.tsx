export default function Services() {
  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">03 · SPECIALIZATIONS</span>
          <h2>What I build.</h2>
          <p>Four practice areas where I deliver enterprise-grade systems — from CI/CD automation to full stack operational platforms.</p>
        </div>
      </div>

      <div className="svc-grid">
        {/* A */}
        <article className="svc">
          <div className="svc-key">A · INFRA &amp; DEVOPS AUTOMATION</div>
          <h3>Pipelines &amp; deployment automation that hold up in production.</h3>
          <p>CI/CD workflows, GitLab pipelines, runners, and operational automation tooling that ship deterministically.</p>
          <ul className="svc-list">
            <li>CI/CD workflows</li><li>GitLab pipelines</li>
            <li>Automation tooling</li><li>Operational automation</li>
            <li>Deployment workflows</li><li>Runner orchestration</li>
          </ul>
          <div className="svc-viz">
            <svg viewBox="0 0 360 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              <g stroke="#2a313e" strokeWidth="1" fill="none">
                <path d="M20 40 L100 40 L140 40 L220 40 L260 40 L340 40"/>
              </g>
              <circle r="3" fill="#fb923c"><animateMotion dur="3s" repeatCount="indefinite" path="M20 40 L340 40"/></circle>
              <g><rect x="10" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#2a313e"/><text x="21" y="44" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">src</text></g>
              <g><rect x="90" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#2a313e"/><text x="101" y="44" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">ci</text></g>
              <g><rect x="130" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#2a313e"/><text x="141" y="44" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">tst</text></g>
              <g><rect x="210" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#fb923c"/><text x="221" y="44" fill="#fb923c" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">scn</text></g>
              <g><rect x="250" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#2a313e"/><text x="261" y="44" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">dpl</text></g>
              <g><rect x="328" y="30" width="22" height="20" rx="3" fill="#141821" stroke="#34d399"/><text x="339" y="44" fill="#34d399" fontFamily="IBM Plex Mono" fontSize="8" textAnchor="middle">rls</text></g>
            </svg>
          </div>
        </article>

        {/* B */}
        <article className="svc">
          <div className="svc-key">B · KUBERNETES &amp; PLATFORM</div>
          <h3>Cluster operations &amp; cloud-native tooling.</h3>
          <p>Backup &amp; recovery automation, container orchestration, and platform engineering for production-grade Kubernetes.</p>
          <ul className="svc-list">
            <li>Backup / recovery</li><li>Cluster operations</li>
            <li>Container orchestration</li><li>Cloud-native tooling</li>
            <li>Velero workflows</li><li>HA &amp; DR strategy</li>
          </ul>
          <div className="svc-viz">
            <svg viewBox="0 0 360 80" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
              <g transform="translate(20 18)">
                {[0,20,40,60,80,100,120,140,160,180].map((x, i) => (
                  <rect key={`r1-${i}`} x={x} width="14" height="14" rx="2" fill="#0a0c10" stroke={i === 4 ? "#fb923c" : "#34d399"}/>
                ))}
                {[0,20,40,60,80,100,120,140,160,180].map((x, i) => (
                  <rect key={`r2-${i}`} x={x} y="20" width="14" height="14" rx="2" fill="#0a0c10" stroke={i === 6 ? "#fbbf24" : "#34d399"}>
                    {i === 6 && <animate attributeName="stroke" values="#34d399;#fbbf24;#34d399" dur="2.4s" repeatCount="indefinite"/>}
                  </rect>
                ))}
              </g>
              <text x="240" y="38" fill="#f3f4f6" fontFamily="IBM Plex Mono" fontSize="11">backup</text>
              <text x="240" y="54" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="9">velero · 18h ago</text>
              <text x="320" y="38" fill="#fb923c" fontFamily="IBM Plex Mono" fontSize="11" textAnchor="end">100%</text>
            </svg>
          </div>
        </article>

        {/* C */}
        <article className="svc">
          <div className="svc-key">C · ENTERPRISE AUTOMATION</div>
          <h3>Internal systems that turn ops chaos into routine.</h3>
          <p>Credential rotation, audit-ready workflows, and the internal engineering tools that quiet on-call rotations.</p>
          <ul className="svc-list">
            <li>Credential rotation</li><li>Operational workflows</li>
            <li>Internal eng tools</li><li>Audit-ready systems</li>
            <li>Approval pipelines</li><li>Compliance reporting</li>
          </ul>
          <div className="svc-viz">
            <svg viewBox="0 0 360 80" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
              <g transform="translate(180 40)">
                <circle r="22" fill="none" stroke="#2a313e" strokeWidth="1"/>
                <circle r="22" fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="138" strokeDashoffset="38" transform="rotate(-90)">
                  <animate attributeName="strokeDashoffset" values="138;0;138" dur="6s" repeatCount="indefinite"/>
                </circle>
                <text y="4" fill="#fb923c" fontFamily="IBM Plex Mono" fontSize="11" textAnchor="middle" fontWeight="600">↻</text>
              </g>
              <g fontFamily="IBM Plex Mono" fontSize="9" fill="#5b6473">
                <text x="40" y="28">nsx-t</text><circle cx="34" cy="25" r="2.5" fill="#34d399"/>
                <text x="40" y="46">harbor</text><circle cx="34" cy="43" r="2.5" fill="#34d399"/>
                <text x="40" y="64">ops-dash</text><circle cx="34" cy="61" r="2.5" fill="#fbbf24"/>
                <text x="320" y="28" textAnchor="end">mysql</text><circle cx="328" cy="25" r="2.5" fill="#5b6473"/>
                <text x="320" y="46" textAnchor="end">vault</text><circle cx="328" cy="43" r="2.5" fill="#34d399"/>
                <text x="320" y="64" textAnchor="end">redhat</text><circle cx="328" cy="61" r="2.5" fill="#5b6473"/>
              </g>
            </svg>
          </div>
        </article>

        {/* D */}
        <article className="svc">
          <div className="svc-key">D · FULL STACK ENGINEERING</div>
          <h3>Modern web apps &amp; operational platforms.</h3>
          <p>Internal dashboards, API systems, and operator-facing platforms with the polish your team will actually use.</p>
          <ul className="svc-list">
            <li>Modern web apps</li><li>Internal dashboards</li>
            <li>Operational platforms</li><li>API systems</li>
            <li>Design-led UX</li><li>Realtime &amp; SSE</li>
          </ul>
          <div className="svc-viz">
            <svg viewBox="0 0 360 80" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
              <g>
                <rect x="20" y="14" width="320" height="14" rx="3" fill="#141821" stroke="#2a313e"/>
                <rect x="22" y="16" width="8" height="10" rx="2" fill="#34d399"/>
                <text x="36" y="24" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="9">/api/services · 200 OK · 18ms</text>
                <rect x="20" y="34" width="320" height="14" rx="3" fill="#141821" stroke="#2a313e"/>
                <rect x="22" y="36" width="8" height="10" rx="2" fill="#34d399"/>
                <text x="36" y="44" fill="#5b6473" fontFamily="IBM Plex Mono" fontSize="9">/api/credentials · 200 OK · 24ms</text>
                <rect x="20" y="54" width="320" height="14" rx="3" fill="#141821" stroke="#fb923c"/>
                <rect x="22" y="56" width="8" height="10" rx="2" fill="#fb923c"/>
                <text x="36" y="64" fill="#fb923c" fontFamily="IBM Plex Mono" fontSize="9">/api/rotate · 202 ACCEPTED · 31ms</text>
              </g>
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
}
