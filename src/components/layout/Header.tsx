import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-blue-500 px-4 py-3 flex items-center justify-between">
      {/* Header */}
      <div className="text-white font-medium">Logo</div>
      <div className="flex items-center gap-3">
        <button className="text-white hover:bg-blue-600">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-white hover:bg-blue-600">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
