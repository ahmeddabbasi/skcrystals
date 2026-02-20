const ThreePillars = () => {
  return (
    <section className="divisions-editorial" id="divisions">
      {/* Division 1: Hazardous Fleet - Left aligned with dark background */}
      <div className="division-section division-hazardous">
        <div className="division-content-left">
          <h2 className="division-number">01</h2>
          <h3 className="division-title">Hazardous Fleet</h3>
          <p className="division-description">
            Regulated hazardous materials transport under strict operational governance. 
            Licensed positioning, structured chain-of-custody controls, and comprehensive 
            compliance monitoring for high-risk environments.
          </p>
          <ul className="division-details">
            <li>Licensed hazardous positioning</li>
            <li>Real-time load validation</li>
            <li>Audit-ready documentation</li>
            <li>HSSE-aligned protocols</li>
          </ul>
        </div>
      </div>

      {/* Division 2: Commodities - Right aligned under hazardous section */}
      <div className="division-section division-hazardous">
        <div className="division-content-right" style={{ color: 'var(--white)' }}>
          <h2 className="division-number">02</h2>
          <h3 className="division-title">Commodities</h3>
          <p className="division-description">
            Transport and logistics solutions for bulk commodities and general goods.
            Comprehensive supply chain support with operational oversight and delivery assurance.
          </p>
          <ul className="division-details">
            <li>Bulk commodity transport</li>
            <li>General goods logistics</li>
            <li>Supply chain optimization</li>
            <li>Delivery tracking systems</li>
          </ul>
        </div>
      </div>

      {/* Division 3: Bulk Water - Left aligned, light background */}
      <div className="division-section division-water">
        <div className="division-content-left" style={{ color: 'var(--deep-black)' }}>
          <h2 className="division-number" style={{ color: 'var(--deep-black)' }}>03</h2>
          <h3 className="division-title">Bulk Water</h3>
          <p className="division-description">
            Specialized bulk water transport supporting municipal, industrial, and infrastructure needs. 
            Reliable delivery solutions with structured oversight and compliance monitoring.
          </p>
          <ul className="division-details">
            <li>Municipal supply chains</li>
            <li>Industrial infrastructure</li>
            <li>Emergency resource deployment</li>
            <li>Verified delivery protocols</li>
          </ul>
        </div>
      </div>

      {/* Division 4: Bottled Water - Right aligned under bulk water section */}
      <div className="division-section division-water">
        <div className="division-content-right">
          <h2 className="division-number" style={{ color: 'var(--deep-black)' }}>04</h2>
          <h3 className="division-title">Bottled Water</h3>
          <p className="division-description">
            Distribution and delivery of bottled water for commercial, industrial, and retail requirements.
            Reliable supply chain management with structured logistics and quality assurance.
          </p>
          <ul className="division-details">
            <li>Commercial distribution</li>
            <li>Industrial supply</li>
            <li>Retail partnerships</li>
            <li>Quality-controlled delivery</li>
          </ul>
        </div>
      </div>

      {/* Division 5: AI Intelligence - Centered, dark digital background */}
      <div className="division-section division-ai">
        <div className="division-content-center">
          <h2 className="division-number">05</h2>
          <h3 className="division-title">Digital & Fleet Intelligence</h3>
          <p className="division-description">
            AI-enabled compliance monitoring and fleet execution oversight. Strategic automation, 
            data command systems, and predictive operational intelligence for mission-critical transport.
          </p>
          <ul className="division-details">
            <li>AI-supported event monitoring</li>
            <li>Driver presence verification</li>
            <li>Proof-of-load documentation</li>
            <li>Structured execution tracking</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ThreePillars
