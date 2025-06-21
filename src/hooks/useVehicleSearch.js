// React
import { useState, useMemo } from "react";

// Static
import vehicleData from "../data/vehicles";

const useVehicleSearch = () => {
  const [zip, setZip] = useState("");
  const [submittedZip, setSubmittedZip] = useState("");
  const [filters, setFilters] = useState({ make: [], color: [] });
  const [sortBy, setSortBy] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (overrideZip) => {
    const zipToSearch = overrideZip ?? zip;

    if (!zipToSearch.trim()) {
      setSubmittedZip("");
      setError("");
      return;
    }

    if (!/^\d{5}$/.test(zipToSearch)) {
      setError("Please enter a valid 5-digit ZIP code");
      return;
    }

    setError("");
    setSubmittedZip(zipToSearch);
  };

  const makes = useMemo(() => {
    return [...new Set(vehicleData.map((v) => v.make))];
  }, []);

  const colors = useMemo(() => {
    return [...new Set(vehicleData.map((v) => v.color))];
  }, []);

const filteredVehicles = useMemo(() => {
  let vehicles = vehicleData;

  // Only filter by ZIP if a ZIP has been submitted
  if (submittedZip) {
    vehicles = vehicles.filter((v) => v.zip === submittedZip);
  }

  if (filters.make.length > 0) {
    vehicles = vehicles.filter((v) => filters.make.includes(v.make));
  }

  if (filters.color.length > 0) {
    vehicles = vehicles.filter((v) => filters.color.includes(v.color));
  }

  switch (sortBy) {
    case "price":
      vehicles.sort((a, b) => a.price - b.price);
      break;
    case "year":
      vehicles.sort((a, b) => b.year - a.year);
      break;
    case "mileage":
      vehicles.sort((a, b) => a.mileage - b.mileage);
      break;
  }

  return vehicles;
}, [submittedZip, filters, sortBy]);


  return {
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
  };
};

export default useVehicleSearch;
