import { useRef } from "react";
import addPhotoIcon from "../../assets/images/add-photo-icon.png";
import style from "./layout.module.css";
import { useStateContext } from "../../context/context";

const AddImage = () => {
  const inputFile = useRef(null);
  const { dispatch } = useStateContext();
  const onButtonClick = () => {
    inputFile.current.click();
  };

  function handleFileSelect(event) {
    const file = event[0];
    const newImageObj = {
      key: Date.now(),
      img: URL.createObjectURL(file),
      isSelected: false,
    };
    if (newImageObj.key > 0) {
      dispatch({
        type: "ADD_IMG",
        payload: newImageObj,
      });
    }
  }

  return (
    <div className={style.add_img_container} onClick={onButtonClick}>
      <img src={addPhotoIcon} alt="" />
      <p>Add Images</p>
      <input
        type="file"
        id="fileInput"
        accept={"image/png, image/jpeg, image/jpg"}
        ref={inputFile}
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFileSelect(e.target.files);
          }
        }}
      />
    </div>
  );
};

export default AddImage;
