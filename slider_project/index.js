const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderNow = $(".slider-now");
const prevBtn = $(".prevBtn");
const nextBtn = $(".nextBtn");

nextBtn.addEventListener("click", () =>{
 
})

const imgPreview = $$(".img-prev");

const imgPreviewArr = Array.from(imgPreview);



let curImg;



let curImgIndex = 0 ;

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