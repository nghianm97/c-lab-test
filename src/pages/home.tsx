import {
  Bell,
  Search,
  Camera,
  Heart,
  MessageCircle,
  Share,
  Eye,
  MoreHorizontal,
  Gift,
} from "lucide-react";
import { Home, Users, Globe, MessageSquare, Menu } from "lucide-react";
import StoriesSlider from "../components/slider";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white max-w-sm mx-auto">
      {/* Header */}
      <div className="bg-blue-500 px-4 py-3 flex items-center justify-between">
        <div className="text-white font-medium">Logo</div>
        <div className="flex items-center gap-3">
          <button className="text-white hover:bg-blue-600">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-white hover:bg-blue-600">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

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

      {/* Main Post */}
      <div className="border-t border-gray-800">
        <div className="px-4 py-3">
          <div className="flex items-center mb-3 w-full">
            <div className="flex items-center justify-between gap-3 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="../../assets/image_story.png?height=40&width=40"
                    alt="Recruitment"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">
                      RECRUITMENT DESIGN UI...
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full h-6">
                      Follow
                    </button>
                  </div>
                  <span className="text-gray-400 text-xs">Today, 19:50</span>
                </div>
              </div>
              <button className="text-gray-400 h-8 w-8 items-start flex justify-end">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="text-sm text-white mb-3 leading-relaxed text-left">
            <div className="mb-2">💖 [HCM RECRUITMENT] - UI/UX DESIGNER 💖</div>
            <div className="mb-2">
              Lucky Shop - E-commerce application based on group purchasing
              model
            </div>
            <div className="mb-2">
              Are you passionate about product design? Want to put your personal
              stamp purchasing m...{" "}
              <button className="text-blue-400 text-sm">See more</button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full overflow-hidden border">
                <img
                  src="./assets/list-img.png?height=40&width=40"
                  alt="Friend 1"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                <img
                  src="../assets/list-img.png?height=40&width=40"
                  alt="Friend 2"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-white">
              <span className="font-semibold">44</span> of your friends also
              liked this post
            </span>
          </div>

          <div className="flex w-full gap-3 text-white">
            <div className="flex items-center gap-2 w-full justify-between">
              <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                <Heart className="h-4 w-4 " />
                <span className="text-xs ">898k</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                <MessageCircle className="h-4 w-4 " />
                <span className="text-xs ">156k</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                <Share className="h-4 w-4 " />
                <span className="text-xs ">18k</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                <Eye className="h-4 w-4 " />
                <span className="text-xs ">15k</span>
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md flex items-center justify-center py-2 px-3">
                <Gift className="h-4 w-4 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Belle Literature Post */}
      <div className="border-t border-gray-800">
        <div className="">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="../assets/image_story.png?height=40&width=40"
                  alt="Belle Literature"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">
                    Belle Literature co
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full h-6">
                    Follow
                  </button>
                </div>
                <span className="text-gray-400 text-xs">Today, 19:50</span>
              </div>
            </div>
            <button className="text-gray-400 h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="text-sm text-white mb-3 text-left px-4">
            Bitcoin reaches a new all-time high amid strong weekly momentum with
            price targets
          </div>

          {/* img Grid - Corrected 2-Column Layout */}
          <div className="flex gap-1 mb-3 rounded-lg h-auto px-4 py-3">
            {/* Large left img spanning full height */}
            <div className="relative flex-1">
              <img
                src="../../assets/img4.jpg"
                alt="Night street scene"
                className="object-cover h-full w-full"
              />
            </div>

            {/* Right column with 3 stacked imgs - fixed width */}
            <div className="flex flex-col gap-1 w-[120px] min-w-[120px] max-w-[120px] flex-shrink-0">
              {/* Top right img */}
              <div className="relative w-full">
                <img
                  src="../../assets/img5.jpg"
                  alt="Harbor view"
                  className="object-cover w-full h-[120px]"
                />
              </div>

              {/* Middle right img */}
              <div className="relative w-full">
                <img
                  src="../../assets/img6.jpg"
                  alt="Honeycomb"
                  className="object-cover w-full h-[120px]"
                />
              </div>

              {/* Bottom right img with +12 overlay */}
              <div className="relative w-full">
                <img
                  src="../../assets/img7.jpg"
                  alt="Landscape"
                  className="object-cover w-full h-[120px]"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+12</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full overflow-hidden border">
                  <img
                    src="../assets/list-img.png?height=40&width=40"
                    alt="Friend 1"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="../assets/list-img.png?height=40&width=40"
                    alt="Friend 2"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-white">
                <span className="font-semibold">44</span> of your friends also
                liked this post
              </span>
            </div>

            <div className="flex w-full gap-3 text-white">
              <div className="flex items-center gap-2 w-full justify-between">
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Heart className="h-4 w-4 " />
                  <span className="text-xs ">898k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <MessageCircle className="h-4 w-4 " />
                  <span className="text-xs ">156k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Share className="h-4 w-4 " />
                  <span className="text-xs ">18k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Eye className="h-4 w-4 " />
                  <span className="text-xs ">15k</span>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md flex items-center justify-center py-2 px-3">
                  <Gift className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* John Bonnet Post */}
      <div className="border-t border-gray-800">
        <div className="">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="../assets/image_story.png?height=40&width=40"
                  alt="John Bonnet"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-white font-medium text-sm">
                  John Bonnet
                </span>
                <div className="text-gray-400 text-xs">Today, 19:50</div>
              </div>
            </div>
            <button className="text-gray-400 h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="text-sm text-white mb-3 text-left px-4 py-3">
            Bitcoin reaches a new all-time high amid strong weekly momentum with
            price targets
          </div>

          {/* Single Large img */}
          <div className="aspect-[4/5] relative mb-3 overflow-hidden">
            <img
              src="../assets/section3.png?height=400&width=320"
              alt="Person on water"
              className="object-cover"
            />
          </div>

          <div className="px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full overflow-hidden border">
                  <img
                    src="../assets/list-img.png?height=40&width=40"
                    alt="Friend 1"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <img
                    src="../assets/list-img.png?height=40&width=40"
                    alt="Friend 2"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-white">
                <span className="font-semibold">44</span> of your friends also
                liked this post
              </span>
            </div>

            <div className="flex w-full gap-3 text-white">
              <div className="flex items-center gap-2 w-full justify-between">
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Heart className="h-4 w-4 " />
                  <span className="text-xs ">898k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <MessageCircle className="h-4 w-4 " />
                  <span className="text-xs ">156k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Share className="h-4 w-4 " />
                  <span className="text-xs ">18k</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-800 py-2 px-3 rounded-md text-white">
                  <Eye className="h-4 w-4 " />
                  <span className="text-xs ">15k</span>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md flex items-center justify-center py-2 px-3">
                  <Gift className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-gray-800 rounded-t-2xl">
        <div className="flex items-center justify-around py-4 px-4">
          <button className="text-cyan-400 hover:bg-gray-700 h-10 w-10">
            <Home className="h-6 w-6" />
          </button>
          <button className="text-gray-400 hover:bg-gray-700 h-10 w-10">
            <Users className="h-6 w-6" />
          </button>
          <button className="text-gray-400 hover:bg-gray-700 h-10 w-10">
            <Globe className="h-6 w-6" />
          </button>
          <button className="text-gray-400 hover:bg-gray-700 h-10 w-10">
            <MessageSquare className="h-6 w-6" />
          </button>
          <button className="text-gray-400 hover:bg-gray-700 h-10 w-10">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Add padding bottom to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}
