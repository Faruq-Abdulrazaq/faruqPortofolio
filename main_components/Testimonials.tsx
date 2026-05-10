const testimonials = [
  {
    quote: "Faruq replaced a manual rotation runbook our team had been dragging through for years. Within a quarter the platform was running 3,000+ rotations a month with full audit trail. It just works.",
    name: "A. Okafor",
    role: "staff infra engineer · enterprise telco",
    initials: "AO",
  },
  {
    quote: "He thinks like a platform engineer first and a developer second — which is exactly what we needed. Velero, Vault, the runner topology, the dashboard for our SREs. All landed clean.",
    name: "R. Vyas",
    role: "director of engineering · fintech platform",
    initials: "RV",
  },
  {
    quote: "Rare to find someone who can ship the automation engine and then design the operator UI on top of it. Our DR drill went from a half-day exercise to under eight minutes.",
    name: "E. Marsden",
    role: "head of platform · b2b saas",
    initials: "EM",
  },
];

export default function Testimonials() {
  return (
    <div className="container">
      <div className="section-head">
        <div className="hl">
          <span className="eyebrow">06 · WHAT TEAMS SAY</span>
          <h2>Quiet on-calls.<br/>Loud results.</h2>
        </div>
      </div>

      <div className="tm-grid">
        {testimonials.map((tm) => (
          <div key={tm.initials} className="tm">
            <div className="tm-quote-mark">&ldquo;</div>
            <div className="tm-quote">{tm.quote}</div>
            <div className="tm-attr">
              <div className="tm-avatar">{tm.initials}</div>
              <div>
                <div className="name">{tm.name}</div>
                <div className="role">{tm.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
