import type { IPost, Story } from "../types";

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

export const posts: IPost[] = [
  {
    id: 1,
    name: "RECRUITMENT DESIGN UI...",
    image: "../assets/image_story.png?height=40&width=40",
    listProFileView: [
      "./assets/list-img.png?height=40&width=40",
      "./assets/list-img.png?height=40&width=40",
    ],
    contentTitle: "💖 [HCM RECRUITMENT] - UI/UX DESIGNER 💖",
    description: `Lucky Shop - E-commerce application based on group purchasing model.
      Are you passionate about product design? Want to put your personal stamp purchasing m...`,
    listImage: [],
  },
  {
    id: 2,
    name: "Belle Literature co",
    image: "../assets/image_story.png?height=40&width=40",
    listProFileView: [
      "./assets/list-img.png?height=40&width=40",
      "./assets/list-img.png?height=40&width=40",
    ],
    listImage: [
      "../../assets/img4.jpg",
      "../../assets/img5.jpg",
      "../../assets/img6.jpg",
      "../../assets/img7.jpg",
    ],
    contentTitle: "",
    description: "",
  },
  {
    id: 3,
    name: "John Bonnet",
    image: "../assets/image_story.png?height=40&width=40",
    listProFileView: [
      "./assets/list-img.png?height=40&width=40",
      "./assets/list-img.png?height=40&width=40",
    ],
    listImage: ["../assets/section3.png?height=400&width=320"],
    contentTitle: "",
    description: "",
  },
];
