import React from 'react'

function CompareButton({ onCompare, disabled }) {
  return (
    <button onClick={onCompare} disabled={disabled} className={`compare-button ${disabled ? 'disabled' : ''}`}>
      Compare
    </button>
  )
}

export default CompareButton