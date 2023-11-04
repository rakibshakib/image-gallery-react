import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SinglePhoto from "./SinglePhoto";

const PhotoLayout = (props) => {
  const { images } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    isDragging,
  } = useSortable({ id: images.key });

  return (
    <SinglePhoto
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      isOver={isOver}
      isDragging={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default PhotoLayout;
