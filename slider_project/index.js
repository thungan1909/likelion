const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderNow = $(".slider-now");
const prevBtn = $(".prevBtn");
const nextBtn = $(".nextBtn");
const imgPreview = $$(".img-prev");

const imgPreviewArr = Array.from(imgPreview);

let curImg;
let curImgIndex = 0 ;
let len = imgPreviewArr.length;


const updateImg = img => {
    return img.getAttribute("src");
}
const showSliderImg = img => {
    sliderNow.setAttribute("src", img);
}


imgPreviewArr .forEach(element => {
    element.addEventListener("click", () => {
        curImgIndex =  imgPreviewArr.indexOf(element);
        showSliderImg(element.src);
        curImg = element.src;
    });
});

window.onload = (event) => {
    // updateImg(imgPreview[0]);
    showSliderImg(imgPreview[0].src);
  };

nextBtn.addEventListener("click", () =>{
    if (curImgIndex < len -1) {
        curImgIndex = curImgIndex + 1;
       showSliderImg(imgPreview[curImgIndex].src)
    }
    else if (curImgIndex == len -1 )
    {
        curImgIndex = 0;
        showSliderImg(imgPreview[curImgIndex].src)
    }
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