const galleryReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_IMG_TOGGLE": {
      const { isSelected, key } = action.payload;
      return {
        ...state,
        imagesList: state.imagesList.map((img) =>
          img.key === key ? { ...img, isSelected: isSelected } : img
        ),
      };
    }
    case "UNSELECT_ALL_IMG": {
      return {
        ...state,
        imagesList: state.imagesList.map((img) => ({
          ...img,
          isSelected: false,
        })),
      };
    }
    case "DELETE_SELECETED_IMG": {
      return {
        ...state,
        imagesList: state.imagesList.filter((img) => !img?.isSelected),
      };
    }
    case "DRAG_IMG": {
      const dragIndex = state.imagesList.findIndex(item => item.key === action.payload.dragKey)
      const dropIndex = state.imagesList.findIndex(item => item.key === action.payload.dropKey)
      console.log(dragIndex, dropIndex)
      const updatedImages = [...state.imagesList];
      const [draggedImage] = updatedImages.splice(dragIndex, 1);
      updatedImages.splice(dropIndex, 0, draggedImage);
      return {
        ...state,
        imagesList: updatedImages,
      };
    }
    case "ADD_IMG": {
      return {
        ...state,
        imagesList: [...state.imagesList, action.payload],
      };
    }
    default:
      return state;
  }
};
export default galleryReducer;
