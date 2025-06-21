// React
import { useState } from "react";

// Icons
import { CrossIcon, FilterIcon } from "./Icons";

// Components
import FilterSection from "./FilterSections";

export default function Filters({
  filters,
  setFilters,
  makes,
  colors,
  sortBy,
  setSortBy,
  setZip,
  setSubmittedZip,
  submittedZip,
}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const isValidZip = /^\d{5}$/.test(submittedZip);

  const activeFilterCount =
    (filters.make.length) +
    (filters.color.length) +
    (sortBy ? 1 : 0) +
    (isValidZip ? 1 : 0);

  const handleClearFilters = () => {
    setZip("");
    setSubmittedZip("");
    setFilters({ make: [], color: [] });
    setSortBy("");
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white rounded-2xl shadow-lg p-4 sm:mb-4 flex items-center justify-between">
        <h2 className="text-[18px] text-gray-900 flex items-center gap-2">
          <FilterIcon className="w-5 h-5 text-gray-600" />
          Filters{" "}
          {activeFilterCount > 0 && (
            <span className="text-sm bg-[#0b0c0e] text-white w-5 h-5 flex justify-center items-center rounded-full">
              {activeFilterCount}
            </span>
          )}
        </h2>
        <button
          className="text-sm text-blue-600 font-medium"
          onClick={() => setShowDrawer(true)}
        >
          Open
        </button>
      </div>

      {/* Desktop Filters Panel */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg mb-8 h-fit pb-4 border border-[lightgray] min-w-[24%]">
        <div className="flex justify-between px-4 py-3 rounded-t-[inherit]">
          <div className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            {activeFilterCount > 0 && (
              <span className="text-sm bg-[#0b0c0e] text-white w-5 h-5 flex justify-center items-center rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button
              className="text-sm text-red-600 font-medium cursor-pointer"
              onClick={handleClearFilters}
            >
              Clear All
            </button>
          )}
        </div>
        <FilterFields
          filters={filters}
          setFilters={setFilters}
          makes={makes}
          colors={colors}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Mobile Bottom Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[rgba(0,0,0,0.3)] bg-opacity-50 md:hidden">
          <div className="bg-white rounded-t-2xl py-4 px-0 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 px-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FilterIcon className="w-5 h-5 text-gray-600" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="text-sm bg-[#0b0c0e] text-white w-5 h-5 flex justify-center items-center rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </h2>
              {activeFilterCount > 0 && (
                <button
                  className="text-sm text-red-600 font-medium cursor-pointer"
                  onClick={handleClearFilters}
                >
                  Clear All
                </button>
              )}
              <CrossIcon
                onClick={() => setShowDrawer(false)}
                
              />
              {/* <button
                className="text-sm text-red-600 font-medium"
                onClick={() => setShowDrawer(false)}
              >
                Close
              </button> */}
            </div>
            <FilterFields
              filters={filters}
              setFilters={setFilters}
              makes={makes}
              colors={colors}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>
      )}
    </>
  );
}

function FilterFields({ filters, setFilters, makes, colors, sortBy, setSortBy }) {
  const [makeSearch, setMakeSearch] = useState("");
  const [colorSearch, setColorSearch] = useState("");

  const toggleSelection = (type, value) => {
    const current = filters[type];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    setFilters({ ...filters, [type]: updated });
  };

  return (
    <div className="flex flex-col">
      <FilterSection
        heading="Make"
        type="make"
        variant="multi"
        options={makes}
        selectedOptions={filters.make}
        onToggle={toggleSelection}
        searchValue={makeSearch}
        onSearchChange={setMakeSearch}
      />

      <FilterSection
        heading="Color"
        type="color"
        variant="multi"
        options={colors}
        selectedOptions={filters.color}
        onToggle={toggleSelection}
        searchValue={colorSearch}
        onSearchChange={setColorSearch}
      />

      <FilterSection
        heading="Sort By"
        type="sortBy"
        variant="single"
        options={[
          { label: "Price (Low to High)", value: "price" },
          { label: "Year (Newest First)", value: "year" },
          { label: "Mileage (Low to High)", value: "mileage" },
        ]}
        selectedOptions={sortBy}
        onSelectChange={setSortBy}
      />
    </div>
  );
}
