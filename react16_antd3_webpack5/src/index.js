import "./style.css";
import "./style.less";
import "../public/assets/font/iconfont.css";
const zznhImg = "../public/assets/img/zznh.png";
let root = document.getElementById("root");
let divDom = document.createElement("div");
divDom.innerHTML = "9999";
root.append(divDom);

const zznhImage = new Image();
zznhImage.src = zznhImg;
root.appendChild(zznhImage);

const bgDiv = document.createElement("div");
bgDiv.style.width = "200px";
bgDiv.style.height = "200px";
bgDiv.className = "bg-image";
root.append(bgDiv);

const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";
root.append(iEl);
