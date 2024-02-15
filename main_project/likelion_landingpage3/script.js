
const _likeBtn = document.querySelectorAll(".likeBtn");


_likeBtn.forEach( (btn) => {
    btn.addEventListener("click", function () {
        btn.children[0].classList.replace("fa-thumbs-up", "fa-check");
        btn.children[1].textContent = "Liked"; 
    });
})

const repliesBtn = document.querySelectorAll(".reply");

// Với mỗi nút Reply 
repliesBtn.forEach((btn, index) => {
    btn.addEventListener("click", function() {
    
        // Lấy ra tất cả comment của bài blog tương ứng
        // index bắt đầu từ 0 => index + 1
        const comments = document.querySelectorAll(".comments" + (index + 1) );
        for (const cmt of comments) {
            cmt.classList.toggle("d-none");
        }
    });

});