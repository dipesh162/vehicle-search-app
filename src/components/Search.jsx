// React
import { useState } from 'react';

// Icons
import { CrossIcon } from './Icons'

// Components
import ZipCodesSuggestions from './ZipCodesSuggestions';

function Search({
    data,
    handleSearch=()=>{},
    zip='',
    setZip=()=>{},
    error=null,
    setError
}) {
    const allZips = Array.from(new Set(data.map((v) => v.zip)));
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (e) => {
        const value = e.target.value;
        setZip(value);
        setError('')

        if (value.trim() === "") {
            setSuggestions([]);
        } else {
            const matches = allZips
                .filter((z) => z.startsWith(value.trim()))
                .slice(0, 5);
            setSuggestions(matches);
        }

    };

    const handleSelectSuggestion = (selectedZip) => {
        setZip(selectedZip);
        setSuggestions([])
        handleSearch(selectedZip)
    };

    return(
        <div className="rounded-2xl mb-4 sm:mb-6">
            <div className="flex gap-4 items-end">
                <div className="flex-1 w-full relative">
                    <div className="relative">
                        <input
                            id="zip"
                            type="number"
                            value={zip}
                            onChange={handleInputChange}
                            onKeyPress={(e) => e.key === "Enter" && handleSelectSuggestion(zip)}
                            className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-0 focus:border-gray-300"
                            placeholder="Search Vehicles by ZIP Code"
                            maxLength={5}
                        />
                        {zip.length>0 && 
                            <CrossIcon 
                                onClick={()=> {
                                    handleSelectSuggestion('')
                                    setZip('')
                                }}
                                className="h-5 w-5 absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-[#8080800f]" 
                            /> 
                        }
                    </div>

                    {suggestions.length > 0 && (
                        <ZipCodesSuggestions 
                            suggestions={suggestions} 
                            handleSelectSuggestion={handleSelectSuggestion}
                        />
                    )}
                </div>
            </div>

            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 font-medium">{error}</p>
                </div>
            )}
        </div>
    )
}

export default Search