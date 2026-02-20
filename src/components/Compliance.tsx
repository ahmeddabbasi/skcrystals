const Compliance = () => {
  const isoStandards = [
    { code: 'ISO 9001/2015', description: 'Quality Management System' },
    { code: 'SQAS', description: 'Safety & Quality Assessment System (Pending)' },
    { code: 'ISO 45000', description: 'Occupational Health & Safety (Pending)' },
    { code: 'RTMS', description: 'Road Transport Management System' },
    { code: 'BBBEE LEVEL 1', description: 'Broad-Based Black Economic Empowerment' }
  ]

  const governanceItems = [
    'HSSE-aligned operational discipline',
    'Structured chain-of-custody governance',
    'Audit-ready documentation systems'
  ]

  return (
    <section className="section-white">
      <div className="container">
        <h2 className="section-title">Compliance & Safety Governance</h2>
        <div className="compliance-grid">
          <div className="compliance-block">
            <h3>Compliance & Certification Roadmap</h3>
            <p>
              SK Crystals is implementing ISO-aligned management systems to reinforce structured compliance, 
              safety governance, and continuous operational improvement across hazardous and bulk transport environments.
            </p>
            <p className="framework-intro">Our framework is aligned to internationally recognised standards including:</p>
            <ul className="framework-list">
              {isoStandards.map((standard, index) => (
                <li key={index}>
                  <strong>{standard.code}</strong> – {standard.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="compliance-block">
            <h3>Governance & Enterprise Alignment</h3>
            <ul className="governance-list">
              {governanceItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="compliance-footer">
          Safety and compliance are embedded into every stage of transport — from dispatch to delivery.
        </p>
      </div>
    </section>
  )
}

export default Compliance
