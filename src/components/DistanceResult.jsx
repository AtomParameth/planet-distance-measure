import React from 'react'
import Everest from '../assets/images/everest.jpg'
import Greatwall from '../assets/images/greatwall.jpg'
import BurjKhalifa from '../assets/images/burjkhalifa.jpg'
import GoldenGate from '../assets/images/goldengate.jpg'
import FootballField from '../assets/images/footballfield.jpg'

function DistanceResult({ distance, planet1, planet2 }) {
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      notation: num > 1000000 ? 'compact' : 'standard',
      maximumFractionDigits: 2
    }).format(num);
  };

  const convertDistance = (distance) => {
    // Convert distance from million km to km
    const distanceInKm = distance * 1000000;

    const comparisons = [
      { 
        name: 'Mount Everest', 
        value: 8.848, // Exact height in km
        unit: 'km', 
        image: `${Everest}`,
        description: 'the height of Mount Everest, Earth\'s tallest mountain above sea level',
        calculation: (dist) => `${formatNumber(dist / 8.848)} times`
      },
      { 
        name: 'Great Wall of China', 
        value: 21.196, // Main wall length in km
        unit: 'km', 
        image: `${Greatwall}`,
        description: 'the length of the main Great Wall built during the Ming Dynasty',
        calculation: (dist) => `${formatNumber(dist / 21.196)} times`
      },
      { 
        name: 'Burj Khalifa', 
        value: 0.828, // Exact height in km
        unit: 'km', 
        image: `${BurjKhalifa}`,
        description: 'the height of Burj Khalifa, the world\'s tallest building (828 meters)',
        calculation: (dist) => `${formatNumber(dist / 0.828)} times`
      },
      { 
        name: 'Golden Gate Bridge', 
        value: 2.737, // Total length in km
        unit: 'km', 
        image: `${GoldenGate}`,
        description: 'the total length of the Golden Gate Bridge, including approaches',
        calculation: (dist) => `${formatNumber(dist / 2.737)} times`
      },
      { 
        name: 'Football Field', 
        value: 0.1, // FIFA standard length in km
        unit: 'km', 
        image: `${FootballField}`,
        description: 'the length of an international standard football (soccer) field',
        calculation: (dist) => `${formatNumber(dist / 0.1)} times`
      }
    ];

    return comparisons.map((comparison, index) => {
      const result = comparison.calculation(distanceInKm);
      return (
        <div key={index} className="comparison-card">
          <div className="comparison-image-container">
            <img src={comparison.image} alt={comparison.name} className="comparison-image" />
          </div>
          <div className="comparison-details">
            <h3>{comparison.name}</h3>
            <p className="comparison-result">
              {result}
            </p>
            <p className="comparison-description">
              This equals {comparison.description}
            </p>
            <small className="comparison-base">
              (Actual size: {comparison.value} {comparison.unit})
            </small>
          </div>
        </div>
      )
    });
  };

  if (!planet1 || !planet2) {
    return null
  }

  return (
    <div className="distance-result">
      <div className="distance-header">
        <div className="planet-comparison">
          <img src={planet1.image} alt={planet1.name} className="planet-image" />
          <div className="distance-info">
            <h2>{distance} million km</h2>
            <p>distance between {planet1.name} and {planet2.name}</p>
          </div>
          <img src={planet2.image} alt={planet2.name} className="planet-image" />
        </div>
      </div>
      <div className="comparison-container">
        <h3 className="comparison-title">This distance is equivalent to:</h3>
        <div className="comparison-grid">
          {convertDistance(distance)}
        </div>
      </div>
    </div>
  )
}

export default DistanceResult