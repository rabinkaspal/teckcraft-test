import BaseStyles from "./BaseStyles";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1000} />
      <BaseStyles />
      <Routes />
    </>
  );
}

export default App;
