import Action from "./action";
import ContentHeader from "./contentHeader";
import type { IPost } from "../../types";
import Content from "./content";

export default function SectionContent(props: IPost) {
  const { name, image, listProFileView, contentTitle, description, listImage } =
    props;

  return (
    <div className="border-t border-gray-800">
      <div className="py-5">
        <ContentHeader name={name} image={image} />
        <Content
          contentTitle={contentTitle}
          description={description}
          listImage={listImage}
        />
        <Action listProFileView={listProFileView} />
      </div>
    </div>
  );
}
