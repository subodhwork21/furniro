'use client'; // Ensures this component runs on the client-side
import { useEffect, useState } from "react";

const Responsiveness: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Typing the state as boolean

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set the initial state when the component mounts
    handleResize();

    // Add a resize event listener to update state when the window is resized
    window.addEventListener('resize', handleResize); 

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile && (
      <div style={styles.warning}>
        This website is not available for mobile devices. Please visit from a desktop.
      </div>
    )
  );
};

// Inline styles for the warning message
const styles = {
  warning: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8d7da',
    color: '#721c24',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '20px',
    padding: '20px',
    zIndex: 9999,
  } as React.CSSProperties, // Typing the inline style
};

export default Responsiveness;
