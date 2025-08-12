import React from 'react'

const TestComponent: React.FC = () => {
  return (
    <div className="bg-primary-500 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold gradient-text">Test Tailwind</h1>
      <div className="glass-effect p-4 mt-4">
        <p>Glass effect working</p>
      </div>
      <div className="section-padding bg-dark-800">
        <p>Section padding working</p>
      </div>
    </div>
  )
}

export default TestComponent
