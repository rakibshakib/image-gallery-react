import "./assets/style/main.css";
import ActionBar from "./components/ActionBar";
import DraggableGalleryContainer from "./components/DraggableGalleryContainer";
import StateProvider from "./context/Store";
function App() {
  return (
    <StateProvider>
      <div className="container">
        <ActionBar />
        <DraggableGalleryContainer />
      </div>
    </StateProvider>
  );
}

export default App;
