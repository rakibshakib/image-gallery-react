import { useStateContext } from "../../context/context";
import AddImage from "./AddImage";
import { useState } from "react";
import PhotoLayout from "../PhotoLayout";
import SinglePhoto from "../PhotoLayout/SinglePhoto";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  //   arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import GridBox from "../GridBox";

const DraggableGalleryContainer = () => {
  const {
    state: { imagesList },
    dispatch,
  } = useStateContext();
  const [currentImage, setCurrentImage] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const onDragStartHandler = (event) => {
    const findImage = imagesList.find((item) => item.key === event.active.id);
    setCurrentImage(findImage);
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
    setCurrentImage(null);
  };

  console.log({ imagesList });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStartHandler}
      onDragEnd={({ active, over }) => onDragEndHandler(active, over)}
      onDragCancel={() => setCurrentImage(null)}
    >
      <SortableContext items={imagesList} strategy={rectSortingStrategy}>
        <GridBox columns={5}>
          {imagesList?.map((images, index) => (
            <PhotoLayout key={images.key} images={images} index={index} />
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
        </GridBox>
      </SortableContext>
      <DragOverlay adjustScale={true}>
        {currentImage ? (
          <SinglePhoto
            images={currentImage}
            index={imagesList.indexOf(currentImage.key)}
            isDraggingImages={true}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableGalleryContainer;
