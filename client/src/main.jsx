import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextApi from "./context/ContextApi";
import { Provider } from "react-redux";
import store from "./store/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContextApi>
        <App />
      </ContextApi>
    </Provider>
  </StrictMode>
);
