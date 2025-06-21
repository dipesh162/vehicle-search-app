export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white cursor-pointer border border-[#d6d6d6] rounded-2xl hover:shadow-[0_6px_32px_rgba(10,0,41,0.1),0_8px_30px_rgba(42,0,165,0.06)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-48 object-fill"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Trim:</span>
            <span className="text-sm font-medium text-gray-900">{vehicle.trim}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Color:</span>
            <span className="text-sm font-medium text-gray-900">{vehicle.color}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Mileage:</span>
            <span className="text-sm font-medium text-gray-900">{vehicle.mileage.toLocaleString()} miles</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">${vehicle.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Total price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}