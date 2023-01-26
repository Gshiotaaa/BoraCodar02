const button360 = document.getElementById("button3d");
const imageProduct = document.getElementById("imageProduct");

button360.onclick = () => {
  imageProduct.src.toggle("sofaGIF.gif");
};
