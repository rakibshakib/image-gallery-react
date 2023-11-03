import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useStateContext } from "../../context/context";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SingleImage from "../singleImage/SingleImage";
import AddImage from "./AddImage";
import { useState } from "react";
import Image from "../singleImage/Image";

const DraggableGalleryContainer = () => {
  const {
    state: { imagesList },
    dispatch,
  } = useStateContext();
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  console.log({ imagesList });

  const onDragStartHandler = (event) => {
    // console.log({ event });
    // setActiveId(event.active.id);
    const findImage = imagesList.find((item) => item.key === event.active.id);
    setActiveId(findImage);
  };
  const onDragEndHandler = (active, over) => {
    if (active?.id !== over?.id) {
      dispatch({
        type: "DRAG_IMG",
        payload: {
          dragKey: active?.id,
          dropKey: over?.id,
        },
      });
    } else {
      return;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStartHandler}
      onDragEnd={({ active, over }) => onDragEndHandler(active, over)}
    >
      <SortableContext items={imagesList} strategy={rectSortingStrategy}>
        <div className="galaryContainer">
          <div className="grid-layout">
            {imagesList?.map((images, index) => (
                // <SingleImage key={images.key} images={images} index={index} />
              <Image key={images.key} images={images} index={index} />
            ))}
            <div
              className={
                !imagesList.length > 0
                  ? `grid-item-1 add-image`
                  : `grid-item-${imagesList?.length + 1} add-image`
              }
            >
              <AddImage />
            </div>
          </div>
        </div>
      </SortableContext>
      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Image images={activeId} index={imagesList.indexOf(activeId.key)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableGalleryContainer;
