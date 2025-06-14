import { useState } from "react";

type IProps = {
  contentTitle?: string;
  listImage?: string[];
  description?: string;
};

export default function Content(props: IProps) {
  const { contentTitle, listImage, description } = props;
  const [showFullText, setShowFullText] = useState(false);

  const renderListImage = listImage
    ?.filter((_, index: number) => index > 0 && index < listImage.length - 1)
    .map((item: string, index: number) => (
      <div className="relative w-full" key={index}>
        <img
          src={item}
          alt="Harbor view"
          className="object-cover w-full h-[120px]"
        />
      </div>
    ));

  return (
    <>
      {contentTitle && (
        <div className="text-sm text-white mb-3 leading-relaxed text-left px-4">
          <div className="mb-2">{contentTitle}</div>
          <div className="mb-2 relative">
            <pre
              className={`text-wrap whitespace-pre-line ${showFullText ? "" : "max-h-[9em] overflow-hidden"}`}
            >
              {showFullText
                ? description
                : description && description.length > 100
                  ? description.substring(0, description.lastIndexOf(" ", 100))
                  : description}
              {!showFullText && description && description.length > 150 && (
                <span className="inline-flex items-center">
                  <span>...</span>
                  <button
                    className="text-blue-400 text-sm ml-1 font-semibold cursor-pointer hover:text-blue-300"
                    onClick={() => setShowFullText(true)}
                  >
                    See more
                  </button>
                </span>
              )}
            </pre>
          </div>
        </div>
      )}

      {listImage && listImage.length > 0 && (
        <div className="flex gap-1 mb-3 rounded-lg h-auto max-h-[369px]">
          {/* Large left img spanning full height */}
          <div className="relative flex-1">
            <img
              src={listImage[0]}
              alt="Night street scene"
              className="object-cover h-full w-full"
            />
          </div>

          {listImage.length > 1 && (
            <div className="flex flex-col gap-1 w-[120px] min-w-[120px] max-w-[120px] flex-shrink-0">
              {/* Top right img */}
              {renderListImage}

              {/* Bottom right img with +12 overlay */}
              {listImage.length > 3 && (
                <div className="relative w-full cursor-pointer">
                  <img
                    src={listImage[listImage.length - 1]}
                    alt="Landscape"
                    className="object-cover w-full h-[120px]"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">+12</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
