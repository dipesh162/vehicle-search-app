import React from 'react';

function ZipCodesSuggestions({ suggestions = [], handleSelectSuggestion = () => {} }) {
  return (
    <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-md max-h-60 overflow-y-auto">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion}
          onClick={() => handleSelectSuggestion(suggestion)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default ZipCodesSuggestions;