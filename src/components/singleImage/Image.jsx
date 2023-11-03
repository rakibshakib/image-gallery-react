import imageStyle from "./singleimage.module.css";
import { useStateContext } from "../../context/context";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Image = ({ images, index }) => {
  const { dispatch } = useStateContext();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    isDragging,
  } = useSortable({ id: images.key });
  //   const sortable = useSortable({ id: images.key });
  //   console.log({ sortable }, sortable?.isDragging);

  const stylesObj = {
    transformOrigin: "0 0",
    width: index === 0 ? 330 : 150,
    height: index === 0 ? 320 : 150,
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    backgroundImage: `url("${images?.img}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
    outline: "1px solid rgb(203, 203, 203)",
    borderRadius: "8px",
    position: "relative"
  };

  //   console.log({ transform, transition });
  return (
    <>
      <input
    //   className={imageStyle.checkBox}
        // className={
        //   !images?.isSelected
        //     ? imageStyle.checkBox
        //     : imageStyle.CheckBoxSelected
        // }
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
          console.log("on click");
        }}
      />
      <div
        ref={setNodeRef}
        style={stylesObj}
        {...attributes}
        {...listeners}
        className={
          images?.isSelected && isOver
            ? `${imageStyle.imageContainerSelected} grid-item-${index + 1}`
            : `${imageStyle.imageContainer} grid-item-${index + 1}`
        }
      ></div>
    </>
  );
};

export default Image;
