import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mouseAtTop, setMouseAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.85; // Hide at 85% of hero height
      
      setIsScrolled(scrollY > 50);
      
      // Hide after scrolling past 85% of hero section, unless mouse is at top
      if (scrollY > heroHeight && !mouseAtTop) {
        setIsHidden(true);
      } else if (scrollY <= heroHeight || mouseAtTop) {
        setIsHidden(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const atTop = e.clientY < 85;
      setMouseAtTop(atTop);
      
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.85;
      
      // Show nav if mouse at top and past threshold
      if (atTop && scrollY > heroThreshold) {
        setIsHidden(false);
      } 
      // Hide immediately when mouse leaves top area and past threshold
      else if (!atTop && scrollY > heroThreshold) {
        setIsHidden(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseAtTop]);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="SK Crystals" />
        </div>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#divisions">Divisions</a></li>
          <li><a href="#compliance">Compliance</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
