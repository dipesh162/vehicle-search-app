// Icons
import { SearchIcon } from './Icons'

function NoVehiclesFound() {
  return (
    <div className="bg-white p-5 md:p-10 rounded-2xl shadow-lg w-[85%] md:w-[75%] m-auto text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchIcon className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
        <p className="text-gray-600">Try adjusting your filters or searching a different ZIP code.</p>
    </div>
  )
}

export default NoVehiclesFound