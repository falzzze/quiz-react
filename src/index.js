import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { QuizProvider } from "./context/quizContext";

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
