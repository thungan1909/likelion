const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderNow = $(".slider-now");

const imgPreview = $$(".img-prev");
// const previewWrapper = $$(".img-prev");

let curImgIndex = 0 ;
const updateImg = img => {
    return img.getCurretAttribute("src");
}
const showSliderImg = img => {
    sliderNow.setAttribute("src", img);
}

imgPreview .forEach(element => {
    element.addEventListener("click", () => {
       
        showSliderImg(element.src);
    })
});



