const decodeImage = document.getElementById('decode-image');
const christmasImage = document.getElementById('christmas-image');
const wrapper = document.getElementById('wrapper');

(function(){
  let url = location.search.split("?")[1];
  browserWidth = document.body.clientWidth;
  
  if (browserWidth > 1600) {
    imageWidth = Math.ceil(browserWidth * 0.4);
  } else if (browserWidth > 1400) {
    imageWidth = Math.ceil(browserWidth * 0.47);
  } else if (browserWidth > 1000) {
    imageWidth = Math.ceil(browserWidth * 0.5);
  } else if (browserWidth > 767) {
    imageWidth = Math.ceil(browserWidth * 0.6);
  } else if (browserWidth > 414) {
    imageWidth = Math.ceil(browserWidth * 1);
  } else {
    imageWidth = Math.ceil(browserWidth * 1);
  }
  
  console.log(browserWidth, imageWidth);

  christmasImage.style.width = imageWidth + 'px';

  if (url === "decode-text=Fattys Owner🐈‍⬛") {
    decodeImage.classList.toggle('show');
    wrapper.style.display = 'none';
  }
})();