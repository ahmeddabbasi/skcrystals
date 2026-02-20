const TripleCrown = () => {
  const features = [
    'Verified driver presence before load release',
    'Structured chain-of-custody controls',
    'Real-time load validation',
    'AI-supported event monitoring',
    'Proof-of-load and proof-of-delivery documentation',
    'Audit-ready reporting'
  ]

  return (
    <section className="section-white">
      <div className="container">
        <h2 className="section-title">Triple Crown Fleet Integrity System™</h2>
        <h3 className="section-subtitle">Presence. Control. Accountability.</h3>
        <div className="section-content">
          <p>
            At the core of our operations is the Triple Crown Fleet Integrity System™ — a structured execution 
            and compliance framework designed for high-risk and regulated bulk transport environments.
          </p>
          <p className="system-intro">The system integrates:</p>
          <ul className="system-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="system-tagline">
            Engineered for hazardous materials and specialised bulk water operations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TripleCrown
