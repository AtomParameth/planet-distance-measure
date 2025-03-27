import { useState } from 'react'
import './App.css'
import PlanetSelector from './components/PlanetSelector'
import CompareButton from './components/CompareButton'
import DistanceResult from './components/DistanceResult'
import './assets/styles/PlanetSelector.css'
import solarSystem from './assets/images/solarsystem.jpg'

function App() {
  const [planet1, setPlanet1] = useState(null)
  const [planet2, setPlanet2] = useState(null)
  const [distance, setDistance] = useState(null)
  const [error, setError] = useState('')

  const handleCompare = () => {
    if (!planet1 || !planet2) {
      setError('Please select both planets before comparing.')
      return
    }
    setError('')
    const distance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun)
    setDistance(distance)
  }

  const clearDistance = () => {
    setDistance(null)
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Planet Distance Comparison</h1>
          <p className="subtitle">Explore the vast distances between celestial bodies in our solar system</p>
        </div>
      </header>

      <main className="main-content">
        <section className="comparison-section">
          <h2>Select Planets to Compare</h2>
          <div className="selectors-container">
            <div className="selector-wrapper">
              <h3>First Planet</h3>
              <PlanetSelector
                selectedPlanet={planet1}
                setSelectedPlanet={setPlanet1}
                otherSelectedPlanet={planet2}
                clearDistance={clearDistance}
              />
            </div>
            <div className="selector-wrapper">
              <h3>Second Planet</h3>
              <PlanetSelector
                selectedPlanet={planet2}
                setSelectedPlanet={setPlanet2}
                otherSelectedPlanet={planet1}
                clearDistance={clearDistance}
              />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="compare-button-container">
            <CompareButton onCompare={handleCompare} disabled={!planet1 || !planet2} />
          </div>
        </section>

        {distance !== null && (
          <section className="results-section">
            <DistanceResult distance={distance} planet1={planet1} planet2={planet2} />
          </section>
        )}

        {/* <section className="info-section">
          <div className="solar-system-visual">
            <img src={solarSystem} alt="Solar System" className="solar-system-img" />
          </div>
          <div className="info-content">
            <h2>About Our Solar System</h2>
            <p>Our solar system consists of eight planets orbiting around the Sun. Each planet maintains a unique distance from our star, creating vast spaces between them.</p>
          </div>
        </section> */}
      </main>

      <footer className="app-footer">
        <p>Explore the distances between planets and learn about our cosmic neighborhood</p>
      </footer>
    </div>
  )
}

export default App