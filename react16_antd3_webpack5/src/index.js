// import "./style.css";
// import "./style.less";
import React, { createElement } from "react";
import ReactDOM from "react-dom";
import MyApp from "component";
// import { sum } from "../utils/tsIndex.ts";

// // 这是一段注释
// const arr = [10, 20, 30];
// console.log(arr.map((n) => n * 2));
// console.log(sum(100, 200));
// const zznhImg = "../public/assets/img/zznh.png";
// let root = document.getElementById("root");
// root.className = "";
// let divDom = document.createElement("div");
// divDom.innerHTML = "9999";
// root.append(divDom);

ReactDOM.render(<MyApp> </MyApp>, document.getElementById("root"));
import "./store/index";
