import { useEffect, useState } from 'react'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show after 40% scroll
      const shouldShow = scrollPosition > (documentHeight - windowHeight) * 0.4

      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky-cta ${isVisible ? 'visible' : ''}`}>
      <a href="mailto:info@skcrystals.co.za" className="btn-primary">
        Schedule a Consultation
      </a>
    </div>
  )
}

export default StickyCTA
