import React, {useState, useRef, useEffect} from 'react';
import '../../styles/fade.module.css';

function FadeInSection ({children,}) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) { 
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      });
      
      observer.observe(domRef.current);
      return () => observer.disconnect();
    }, []);
  
    return (<section className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
  };

export default FadeInSection;