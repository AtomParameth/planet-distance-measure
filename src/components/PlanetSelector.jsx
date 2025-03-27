import React, { useState } from 'react'
import '../assets/styles/PlanetSelector.css'
import Sun from '../assets/images/sun.jpg'
import Mercury from '../assets/images/mercury.jpg'
import Venus from '../assets/images/venus.jpg'
import Earth from '../assets/images/earth.jpg'
import Mars from '../assets/images/mars.jpg'
import Jupiter from '../assets/images/jupiter.jpg'
import Saturn from '../assets/images/saturn.jpg'
import Uranus from '../assets/images/uranus.jpg'
import Neptune from '../assets/images/neptune.jpg'

const planets = [
  { name: 'Sun', distanceFromSun: 0, image: `${Sun}` },
  { name: 'Mercury', distanceFromSun: 57.9, image: `${Mercury}` },
  { name: 'Venus', distanceFromSun: 108.2, image: `${Venus}` },
  { name: 'Earth', distanceFromSun: 149.6, image: `${Earth}` },
  { name: 'Mars', distanceFromSun: 227.9, image: `${Mars}` },
  { name: 'Jupiter', distanceFromSun: 778.3, image: `${Jupiter}` },
  { name: 'Saturn', distanceFromSun: 1427, image: `${Saturn}` },
  { name: 'Uranus', distanceFromSun: 2871, image: `${Uranus}` },
  { name: 'Neptune', distanceFromSun: 4497.1, image: `${Neptune}` }
]

function PlanetSelector({ selectedPlanet, setSelectedPlanet, otherSelectedPlanet, clearDistance }) {
  const [showCarousel, setShowCarousel] = useState(false)

  const handleSelect = (planet) => {
    if (planet.name !== otherSelectedPlanet?.name) {
      setSelectedPlanet(planet)
      setShowCarousel(false)
    }
  }

  const handleClear = (event) => {
    event.stopPropagation()
    setSelectedPlanet(null)
    clearDistance()
  }

  const handleCloseCarousel = () => {
    setShowCarousel(false)
  }

  const handleBoxClick = () => {
    if (!selectedPlanet) {
      setShowCarousel(true)
    }
  }

  return (
    <div className="planet-selector">
      <div
        className={`planet-box ${selectedPlanet ? 'selected' : ''}`}
        onClick={handleBoxClick}
      >
        {selectedPlanet && (
          <span className="clear-icon" onClick={handleClear}>
            &times;
          </span>
        )}
        {selectedPlanet ? (
          <div className="selected-planet-content">
            <img src={selectedPlanet.image} alt={selectedPlanet.name} />
            <p>{selectedPlanet.name}</p>
          </div>
        ) : (
          <p>Select a planet</p>
        )}
      </div>
      {showCarousel && (
        <>
          <div className="backdrop" onClick={handleCloseCarousel}></div>
          <div className="carousel">
            {planets.map((planet) => (
              <div
                key={planet.name}
                className={`carousel-item ${planet.name === otherSelectedPlanet?.name ? 'disabled' : ''}`}
                onClick={() => handleSelect(planet)}
              >
                <img src={planet.image} alt={planet.name} />
                <p>{planet.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PlanetSelector