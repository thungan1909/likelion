const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let sliderNow = $(".slider-now");
const prevBtn = $(".prevBtn");
const nextBtn = $(".nextBtn");
const checkbox = $(".autoChBox");
const imgPreview = $$(".img-prev");
const slider = $(".slider");
const imgPreviewArr = Array.from(imgPreview);
let curImgIndex = 0 ;
let len = imgPreviewArr.length;
let idInterval = 0;


const updateImg = img => {
    return img.getAttribute("src");
}
const animation = () => {
  
    sliderNow.classList.remove("animation");
    sliderNow.classList.add("animation");

}
const showSliderImg = img => {
   
    sliderNow.remove();
    sliderNow = document.createElement("img")
    sliderNow.classList.add("slider-now");
    animation();
    sliderNow.setAttribute("src", img);
    slider.appendChild(sliderNow)

}
const nextPic = () => {
    if (curImgIndex < len -1) {
        curImgIndex = curImgIndex + 1;
       showSliderImg(imgPreview[curImgIndex].src)
    }
    else if (curImgIndex == len -1 )
    {
        curImgIndex = 0;
        showSliderImg(imgPreview[curImgIndex].src)
    }
}



imgPreviewArr .forEach(element => {
    element.addEventListener("click", () => {
        curImgIndex =  imgPreviewArr.indexOf(element);
        showSliderImg(element.src);
    });
});

window.onload = (event) => {
    // updateImg(imgPreview[0]);
    showSliderImg(imgPreview[0].src);
  };

nextBtn.addEventListener("click", () =>{
    nextPic();
})
prevBtn.addEventListener("click", () => {
    if (curImgIndex > 0)
    {
        curImgIndex = curImgIndex - 1;
        showSliderImg(imgPreview[curImgIndex].src);
    }
    else if (curImgIndex == 0)
    {
        curImgIndex = len - 1;
        showSliderImg(imgPreview[curImgIndex].src);
    }
} )

checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      
      idInterval = setInterval(nextPic,2000);
      
      
    } else {
        clearInterval(idInterval);
      console.log("Checkbox is not checked..");
    }
  });