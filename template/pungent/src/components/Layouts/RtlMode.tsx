"use client";
import React, { useState, useEffect } from "react";

const RtlMode = () => {
  // Initialize with default value (false) to ensure server/client consistency
  const [isRTL, setIsRTL] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client after mount
    setIsMounted(true);
    
    // Check localStorage for saved preference
    const savedRTL = localStorage.getItem("rtl") === "true";
    setIsRTL(savedRTL);
  }, []);

  useEffect(() => {
    // Apply the direction only when component is mounted and isRTL changes
    if (isMounted) {
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
      // Persist to localStorage
      localStorage.setItem("rtl", isRTL.toString());
    }
  }, [isRTL, isMounted]);

  const toggleRTL = () => {
    setIsRTL((prev) => !prev);
  };

  // During server rendering and initial client render, show default state
  if (!isMounted) {
    return (
      <div className="rtl-demo ltr">
        <button type="button" onClick={toggleRTL}>
          Click to RTL
        </button>
      </div>
    );
  }

  return (
    <div className={`rtl-demo ${isRTL ? "rtl" : "ltr"}`}>
      <button type="button" onClick={toggleRTL}>
        {isRTL ? "Click to LTR" : "Click to RTL"}
      </button>
    </div>
  );
};

export default RtlMode;