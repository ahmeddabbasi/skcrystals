const Services = () => {
  const services = [
    {
      title: 'Regulated Hazardous Materials Transport',
      description: 'Secure and compliant transport for regulated and high-risk materials under strict operational governance.'
    },
    {
      title: 'Specialised Bulk Water Transport',
      description: 'Reliable bulk water delivery solutions supporting municipal, industrial, and infrastructure needs.'
    },
    {
      title: 'Bottled Water',
      description: 'Distribution and delivery of bottled water for commercial, industrial, and retail requirements.'
    },
    {
      title: 'Commodities',
      description: 'Transport and logistics solutions for bulk commodities and general goods.'
    },
    {
      title: 'Fleet Integrity & Monitoring',
      description: 'Structured operational oversight combining field validation with AI-enabled execution monitoring.'
    }
  ]

  return (
    <section className="section-white">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
