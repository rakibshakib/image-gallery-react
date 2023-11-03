import image1 from "../assets/images/image-1.webp";
import image2 from "../assets/images/image-2.webp";
import image3 from "../assets/images/image-3.webp";
import image4 from "../assets/images/image-4.webp";
import image5 from "../assets/images/image-5.webp";
import image6 from "../assets/images/image-6.webp";
import image7 from "../assets/images/image-7.webp";
import image8 from "../assets/images/image-8.webp";
import image9 from "../assets/images/image-9.webp";
import image10 from "../assets/images/image-10.jpeg";
import image11 from "../assets/images/image-11.jpeg";

const imagesDataSet = [
  {
    img: image1,
    key: 1,
    isSelected: false,
  },
  {
    img: image2,
    key: 2,
    isSelected: false,
  },
  {
    img: image3,
    key: 3,
    isSelected: false,
  },
  {
    img: image4,
    key: 4,
    isSelected: false,
  },
  {
    img: image5,
    key: 5,
    isSelected: false,
  },
  {
    img: image6,
    key: 6,
    isSelected: false,
  },
  {
    img: image7,
    key: 7,
    isSelected: false,
  },
  {
    img: image8,
    key: 8,
    isSelected: false,
  },
  {
    img: image9,
    key: 9,
    isSelected: false,
  },
  {
    img: image10,
    key: 10,
    isSelected: false,
  },
  {
    img: image11,
    key: 11,
    isSelected: false,
  },
];

export const initialState = {
  imagesList: imagesDataSet || [],
  checkedImageList: [],
};
