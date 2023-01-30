import { useSelector } from "react-redux";
import "./App.css";
import { TopBar } from "./components/Header/TopBar";
import { ModalWrapper } from "./components/Modal/ModalWrapper";
import { Questions } from "./components/Questions/Questions";
import { RootState } from "./store";

function App() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modalState.isOpen
  );

  return (
    <div>
      <TopBar />
      <Questions />
      {isModalOpen ? <ModalWrapper /> : null}
    </div>
  );
}

export default App;
