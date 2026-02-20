const FooterPremium = () => {
  return (
    <footer className="footer-premium" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Direct Executive</h3>
            <p>
              <a href="mailto:ava@skcrystals.co.za">ava@skcrystals.co.za</a>
            </p>
          </div>

          <div className="footer-column">
            <h3>General Enquiries</h3>
            <p>
              <a href="mailto:info@skcrystals.co.za">info@skcrystals.co.za</a>
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Office: 031 577 1925<br />
              Mobile: 083 633 0943
            </p>
          </div>

          <div className="footer-column">
            <h3>Location</h3>
            <p>
              279/301 Inanda Road<br />
              Sea Cow Lake<br />
              Durban, South Africa
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SK Crystals (Pty) Ltd. All rights reserved.</p>
          <p style={{ marginTop: '0.4rem' }}>
            Level 1 B-BBEE Female-Owned Enterprise
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterPremium
