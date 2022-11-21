import "./App.css";
import { Route, Routes } from "react-router-dom";
import BrowserDetection from "react-browser-detection";
import { useAppDispatch } from "./config/redux/hooks";
import { setBrowser } from "./config/redux/globalReducer";
import { Counter } from "modules/Counter/Counter";

function App() {
  const dispatch = useAppDispatch();
  const dispatchBrowser = (browser: string) => {
    dispatch(setBrowser(browser));
  };

  return (
    <>
      <BrowserDetection>
        {{
          default: (browser: string) => dispatchBrowser(browser),
        }}
      </BrowserDetection>
      <Routes>{/* <Route index element={<Counter />} /> */}</Routes>
    </>
  );
}

export default App;
