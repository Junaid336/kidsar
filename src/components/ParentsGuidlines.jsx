// ParentGuidelines.js

import React, { useEffect, useState } from 'react';

const ParentGuidelines = () => {
  const [shownGuidelines, setShownGuidelines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your guidelines here
  const guidelines = [
    "Guideline 1: This is the first guideline for parents.",
    "Guideline 2: This is the second guideline for parents.",
    "Guideline 3: This is the third guideline for parents.",
    "Guideline 4: This is the fourth guideline for parents.",
    "Guideline 5: This is the fifth guideline for parents.",
  ];

  useEffect(() => {
    const showGuidelinesWithDelay = async () => {
      for (let i = currentIndex; i < guidelines.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust delay here (in milliseconds)
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
    <div className="max-w-2xl mx-auto mt-8 p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Parent Guidelines</h1>
      {shownGuidelines.map((guideline, index) => (
        <div key={index} className=" rounded-lg p-4 shadow-md animate-fade-in">
          <p className="text-lg">{guideline}</p>
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
    animation: fadeIn 0.5s ease-in-out;
  }
`;

// Apply styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
