import { forwardRef, useState } from "react";
import { useStateContext } from "../../context/context";
import "./style.css";

const SinglePhoto = forwardRef(
  (
    {
      images,
      index,
      faded,
      style,
      isOver,
      isDragging,
      isDraggingImages,
      ...props
    },
    ref
  ) => {
    const { dispatch } = useStateContext();
    const [isHovered, setIsHovered] = useState(false);
    const containerStyle = {
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      cursor: "pointer",
      outline: "1px solid rgb(203, 203, 203)",
      borderRadius: "8px",
      position: "relative",
      zIndex: 1,
      width: index === 0 ? 340 : 160,
      height: index === 0 ? 330 : 155,
    };
    const bgImageStyle = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      width: index === 0 ? 340 : 160,
      height: index === 0 ? 330 : 155,
      backgroundImage: `url("${images?.img}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px",
      ...style,
    };
    const checkBoxStyle = {
      position: "absolute",
      top: "20px",
      left: "20px",
      height: "20px",
      width: "24px",
      zIndex: "200",
      opacity: isHovered || images?.isSelected ? 1 : 0,
      cursor: "pointer",
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    // console.log({ isHovered, isDragging, isOver, isDraggingImages });
    return (
      <div
        style={containerStyle}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={checkBoxStyle}
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
        <div
          className={
            images?.isSelected ? "boxContainerSelected" : "boxContainer"
          }
          style={bgImageStyle}
          {...props}
        ></div>
      </div>
    );
  }
);
export default SinglePhoto;
