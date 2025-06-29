import { useState } from "react";

export default function FilterBar({
  filters,
  activeFilter,
  onFilterSelect,
  caffeineFilters,
  selectedCaffeine,
  onCaffeineSelect,
  originFilters,
  selectedOrigin,
  onOriginSelect,
}) {
  const [openType, setOpenType] = useState(true);
  const [openCaffeine, setOpenCaffeine] = useState(false);
  const [openOrigin, setOpenOrigin] = useState(false);

  return (
    <div className="bg-white border-r border-gray-200 p-4 rounded shadow-sm">
      {/* Type Filter */}
      <div className="border-b pb-2 mb-3">
        <button onClick={() => setOpenType(!openType)} className="w-full flex justify-between text-left text-sm font-semibold text-gray-800">
          Type
          <span>{openType ? "−" : "+"}</span>
        </button>
        {openType && (
          <div className="mt-2 space-y-2">
            {filters.map((type) => (
              <button
                key={type}
                onClick={() => onFilterSelect(type)}
                className={`block w-full text-left px-3 py-1 rounded transition ${
                  activeFilter === type
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Caffeine Filter */}
      <div className="border-b pb-2 mb-3">
        <button onClick={() => setOpenCaffeine(!openCaffeine)} className="w-full flex justify-between text-left text-sm font-semibold text-gray-800">
          Caffeine Content
          <span>{openCaffeine ? "−" : "+"}</span>
        </button>
        {openCaffeine && (
          <div className="mt-2 space-y-2">
            {caffeineFilters.map((level) => (
              <button
                key={level}
                onClick={() => onCaffeineSelect(level)}
                className={`block w-full text-left px-3 py-1 rounded transition ${
                  selectedCaffeine === level
                    ? "bg-yellow-100 text-yellow-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Origin Filter */}
      <div>
        <button onClick={() => setOpenOrigin(!openOrigin)} className="w-full flex justify-between text-left text-sm font-semibold text-gray-800">
          Origin
          <span>{openOrigin ? "−" : "+"}</span>
        </button>
        {openOrigin && (
          <div className="mt-2 space-y-2">
            {originFilters.map((origin) => (
              <button
                key={origin}
                onClick={() => onOriginSelect(origin)}
                className={`block w-full text-left px-3 py-1 rounded transition ${
                  selectedOrigin === origin
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {origin}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
