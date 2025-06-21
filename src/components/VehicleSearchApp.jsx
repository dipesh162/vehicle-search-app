// Components
import VehicleCard from "../components/VehicleCard";
import NoVehiclesFound from "../components/NoVehiclesFound";
import Filters from "../components/Filters";
import Search from "./Search";

// Hooks
import useVehicleSearch from "../hooks/useVehicleSearch";

// Static
import vehicleData from "../data/vehicles";

export default function VehicleSearchApp() {
  const {
    zip,
    setZip,
    handleSearch,
    error,
    setError,
    submittedZip,
    setSubmittedZip,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    filteredVehicles,
    makes,
    colors,
  } = useVehicleSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-8" style={{paddingTop: '32px'}}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <Filters
              filters={filters}
              setFilters={setFilters}
              makes={makes}
              colors={colors}
              sortBy={sortBy}
              setSortBy={setSortBy}
              submittedZip={submittedZip}
              setSubmittedZip={setSubmittedZip}
              setZip={setZip}
            />

            <div className="flex-1">
              <Search
                handleSearch={handleSearch}
                zip={zip}
                setZip={setZip}
                error={error}
                setError={setError}
                data={vehicleData}
              />
              {(submittedZip || filteredVehicles.length > 0) ? (
                <div className="flex flex-col flex-1 gap-3">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      <h4 className="mb-0">{submittedZip ? <>Available Vehicles in <span className="font-bold">{submittedZip}</span></> : 'All Available Vehicles'}</h4>
                    </h3>
                    <span className="text-gray-800 bg-gray-100 px-3 py-1 rounded-full text-[16px] font-medium">
                      {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? "s" : ""} found
                    </span>
                  </div>
                  {submittedZip && filteredVehicles.length === 0 ? (
                      <NoVehiclesFound/>
                    ) : (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredVehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                          ))}
                        </div>
                      </div>
                  )}
                </div>
              ): <NoVehiclesFound/>}
            </div>
          </div>
      </div>
    </div>
  );
}
