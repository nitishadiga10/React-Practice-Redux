import "./App.css";
import InputForm from "./InputForm";
import Users from "./Users";
import ErrorModal from "./ErrorModal";
import { useSelector } from "react-redux";

function App() {
  const error = useSelector((state) => state.error);

  console.log(error);

  return (
    <div>
      {error && <ErrorModal></ErrorModal>}
      <InputForm></InputForm>
      <Users></Users>
    </div>
  );
}

export default App;
