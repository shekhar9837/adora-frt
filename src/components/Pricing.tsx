
const plans = [
  {
    name: "standard",
    price: "$4999/m",
    description: "We build one feature request at a time. Pause or cancel anytime.",
    color: "#222",
    buttonBg: "#ff6600",
    textColor: "#fff",
  },
  {
    name: "goblin +",
    price: "$9999/m",
    description:
      "Goblin mode. In goblin mode we work faster than you can create a job posting.",
    color: "linear-gradient(135deg, #ff6600 0%, #ff3300 100%)",
    buttonBg: "#222",
    textColor: "#fff",
  },
];

export default function Pricing() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "48px 0",
        fontFamily: "'Inter', 'Arial', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 8,
          }}
        >
          Memberships levels
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#ccc" }}>
          Choose a plan that's right for you.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            style={{
              background: plan.color,
              borderRadius: 32,
              width: 340,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              padding: "32px 0 0 0",
              position: "relative",
              color: plan.textColor,
            }}
          >
            <div style={{ padding: "0 32px" }}>
              <div style={{ fontWeight: 600, fontSize: "1.1rem", opacity: 0.8 }}>
                {plan.name}
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  margin: "12px 0 0 0",
                  letterSpacing: "-2px",
                }}
              >
                {plan.price}
                <span style={{ fontSize: "1rem", fontWeight: 400, marginLeft: 4, opacity: 0.7 }}>
                  USD
                </span>
              </div>
              <div style={{ margin: "18px 0 0 0", fontSize: "1.1rem", opacity: 0.95 }}>
                {plan.description}
              </div>
            </div>
            <div
              style={{
                background: idx === 0 ? "#ff6600" : "linear-gradient(135deg, #ff6600 0%, #ff3300 100%)",
                borderRadius: "0 0 32px 32px",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 32,
              }}
            >
              <button
                style={{
                  background: plan.buttonBg,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  border: "none",
                  borderRadius: 12,
                  padding: "10px 28px 10px 18px",
                  cursor: "pointer",
                  marginRight: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                start
              </button>
              <span
                style={{
                  background: "#222",
                  color: "#fff",
                  borderRadius: 6,
                  padding: "6px 8px",
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
