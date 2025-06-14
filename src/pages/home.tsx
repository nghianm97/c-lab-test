import { Camera } from "lucide-react";
import { Home, Users, Globe, MessageSquare, Menu } from "lucide-react";
import StoriesSlider from "../components/slider";
import { posts } from "../constants/constants";
import SectionContent from "../components/sectionContent/sectionContent";
import type { IPost } from "../types";

export default function HomePage() {
  const renderMainContent = posts.map((item: IPost) => (
    <SectionContent
      id={item.id}
      key={item.id}
      name={item.name}
      image={item.image}
      listProFileView={item.listProFileView}
      contentTitle={item.contentTitle}
      description={item.description}
      listImage={item.listImage}
    />
  ));

  return (
    <div className="min-h-screen bg-black text-white max-w-sm mx-auto">
      {/* What do you think section */}
      <div className="px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="../assets/image_story.png?height=40&width=40"
              alt="Your profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex-1 bg-gray-800 rounded-full px-4 py-2 flex items-center justify-between">
            <span className="text-gray-400 text-sm">What do you think?</span>
            <Camera className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stories Slider */}
      <StoriesSlider />

      {renderMainContent}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-gray-800 rounded-t-2xl">
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
      </div>

      {/* Add padding bottom to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}
