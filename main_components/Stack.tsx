"use client";
import { useState } from "react";

type Category = "all" | "automation" | "devops" | "cloud" | "backend" | "frontend" | "data" | "infra";

const STACK = [
  { n: "Python",     c: ["automation","backend"], d: "core scripting · automation engines", g: "py" },
  { n: "FastAPI",    c: ["automation","backend"], d: "high-perf python apis",               g: "fa" },
  { n: "GitLab CI",  c: ["automation","devops"],  d: "pipelines · runners · gitops",        g: "gl" },
  { n: "Bash",       c: ["automation","infra"],   d: "ops scripting · runbooks",            g: "sh" },
  { n: "Docker",     c: ["devops","cloud"],       d: "container runtime",                   g: "dk" },
  { n: "Kubernetes", c: ["devops","cloud"],       d: "orchestration · operations",          g: "k8" },
  { n: "Terraform",  c: ["devops","infra"],       d: "infrastructure as code",              g: "tf" },
  { n: "CI / CD",    c: ["devops"],               d: "build · test · deploy",              g: "ci" },
  { n: "Velero",     c: ["cloud"],                d: "k8s backup · recovery",              g: "vl" },
  { n: "MinIO",      c: ["cloud","data"],         d: "s3-compatible object store",         g: "mi" },
  { n: "Vault",      c: ["cloud","infra"],        d: "secrets · pki · rotation",           g: "vt" },
  { n: "Node.js",    c: ["backend"],              d: "service apis · event loops",         g: "nd" },
  { n: "Express",    c: ["backend"],              d: "lightweight rest",                   g: "ex" },
  { n: "React",      c: ["frontend"],             d: "ui component model",                 g: "re" },
  { n: "Next.js",    c: ["frontend"],             d: "ssr · operator dashboards",          g: "nx" },
  { n: "PostgreSQL", c: ["data"],                 d: "transactional · analytics",          g: "pg" },
  { n: "MySQL",      c: ["data"],                 d: "operational systems",                g: "my" },
  { n: "MongoDB",    c: ["data"],                 d: "document store · audits",            g: "mo" },
  { n: "Linux",      c: ["infra"],                d: "rhel · ubuntu fleet",               g: "lx" },
  { n: "NSX-T",      c: ["infra"],                d: "sd-network · automation",           g: "ns" },
];

const TABS: { label: string; value: Category }[] = [
  { label: "all",            value: "all" },
  { label: "automation",     value: "automation" },
  { label: "devops",         value: "devops" },
  { label: "cloud native",   value: "cloud" },
  { label: "backend",        value: "backend" },
  { label: "frontend",       value: "frontend" },
  { label: "databases",      value: "data" },
  { label: "infrastructure", value: "infra" },
];

export default function Stack() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? STACK : STACK.filter(s => s.c.includes(active));

  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">05 · TECH STACK</span>
          <h2>The toolbox.</h2>
          <p>Tools I reach for, organized the way I think about systems — from automation logic down to the metal.</p>
        </div>
      </div>

      <div className="stack-tabs">
        {TABS.map(({ label, value }) => (
          <button
            key={value}
            className={`stack-tab${active === value ? " active" : ""}`}
            onClick={() => setActive(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="stack-grid">
        {filtered.map((item) => (
          <article key={item.n} className="stack-tile">
            <div className="stack-tile-icon">
              <span style={{ fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 600 }}>{item.g}</span>
            </div>
            <div className="stack-tile-name">{item.n}</div>
            <div className="stack-tile-desc">{item.d}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
