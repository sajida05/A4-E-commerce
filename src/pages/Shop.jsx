import FilterBar from "../components/FilterBar";
import TeaCard from "../components/TeaCard";
import teas from "../data/teaData";

const filters = ["All", "Green", "Black", "Herbal", "Chai"];
const caffeineLevels = ["All", "High", "Medium", "Caffeine-Free"];
const origins = ["All", "Japan", "India", "Egypt", "South Africa", "England", "USA", "China"];

export default function Shop({
  searchQuery,
  activeFilter,
  setActiveFilter,
  selectedCaffeine,
  setSelectedCaffeine,
  selectedOrigin,
  setSelectedOrigin
}) {
  const filteredTeas = teas.filter((tea) => {
    const matchesType = activeFilter === "All" || tea.type === activeFilter;
    const matchesCaffeine = selectedCaffeine === "All" || tea.caffeineLevel === selectedCaffeine;
    const matchesOrigin = selectedOrigin === "All" || tea.origin === selectedOrigin;
    const matchesSearch = !searchQuery || tea.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesCaffeine && matchesOrigin && matchesSearch;
  });

  const handleFilterChange = (type, value) => {
    if (type === "type") setActiveFilter(value);
    if (type === "caffeine") setSelectedCaffeine(value);
    if (type === "origin") setSelectedOrigin(value);
  };

  return (
    <div className="w-full px-10 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 pt-4">
        <span className="text-gray-400">Home</span> /{" "}
        <span className="text-gray-400">All Products</span> /{" "}
        <span className="text-gray-700 font-medium">
          {activeFilter && activeFilter !== "All" ? `${activeFilter} Tea` : "All Teas"}
        </span>
      </div>

      <div className="flex gap-12">
        {/* Sidebar */}
        <div className="py-8 w-[250px]">
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterSelect={(val) => handleFilterChange("type", val)}
            caffeineFilters={caffeineLevels}
            selectedCaffeine={selectedCaffeine}
            onCaffeineSelect={(val) => handleFilterChange("caffeine", val)}
            originFilters={origins}
            selectedOrigin={selectedOrigin}
            onOriginSelect={(val) => handleFilterChange("origin", val)}
          />
        </div>

        {/* Tea List */}
        <div className="flex-1">
          {filteredTeas.length === 0 ? (
            <p className="text-gray-500 text-lg pt-6">
              No teas found. Try adjusting your filters or search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeas.map((tea) => (
                <TeaCard key={tea.id} {...tea} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
