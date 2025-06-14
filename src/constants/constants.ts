import type { Story } from "../types";

export const stories: Story[] = [
  {
    id: 1,
    name: "New story",
    image: "../assets/image_story.png?height=200&width=150",
    isNew: true,
  },
  {
    id: 2,
    name: "Sapien",
    image: "../assets/img1.jpg?height=200&width=150",
    profileImage: "../assets/img_story.jpg?height=40&width=40",
    hasViewed: false,
  },
  {
    id: 3,
    name: "Dictum",
    image: "../assets/img2.jpg?height=200&width=150",
    profileImage: "../assets/img_story.jpg?height=40&width=40",
    hasViewed: false,
  },
  {
    id: 4,
    name: "Ornare",
    image: "../assets/img3.jpg?height=200&width=150",
    profileImage: "../assets/img_story.jpg?height=40&width=40",
    hasViewed: true,
  },
];
