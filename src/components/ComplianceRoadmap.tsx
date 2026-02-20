const ComplianceRoadmap = () => {
  return (
    <section className="compliance-editorial" id="compliance">
      <div className="compliance-container">
        <h2 className="compliance-heading">Compliance & Standards</h2>
        
        <div className="compliance-statements">
          {/* Completed Standards */}
          <div className="compliance-item">
            <div className="compliance-header">
              <h3 className="compliance-standard">ISO 9001/2015</h3>
              <p className="compliance-status">Quality Management System</p>
            </div>
            <div className="compliance-progress-container">
              <div className="compliance-progress-bar">
                <div className="compliance-progress-fill" style={{ width: '100%' }}>
                  <span className="progress-percentage">✓</span>
                </div>
              </div>
            </div>
          </div>
          <div className="compliance-divider"></div>
          
          <div className="compliance-item">
            <div className="compliance-header">
              <h3 className="compliance-standard">RTMS</h3>
              <p className="compliance-status">Road Transport Management System</p>
            </div>
            <div className="compliance-progress-container">
              <div className="compliance-progress-bar">
                <div className="compliance-progress-fill" style={{ width: '100%' }}>
                  <span className="progress-percentage">✓</span>
                </div>
              </div>
            </div>
          </div>
          <div className="compliance-divider"></div>
          
          <div className="compliance-item">
            <div className="compliance-header">
              <h3 className="compliance-standard">BBBEE LEVEL 1</h3>
              <p className="compliance-status">Broad-Based Black Economic Empowerment</p>
            </div>
            <div className="compliance-progress-container">
              <div className="compliance-progress-bar">
                <div className="compliance-progress-fill" style={{ width: '100%' }}>
                  <span className="progress-percentage">✓</span>
                </div>
              </div>
            </div>
          </div>
          <div className="compliance-divider"></div>
          
          {/* Pending Standards */}
          <div className="compliance-item">
            <div className="compliance-header">
              <h3 className="compliance-standard">SQAS</h3>
              <p className="compliance-status">Pending</p>
            </div>
            <div className="compliance-progress-container">
              <div className="pulse-indicator"></div>
            </div>
          </div>
          <div className="compliance-divider"></div>
          
          <div className="compliance-item">
            <div className="compliance-header">
              <h3 className="compliance-standard">ISO 45000</h3>
              <p className="compliance-status">Pending</p>
            </div>
            <div className="compliance-progress-container">
              <div className="pulse-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceRoadmap
