const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>SK Crystals (Pty) Ltd</h3>
            <address>
              279/301 Inanda Road<br />
              Sea Cow Lake<br />
              Durban, South Africa
            </address>
          </div>
          <div className="footer-contact">
            <p><strong>Office:</strong> 031 577 1925</p>
            <p><strong>Mobile:</strong> 083 633 0943</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:ava@skcrystals.co.za">ava@skcrystals.co.za</a>
            </p>
          </div>
        </div>
        <a href="mailto:ava@skcrystals.co.za" className="btn-primary">
          Schedule a Consultation
        </a>
        <p className="copyright">© SK Crystals</p>
      </div>
    </footer>
  )
}

export default Footer
