import { Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { stories } from "../constants/constants";

export default function StoriesSlider() {
  return (
    <div className="py-4 overflow-hidden">
      <div className="px-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 1,
            momentumVelocityRatio: 1,
          }}
          resistance={true}
          resistanceRatio={0.85}
          modules={[FreeMode]}
          className="stories-swiper"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id} className="!w-28">
              {story.isNew ? (
                // New Story Card with Split Design
                <div className="relative w-28 h-40 rounded-xl overflow-hidden cursor-pointer group">
                  {/* Top Half - Image */}
                  <div className="relative w-full h-20 overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Bottom Half - Gray Background */}
                  <div className="w-full h-20 bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {story.name}
                    </span>
                  </div>

                  {/* Plus Button in the Middle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <Plus className="w-5 h-5 text-white stroke-2" />
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Story Card
                <div className="relative w-28 h-40 rounded-xl overflow-hidden cursor-pointer group">
                  {/* Background Image */}
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Profile Picture */}
                  {story.profileImage && (
                    <div className="absolute top-3 left-2">
                      <div
                        className={`w-8 h-8 rounded-full p-0.5 ${story.hasViewed ? "bg-gray-400" : "bg-blue-500"}`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={story.profileImage || "/placeholder.svg"}
                            alt={`${story.name} profile`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Story Name */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-white text-sm font-medium drop-shadow-lg">
                      {story.name}
                    </span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
