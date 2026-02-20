const AboutSection = () => {
  return (
    <section style={{ 
      background: 'var(--deep-black)', 
      padding: '6rem 0',
      borderTop: '1px solid rgba(201, 162, 39, 0.1)',
      borderBottom: '1px solid rgba(201, 162, 39, 0.1)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            marginBottom: '2rem',
            color: 'var(--white)'
          }}>
            Operational Discipline. Structured Execution.
          </h2>
          <p style={{ 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            color: 'var(--grey-light)',
            marginBottom: '1.5rem'
          }}>
            SK Crystals operates in regulated hazardous materials, specialised bulk water transport, bottled water distribution, and commodities logistics. 
            Built on a legacy of respected transport leadership, the company combines generational industry 
            expertise with structured compliance and modern oversight systems.
          </p>
          <p style={{ 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            color: 'var(--grey-light)'
          }}>
            SK Crystals is a proudly <strong style={{ color: 'var(--matte-gold)' }}>female-owned, Level 1 B-BBEE enterprise</strong>, 
            contributing to transformation within South Africa's logistics and transport infrastructure sector 
            while maintaining uncompromising operational standards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
