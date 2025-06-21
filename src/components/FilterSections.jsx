import { useState } from "react";
import { DownArrowIcon } from "./Icons";

export default function FilterSection({
    heading,
    variant = "multi", // "multi", "select" , "single"
    type, // "make", "color", "sortBy"
    options = [],
    selectedOptions = [],
    onToggle = () => {},
    searchValue = "",
    onSearchChange = () => {},
    onSelectChange = () => {},
}) {

const [filtersCollapsed, setFiltersCollapsed] = useState(false)
const isFilterSelected = 
            ((variant === "multi" && selectedOptions.length > 0) || 
            (variant === "single" && selectedOptions))

return (
    <div className="mb-4">
      <label
        className="flex cursor-pointer justify-between text-md font-medium text-gray-700 px-4 py-3 bg-[rgb(244,245,246)]"
        onClick={() => setFiltersCollapsed((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
            {heading} 
            {isFilterSelected && (
                <span className="text-xs bg-[#0b0c0e] text-white w-4 h-4 flex justify-center items-center rounded-full">
                    {variant === "multi" ? selectedOptions.length : 1}
                </span>
            )}
        </div>
        <DownArrowIcon
          className={`w-5 h-5 transition-transform duration-200 ${
            !filtersCollapsed ? "rotate-180" : ""
          }`}
        />
      </label>

      {!filtersCollapsed && (
        <div className="pt-3 px-4 pb-0">
          {variant === "multi" ? (
            <>
              <input
                type="text"
                placeholder={`Search ${heading.toLowerCase()}s...`}
                value={searchValue || ""}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2 text-base"
              />
              <div className="flex flex-col gap-2 max-h-[116px] overflow-y-auto pr-1">
                {options.length > 0 ? (
                  options
                    .filter((item) =>
                        item.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-base cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 cursor-pointer"
                          checked={selectedOptions.includes(item)}
                          onChange={() => onToggle(type, item)}
                        />
                        {item}
                      </label>
                    ))
                ) : (
                  <span className="text-sm text-gray-500 col-span-2">
                    No matches found
                  </span>
                )}
              </div>
            </>
          ) : variant === "single" ? (
            <div className="flex flex-col gap-2 max-h-[116px] overflow-y-auto pr-1">
              {options.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 text-base cursor-pointer"
                >
                  <input
                    type="radio"
                    name={type}
                    value={opt.value}
                    checked={selectedOptions === opt.value}
                    onChange={() => onSelectChange(opt.value)}
                    className="h-4 w-4 cursor-pointer"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
