// ParentGuidelines.js

import React, { useEffect, useState } from 'react';

const ParentGuidelines = () => {
  const [shownGuidelines, setShownGuidelines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your guidelines here
  const guidelines = [
    "Open Chrome and navigate to the Kidar website.",
    "Tap the three dots menu in the top right corner of the screen.",
    "Select Add to Home screen.",
    "In the pop-up window, enter a name for the shortcut (e.g., Kidar).",
    "Tap Add. The Kidar shortcut will now appear on your child's home screen.",
  ];

  useEffect(() => {
    const showGuidelinesWithDelay = async () => {
      for (let i = currentIndex; i < guidelines.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust delay here (in milliseconds)
        setShownGuidelines(prevGuidelines => {
          if (!prevGuidelines.includes(guidelines[i])) {
            return [...prevGuidelines, guidelines[i]];
          }
          return prevGuidelines;
        });
        setCurrentIndex(i + 1);
      }
    };

    showGuidelinesWithDelay();
  }, [currentIndex, guidelines]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 space-y-4 min-h-screen min-w-screen">
      <h1 className="text-3xl text-white font-bold mb-4">Parent Guidelines</h1>
      {shownGuidelines.map((guideline, index) => (
        <div key={index} className="rounded-lg p-4 shadow-lg animate-fade-in bg-black bg-opacity-20">
          <p className="text-lg text-white">{guideline}</p>
        </div>
      ))}
    </div>
  );
};

export default ParentGuidelines;

// Inline styles (You can move this to a separate CSS file if needed)
const styles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.4s ease-in-out;
  }
`;

// Apply styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
