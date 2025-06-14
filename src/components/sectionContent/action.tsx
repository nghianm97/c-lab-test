import { Heart, MessageCircle, Share, Eye, Gift } from "lucide-react";

type IProps = {
  listProFileView: string[];
};

export default function Action(props: IProps) {
  const { listProFileView } = props;
  const data = [
    { id: 1, icon: <Heart className="h4 w-4" />, count: 898 },
    { id: 2, icon: <MessageCircle className="h4 w-4" />, count: 156 },
    { id: 3, icon: <Share className="h4 w-4" />, count: 18 },
    { id: 4, icon: <Eye className="h4 w-4" />, count: 15 },
  ];
  const renderData = data.map((item) => (
    <div
      className="flex items-center gap-1 bg-gray-800 py-1 px-3 rounded-md text-white cursor-pointer hover:bg-gray-600"
      key={item.id}
    >
      {item.icon}
      <span className="text-xs ">{item.count}k</span>
    </div>
  ));
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 px-4 py-2">
        <div className="flex -space-x-2">
          {listProFileView &&
            listProFileView?.map((item: string, index: number) => (
              <div
                className={`w-6 h-6 rounded-full overflow-hidden border ${index === listProFileView.length - 1 ? "border-white border-1" : ""}`}
                key={index}
              >
                <img
                  src={item}
                  alt="Friend 1"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </div>
            ))}
        </div>
        <span className="text-white">
          <span className="font-semibold">44</span> of your friends also liked
          this post
        </span>
      </div>
      <div className="flex w-full gap-3 text-white px-4">
        <div className="flex items-center gap-2 w-full justify-between">
          {renderData}
          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md flex items-center justify-center py-2 px-3 cursor-pointer">
            <Gift className="h-4 w-4 fill-current" />
          </button>
        </div>
      </div>
    </>
  );
}
