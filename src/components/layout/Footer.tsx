import { Home, Users, Globe, MessageSquare, Menu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-gray-800 rounded-t-2xl">
      <div className="flex items-center justify-around py-4 px-4">
        <button className="text-cyan-400 hover:bg-gray-700 hover:rounded-md h-10 w-10 flex justify-between items-center cursor-pointer">
          <Home className="w-full h-full p-2" />
        </button>
        <button className="text-gray-400 hover:bg-gray-700 hover:rounded-md h-10 w-10 flex justify-between items-center cursor-pointer">
          <Users className="w-full h-full p-2" />
        </button>
        <button className="text-gray-400 hover:bg-gray-700 hover:rounded-md h-10 w-10 flex justify-between items-center cursor-pointer">
          <Globe className="w-full h-full p-2" />
        </button>
        <button className="text-gray-400 hover:bg-gray-700 hover:rounded-md h-10 w-10 flex justify-between items-center cursor-pointer">
          <MessageSquare className="w-full h-full p-2" />
        </button>
        <button className="text-gray-400 hover:bg-gray-700 hover:rounded-md h-10 w-10 flex justify-between items-center cursor-pointer">
          <Menu className="w-full h-full p-2" />
        </button>
      </div>
    </footer>
  );
}
