export interface Story {
  id: number;
  name: string;
  image: string;
  profileImage?: string;
  isNew?: boolean;
  hasViewed?: boolean;
}

export interface IPost {
  id: number;
  name: string;
  image: string;
  listProFileView: string[];
  contentTitle: string;
  description: string;
  listImage: string[];
}
