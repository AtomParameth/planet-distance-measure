import React, { useState } from 'react';
import '../assets/styles/HelpDoc.css';

const HelpDoc = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: [
        {
          title: 'Welcome to Planet Distance Comparison',
          text: 'Explore and compare the vast distances between celestial bodies in our solar system. This tool helps visualize astronomical distances using familiar Earth-based comparisons.'
        },
        {
          title: 'How to Use',
          steps: [
            'Select your first planet from the first selector',
            'Choose a second planet to compare with',
            'Click the "Compare" button to see the distance',
            'Explore various real-world comparisons to understand the scale'
          ]
        }
      ]
    },
    {
      id: 'features',
      title: 'Features',
      content: [
        {
          title: 'Planet Selection',
          text: 'Choose from all eight planets in our solar system plus the Sun. Each celestial body shows its actual image and name.'
        },
        {
          title: 'Distance Visualization',
          text: 'See the distance between selected bodies represented in millions of kilometers and compared to familiar Earth objects and distances.'
        },
        {
          title: 'Real-world Comparisons',
          text: 'Understand astronomical distances through comparisons with:',
          list: [
            'Mount Everest\'s height',
            'The Great Wall of China\'s length',
            'Burj Khalifa\'s height',
            'Golden Gate Bridge\'s span',
            'Standard football field length'
          ]
        }
      ]
    },
    {
      id: 'tips',
      title: 'Tips & Tricks',
      content: [
        {
          title: 'Best Practices',
          list: [
            'Clear your selection using the × button if you want to choose a different planet',
            'Compare neighboring planets first to understand smaller distances',
            'Try comparing the most distant planets to grasp the solar system\'s scale',
            'Use the real-world comparisons to better understand the massive distances'
          ]
        },
        {
          title: 'Understanding Scale',
          text: 'Remember that space is vast! Even the smallest distances between planets are enormous compared to Earth-based measurements.'
        }
      ]
    }
  ];

  return (
    <div className="help-overlay">
      <div className="help-container">
        <button className="close-help" onClick={onClose}>×</button>
        <div className="help-sidebar">
          {sections.map(section => (
            <button
              key={section.id}
              className={`sidebar-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="help-content">
          {sections.map(section => (
            <div
              key={section.id}
              className={`help-section ${activeSection === section.id ? 'active' : ''}`}
            >
              <h2>{section.title}</h2>
              {section.content.map((item, index) => (
                <div key={index} className="content-block">
                  <h3>{item.title}</h3>
                  {item.text && <p>{item.text}</p>}
                  {item.steps && (
                    <ol className="step-list">
                      {item.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  )}
                  {item.list && (
                    <ul className="feature-list">
                      {item.list.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpDoc;