"use client";
import { useState } from "react";

type Viz = "pipeline" | "cluster" | "terminal";

const VIZ_META: Record<Viz, { name: string; status: string }> = {
  pipeline: { name: "platform/pipeline", status: "running" },
  cluster: { name: "platform/cluster", status: "healthy" },
  terminal: { name: "platform/ops", status: "live" },
};

export default function Hero() {
  const [activeViz, setActiveViz] = useState<Viz>("pipeline");
  const meta = VIZ_META[activeViz];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left — copy */}
          <div>
            <div className="hero-eyebrow-row">
              <span className="eyebrow">
                PLATFORM · AUTOMATION · INFRASTRUCTURE
              </span>
            </div>
            <h1>
              Building automation &amp; platform{" "}
              <span className="stroke">solutions</span> that{" "}
              <span className="accent">scale</span>.
            </h1>
            <p className="lead hero-sub">
              Automation Engineer and Full Stack Developer focused on
              infrastructure automation, Kubernetes operations, DevOps tooling,
              and enterprise software systems.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href="#work">
                <span>View projects</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#contact">
                Let&apos;s work together
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <b>5+</b> &nbsp;years building platforms
              </span>
              <span>
                <b>8+</b> &nbsp;automation systems shipped
              </span>
              <span className="mono" style={{ color: "var(--text-4)" }}>
                ━━━
              </span>
              <span>Lagos &nbsp;/&nbsp; remote</span>
            </div>
          </div>

          {/* Right — viz frame */}
          <div>
            <div className="viz-frame">
              <div className="viz-toolbar">
                <span className="lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="path">
                  ~/<span className="seg">{meta.name}</span>.observe
                </span>
                <div className="viz-switcher">
                  {(["pipeline", "cluster", "terminal"] as Viz[]).map((v) => (
                    <button
                      key={v}
                      className={activeViz === v ? "on" : ""}
                      onClick={() => setActiveViz(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <span className="badge">
                  <span className="dot" />
                  <span>{meta.status}</span>
                </span>
              </div>

              <div className="viz-stage">
                {/* VIZ 1: PIPELINE / DAG */}
                <svg
                  className={`viz${activeViz === "pipeline" ? " active" : ""}`}
                  viewBox="0 0 800 360"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity={0} />
                      <stop
                        offset="50%"
                        stopColor="#fb923c"
                        stopOpacity={0.9}
                      />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="dotgrid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="1"
                        cy="1"
                        r="0.6"
                        fill="rgba(255,255,255,0.06)"
                      />
                    </pattern>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="800"
                    height="360"
                    fill="url(#dotgrid)"
                  />
                  <g stroke="#2a313e" strokeWidth="1.5" fill="none">
                    <path d="M120 90 L240 90" />
                    <path d="M320 90 L440 90" />
                    <path d="M520 90 L640 90" />
                    <path d="M120 200 L240 200" />
                    <path d="M320 200 L440 200" />
                    <path d="M520 200 L640 200" />
                    <path d="M280 90 Q280 150 280 200" />
                    <path d="M480 90 Q480 150 480 200" />
                    <path d="M680 90 Q700 150 720 290" />
                    <path d="M680 200 Q700 240 720 290" />
                  </g>
                  <circle r="3.5" fill="#fb923c">
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      path="M40 90 L240 90 L320 90 L440 90 L520 90 L640 90 L720 290"
                    />
                  </circle>
                  <circle r="3" fill="#fb923c" opacity="0.6">
                    <animateMotion
                      dur="3.2s"
                      begin="-1.6s"
                      repeatCount="indefinite"
                      path="M40 200 L240 200 L320 200 L440 200 L520 200 L640 200 L720 290"
                    />
                  </circle>
                  <circle r="2.5" fill="#34d399">
                    <animateMotion
                      dur="3.2s"
                      begin="-0.6s"
                      repeatCount="indefinite"
                      path="M40 90 L240 90 L320 90 L440 90 L520 90 L640 90 L720 290"
                    />
                  </circle>
                  {/* Row 1 */}
                  <g className="node">
                    <rect
                      x="40"
                      y="68"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="54" cy="90" r="4" fill="#34d399" />
                    <text
                      x="64"
                      y="86"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      source
                    </text>
                    <text
                      x="64"
                      y="100"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      git pull
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="240"
                      y="68"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="254" cy="90" r="4" fill="#34d399" />
                    <text
                      x="264"
                      y="86"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      build
                    </text>
                    <text
                      x="264"
                      y="100"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      2.4s
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="440"
                      y="68"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="454" cy="90" r="4" fill="#fbbf24">
                      <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x="464"
                      y="86"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      test
                    </text>
                    <text
                      x="464"
                      y="100"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      142/180
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="640"
                      y="68"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#fb923c"
                    />
                    <circle cx="654" cy="90" r="4" fill="#fb923c" />
                    <text
                      x="664"
                      y="86"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      scan
                    </text>
                    <text
                      x="664"
                      y="100"
                      fill="#fb923c"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      → deploy
                    </text>
                  </g>
                  {/* Row 2 */}
                  <g className="node">
                    <rect
                      x="40"
                      y="178"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="54" cy="200" r="4" fill="#34d399" />
                    <text
                      x="64"
                      y="196"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      vault
                    </text>
                    <text
                      x="64"
                      y="210"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      unsealed
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="240"
                      y="178"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="254" cy="200" r="4" fill="#34d399" />
                    <text
                      x="264"
                      y="196"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      terraform
                    </text>
                    <text
                      x="264"
                      y="210"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      plan
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="440"
                      y="178"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="454" cy="200" r="4" fill="#34d399" />
                    <text
                      x="464"
                      y="196"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      k8s apply
                    </text>
                    <text
                      x="464"
                      y="210"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      12 pods
                    </text>
                  </g>
                  <g className="node">
                    <rect
                      x="640"
                      y="178"
                      width="80"
                      height="44"
                      rx="6"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <circle cx="654" cy="200" r="4" fill="#34d399" />
                    <text
                      x="664"
                      y="196"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                    >
                      verify
                    </text>
                    <text
                      x="664"
                      y="210"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      healthy
                    </text>
                  </g>
                  {/* Release */}
                  <g>
                    <rect
                      x="660"
                      y="270"
                      width="120"
                      height="40"
                      rx="6"
                      fill="#1a1f2a"
                      stroke="#fb923c"
                    />
                    <text
                      x="720"
                      y="288"
                      fill="#fb923c"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      release
                    </text>
                    <text
                      x="720"
                      y="302"
                      fill="#818a98"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      v2.14.0 → prod
                    </text>
                  </g>
                  {/* Labels */}
                  <text
                    x="80"
                    y="50"
                    fill="#5b6473"
                    fontFamily="IBM Plex Mono"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    01
                  </text>
                  <text
                    x="280"
                    y="50"
                    fill="#5b6473"
                    fontFamily="IBM Plex Mono"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    02
                  </text>
                  <text
                    x="480"
                    y="50"
                    fill="#5b6473"
                    fontFamily="IBM Plex Mono"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    03
                  </text>
                  <text
                    x="680"
                    y="50"
                    fill="#5b6473"
                    fontFamily="IBM Plex Mono"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    04
                  </text>
                  {/* Legend */}
                  <g transform="translate(40 330)">
                    <rect width="8" height="8" fill="#34d399" rx="2" />
                    <text
                      x="14"
                      y="8"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      passing
                    </text>
                    <rect x="80" width="8" height="8" fill="#fbbf24" rx="2" />
                    <text
                      x="94"
                      y="8"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      running
                    </text>
                    <rect x="160" width="8" height="8" fill="#fb923c" rx="2" />
                    <text
                      x="174"
                      y="8"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                    >
                      action required
                    </text>
                  </g>
                </svg>

                {/* VIZ 2: CLUSTER TOPOLOGY */}
                <svg
                  className={`viz${activeViz === "cluster" ? " active" : ""}`}
                  viewBox="0 0 800 360"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="0"
                    width="800"
                    height="360"
                    fill="url(#dotgrid)"
                  />
                  <g stroke="#2a313e" strokeWidth="1" fill="none">
                    <path d="M400 90 L180 230" />
                    <path d="M400 90 L400 230" />
                    <path d="M400 90 L620 230" />
                  </g>
                  <circle r="3" fill="#fb923c">
                    <animateMotion
                      dur="2.4s"
                      repeatCount="indefinite"
                      path="M400 90 L180 230"
                    />
                  </circle>
                  <circle r="3" fill="#fb923c">
                    <animateMotion
                      dur="2.4s"
                      begin="-0.8s"
                      repeatCount="indefinite"
                      path="M400 90 L400 230"
                    />
                  </circle>
                  <circle r="3" fill="#fb923c">
                    <animateMotion
                      dur="2.4s"
                      begin="-1.6s"
                      repeatCount="indefinite"
                      path="M400 90 L620 230"
                    />
                  </circle>
                  {/* Control plane */}
                  <g>
                    <rect
                      x="320"
                      y="40"
                      width="160"
                      height="60"
                      rx="8"
                      fill="#141821"
                      stroke="#fb923c"
                    />
                    <text
                      x="400"
                      y="62"
                      fill="#fb923c"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      control plane
                    </text>
                    <text
                      x="400"
                      y="78"
                      fill="#818a98"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      api · scheduler · etcd
                    </text>
                    <circle cx="338" cy="64" r="4" fill="#34d399">
                      <animate
                        attributeName="opacity"
                        values="0.4;1;0.4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  {/* Workers */}
                  <g>
                    <rect
                      x="100"
                      y="220"
                      width="160"
                      height="100"
                      rx="8"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <text
                      x="180"
                      y="242"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      worker-01
                    </text>
                    <text
                      x="180"
                      y="256"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      8 cpu · 32gi
                    </text>
                    <g transform="translate(118 268)">
                      <rect
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="36"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="54"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="72"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#fb923c"
                      />
                      <rect
                        x="90"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                    </g>
                  </g>
                  <g>
                    <rect
                      x="320"
                      y="220"
                      width="160"
                      height="100"
                      rx="8"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <text
                      x="400"
                      y="242"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      worker-02
                    </text>
                    <text
                      x="400"
                      y="256"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      8 cpu · 32gi
                    </text>
                    <g transform="translate(338 268)">
                      <rect
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="36"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="54"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="72"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="90"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      >
                        <animate
                          attributeName="stroke"
                          values="#34d399;#fbbf24;#34d399"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                    </g>
                  </g>
                  <g>
                    <rect
                      x="540"
                      y="220"
                      width="160"
                      height="100"
                      rx="8"
                      fill="#141821"
                      stroke="#2a313e"
                    />
                    <text
                      x="620"
                      y="242"
                      fill="#f3f4f6"
                      fontFamily="IBM Plex Mono"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      worker-03
                    </text>
                    <text
                      x="620"
                      y="256"
                      fill="#5b6473"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      8 cpu · 32gi
                    </text>
                    <g transform="translate(558 268)">
                      <rect
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="36"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="54"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="72"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="90"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                      <rect
                        x="18"
                        y="20"
                        width="14"
                        height="14"
                        rx="3"
                        fill="#0a0c10"
                        stroke="#34d399"
                      />
                    </g>
                  </g>
                  <text
                    x="40"
                    y="20"
                    fill="#5b6473"
                    fontFamily="IBM Plex Mono"
                    fontSize="9"
                  >
                    cluster: prod-eu-west-2 · 24 pods · 99.98%
                  </text>
                </svg>

                {/* VIZ 3: TERMINAL + DASHBOARD */}
                <div
                  className={`viz${activeViz === "terminal" ? " active" : ""}`}
                  style={{
                    display: activeViz === "terminal" ? "grid" : "none",
                    gridTemplateColumns: "1.1fr 1fr",
                    gap: "14px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      background: "#0a0c10",
                      border: "1px solid var(--border-2)",
                      borderRadius: "8px",
                      padding: "14px",
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      lineHeight: "1.65",
                      color: "var(--text-2)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{ color: "var(--text-4)", marginBottom: "4px" }}
                    >
                      $ kubectl get pods -n platform
                    </div>
                    <div>
                      <span style={{ color: "var(--text)" }}>NAME</span>
                      {"                  "}
                      <span style={{ color: "var(--text)" }}>STATUS</span>
                      {"   "}
                      <span style={{ color: "var(--text)" }}>AGE</span>
                    </div>
                    <div>
                      credential-rotator-7d9{" "}
                      <span style={{ color: "var(--success)" }}>Running</span>{" "}
                      4d
                    </div>
                    <div>
                      vault-agent-injector-4f{" "}
                      <span style={{ color: "var(--success)" }}>Running</span>{" "}
                      18d
                    </div>
                    <div>
                      velero-controller-2h{" "}
                      <span style={{ color: "var(--success)" }}>Running</span>{" "}
                      18d
                    </div>
                    <div>
                      backup-scheduler-9k{" "}
                      <span style={{ color: "var(--success)" }}>Running</span>{" "}
                      6d
                    </div>
                    <div style={{ color: "var(--text-4)", marginTop: "8px" }}>
                      $ rotator status --target=harbor
                    </div>
                    <div>
                      →{" "}
                      <span style={{ color: "var(--accent)" }}>
                        rotating credentials
                      </span>{" "}
                      [████████░░]
                    </div>
                    <div style={{ color: "var(--text-3)" }}>
                      {" "}
                      ↳ nsx-t.prod{" "}
                      <span style={{ color: "var(--success)" }}>✓ rotated</span>
                    </div>
                    <div style={{ color: "var(--text-3)" }}>
                      {" "}
                      ↳ harbor.prod{" "}
                      <span style={{ color: "var(--success)" }}>✓ rotated</span>
                    </div>
                    <div style={{ color: "var(--text-3)" }}>
                      {" "}
                      ↳ harbor.eu{" "}
                      <span style={{ color: "var(--warn)" }}>
                        ⟳ in progress
                      </span>
                    </div>
                    <div style={{ color: "var(--text-3)" }}>
                      {" "}
                      ↳ mysql.dr{" "}
                      <span style={{ color: "var(--text-4)" }}>queued</span>
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <span style={{ color: "var(--accent)" }}>▍</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid var(--border-2)",
                        borderRadius: "8px",
                        padding: "12px",
                        background: "var(--surface-2)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          color: "var(--text-3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        deploys / 24h
                      </div>
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: 600,
                          marginTop: "4px",
                        }}
                      >
                        147{" "}
                        <span
                          style={{
                            color: "var(--success)",
                            fontSize: "12px",
                            fontFamily: "var(--mono)",
                          }}
                        >
                          +12%
                        </span>
                      </div>
                      <svg viewBox="0 0 200 40" style={{ marginTop: "8px" }}>
                        <polyline
                          points="0,30 20,28 40,25 60,28 80,20 100,18 120,12 140,16 160,8 180,10 200,4"
                          fill="none"
                          stroke="#fb923c"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        border: "1px solid var(--border-2)",
                        borderRadius: "8px",
                        padding: "12px",
                        background: "var(--surface-2)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          color: "var(--text-3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        cluster health
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(8, 1fr)",
                          gap: "3px",
                          marginTop: "8px",
                        }}
                      >
                        {[
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#fbbf24",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                          "#34d399",
                        ].map((c, i) => (
                          <span
                            key={i}
                            className="hb"
                            style={{ background: c }}
                          />
                        ))}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10.5px",
                          color: "var(--text-3)",
                          marginTop: "8px",
                        }}
                      >
                        99.98% uptime · 23 of 24 nodes
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid var(--border-2)",
                        borderRadius: "8px",
                        padding: "12px",
                        background: "var(--surface-2)",
                        flexGrow: 1,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          color: "var(--text-3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        automation runs
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "flex-end",
                          height: "50px",
                          marginTop: "8px",
                        }}
                      >
                        {[30, 50, 40, 70, 60, 90, 75, 95, 100].map((h, i) => (
                          <span
                            key={i}
                            style={{
                              width: "12px",
                              background: i === 8 ? "#ffa256" : "#fb923c",
                              height: `${h}%`,
                              borderRadius: "2px 2px 0 0",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="float-badges" aria-hidden="true">
                  <span className="tech-badge b1">
                    <span className="swatch" />
                    Kubernetes
                  </span>
                  <span className="tech-badge b2">
                    <span className="swatch" />
                    Vault
                  </span>
                  <span className="tech-badge b3">
                    <span className="swatch" />
                    Terraform
                  </span>
                  <span className="tech-badge b4">
                    <span className="swatch" />
                    FastAPI
                  </span>
                  <span className="tech-badge b5">
                    <span className="swatch" />
                    GitLab CI
                  </span>
                  <span className="tech-badge b6">
                    <span className="swatch" />
                    Velero
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
