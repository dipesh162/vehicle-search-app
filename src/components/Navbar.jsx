import React from 'react'

function Navbar() {
  return (
      <nav className="bg-white shadow-sm sticky top-0 left-0 w-full z-[25]">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-6">
          <h1 className="text-[28px] md:text-4xl font-bold text-gray-900 mb-0 sm:mb-2">Find Your Perfect Vehicle</h1>
          <p className="text-gray-600">Search thousands of vehicles in your area</p>
        </div>
      </nav>
  )
}

export default Navbar