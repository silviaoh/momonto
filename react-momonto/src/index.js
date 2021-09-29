import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// React의 시작
// 1. 첫번째 인자 : 화면에 보여주고 싶은 컴포넌트
// 2. 화면에 보여주고 싶은 컴포넌트 위치. 단, 이름은 함부로 수정하지 말아야 한다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
