const $$ = document.querySelectorAll.bind(document);

const questions = $$("#container ul li h5");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.children[0].classList.toggle("fa-angle-down");
    this.children[0].classList.toggle("fa-angle-right");
    // changeArrow(this);
    this.parentElement.classList.toggle("active");
  });
}

function changeArrow(element) {
  const icon = element.children[0];
  if (icon.classList.contains("fa-angle-right")) {
    icon.classList.remove("fa-angle-right");
    icon.classList.add("fa-angle-down");
  } else if (icon.classList.contains("fa-angle-down")) {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-right");
  }
}
