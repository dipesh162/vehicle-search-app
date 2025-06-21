Vehicle Search App

A responsive React + Vite application that allows users to search for available vehicles by ZIP code, filter by make and color, and sort the results by price, year, or mileage.

Built as part of a front-end engineering take-home assignment.

Features

- Search by ZIP Code with 5-digit validation
- Filter by Make and Color
- Sort by Price, Year, or Mileage
- Responsive UI
  - Desktop: Sidebar filters
  - Mobile: Bottom drawer filter UI
- Clear All Filters + Filter Count Display
- Locally Hosted Car Images
- Graceful fallback for missing results (NoVehiclesFound)
- Built with Vite, React 19, and Tailwind CSS 4

Tech Stack

- Framework: React 19
- Bundler: Vite
- Styling: Tailwind CSS
- State Management: React Hooks (useState, useMemo)
- Linting: ESLint

Project Structure

vehicle-search-app/
├── public/
│   └── images/         # Car images (e.g. toyota_camry.jpg)
├── src/
│   ├── components/     # Filters, FilterSections, Navbar, NoVehiclesFound, Search, Icons, VehicleCard, VehicleSearchApp, ZipCodeSuggestions etc.
│   ├── data/           # vehicleData.js
│   ├── hooks/          # useVehicleSearch.js
├── vite.config.js
└── README.md

Getting Started

1. Clone the Repository

git clone https://github.com/dipesh162/vehicle-search-app
cd vehicle-search-app

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

Then open http://localhost:5173 in your browser.

Image Assets

All car images are locally hosted inside the /public/images/ folder. Each vehicle in vehicleData.js references a corresponding image filename.

Example:
  /public/images/toyota_camry.jpg

You may add a placeholder.jpg image in the same folder to handle any image loading errors gracefully.

Build for Production

npm run build
npm run preview
