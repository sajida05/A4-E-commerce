export default function FilterSidebar() {
  return (
    <aside className="w-64 p-4 border-r bg-white hidden md:block">
      <h2 className="font-bold mb-4">Filter by:</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-2">Type</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" /> Green Tea</li>
          <li><input type="checkbox" /> Black Tea</li>
          <li><input type="checkbox" /> Herbal</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-2">Caffeine</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" /> Caffeine-Free</li>
          <li><input type="checkbox" /> High Caffeine</li>
        </ul>
      </div>
    </aside>
  );
}
