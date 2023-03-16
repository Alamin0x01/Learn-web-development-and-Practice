const images = [
  "images/blog-1.png",
  "images/blog-2.png",
  "images/blog-3.png",
  "images/blog-4.png",
  "images/blog-5.png",
];
const imgIle = document.getElementById("slider-img");
let imgIndex = 0;
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const urlImg = images[imgIndex];
  console.log(imgIndex, urlImg);
  imgIle.setAttribute("src", urlImg);
  imgIndex++;
}, 1000);
