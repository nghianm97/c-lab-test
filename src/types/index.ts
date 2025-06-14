export interface Story {
  id: number;
  name: string;
  image: string;
  profileImage?: string;
  isNew?: boolean;
  hasViewed?: boolean;
}
