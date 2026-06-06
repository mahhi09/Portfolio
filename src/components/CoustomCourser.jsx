  import { useEffect, useState } from "react";

  export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const moveHandler = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", moveHandler);
      
      // Fixed: Corrected spelling of removeEventListener
      return () => window.removeEventListener("mousemove", moveHandler);
    }, []); // Fixed: Added empty dependency array so this only runs once on mount

    // Fixed: Changed outer {} to () for the return statement
    return (
      <>
        <div
          className="pointer-events-none fixed top-0 left-0"
          style={{
            transform: `translate(${position.x - 40}px, ${position.y - 40}px)` ,
            zIndex: 999 
          }}
        >
          <div className="w-35 h-35 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
        </div>
      </>
    );
  }