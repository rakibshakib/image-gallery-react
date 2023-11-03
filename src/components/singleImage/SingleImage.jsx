import imageStyle from "./singleimage.module.css";
import { useStateContext } from "../../context/context";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SingleImage = ({ images, index }) => {
  const { dispatch } = useStateContext();
  const sortable = useSortable({ id: images.key });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;
  // const inlineStyles = {
  //   transformOrigin: "0 0",
  //   // height: index === 0 ? 410 : 200,
  //   // gridRowStart: index === 0 ? "span 2" : null,
  //   // gridColumnStart: index === 0 ? "span 2" : null,
  //   // // backgroundImage: `url("${url}")`,
  //   // backgroundSize: "cover",
  //   // backgroundPosition: "center",
  //   // backgroundColor: "grey",
  // };
  // console.log({CSS})
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    transformOrigin: "0 0",
  };
  console.log({ sortable, listeners });
  console.log({ transform, transition });

  return (
    <div
      className={
        images?.isSelected
          ? `${imageStyle.imageContainerSelected} grid-item-${index + 1}`
          : `${imageStyle.imageContainer} grid-item-${index + 1}`
      }
    >
      <input
        className={
          !images?.isSelected
            ? imageStyle.checkBox
            : imageStyle.CheckBoxSelected
        }
        type="checkbox"
        name="isSelected"
        id="isSelected"
        value={images?.isSelected}
        onChange={(e) => {
          console.log("onchane");
          dispatch({
            type: "SELECT_IMG_TOGGLE",
            payload: {
              key: images?.key,
              isSelected: e.target.checked,
            },
          });
        }}
      />
      <img className={imageStyle.images} src={images?.img} alt={"images 1"} />
    </div>
  );
};

export default SingleImage;
