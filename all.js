const decodeImage = document.getElementById('decode-image');
const wrapper = document.getElementById('wrapper');

(function(){
  let url = location.search.split("?")[1];
  
  if (url === "decode-text=hello5566") {
    decodeImage.classList.toggle('show');
    wrapper.style.display = 'none';
  }
})();