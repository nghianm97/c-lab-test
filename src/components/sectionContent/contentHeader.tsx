import { MoreHorizontal } from "lucide-react";

type IProps = {
  name?: string;
  image?: string;
};

export default function ContentHeader(props: IProps) {
  const { name, image } = props;
  return (
    <div className="flex items-center mb-3 w-full px-4">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={image}
              alt="Recruitment"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">{name}</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full h-6 cursor-pointer">
                Follow
              </button>
            </div>
            <span className="text-gray-400 text-xs">Today, 19:50</span>
          </div>
        </div>
        <button className="text-white h-8 w-8 items-start flex justify-end">
          <MoreHorizontal className="h-5 w-5 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
