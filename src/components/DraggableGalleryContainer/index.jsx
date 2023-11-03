import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useStateContext } from "../../context/context";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

const DraggableGalleryContainer = () => {
  const {
    state: { imagesList },
  } = useStateContext();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  console.log({ imagesList });
  return (
    <DndContext
      sensors={sensors}
      onDragStart={(e) => console.log(e)}
      onDragEnd={(e) => console.log(e)}
    >
      <SortableContext items={imagesList} strategy={rectSortingStrategy}>
        <p>Hello </p>
        <p>Rakib </p>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableGalleryContainer;
