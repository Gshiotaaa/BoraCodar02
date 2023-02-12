const button360 = document.getElementById("button3d");
const imageProduct = document.getElementById("imageProduct");

button360.onclick = () => {
  if (
    imageProduct.src ===
    "file:///C:/Users/gabri/Desktop/JavaScript/BoraCodar/Desafio%232/sofa.png"
  ) {
    imageProduct.src = "sofaGIF.gif";
  } else {
    imageProduct.src = "sofa.png";
  }
};
