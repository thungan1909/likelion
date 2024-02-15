const flightBtn =  document.querySelector(".fightBtn");
const hotelBtn = document.querySelector(".hotelBtn") ;
const rentalBtn =  document.querySelector(".rentalBtn");


const flightBody = document.querySelector(".flightBody") ;
const hotelBody = document.querySelector(".hotelBody") ;
const rentalBody = document.querySelector(".rentalBody") ;

// function addActiveBtn () {

    // Add active
    hotelBtn.addEventListener("click", function ( ){
        hotelBtn.classList.add("active");
        flightBtn.classList.remove("active");
        rentalBtn.classList.remove("active");
        hotelBody.style.display = "block";
        flightBody.style.display = "none";
        rentalBody.style.display = "none";


    })
    flightBtn.addEventListener("click", function ( ){
        flightBtn.classList.add("active");
        hotelBtn.classList.remove("active");
        rentalBtn.classList.remove("active");
        hotelBody.style.display = "none";
        flightBody.style.display = "block";
        rentalBody.style.display = "none";

    })
    rentalBtn.addEventListener("click", function ( ){
        rentalBtn.classList.add("active");
        flightBtn.classList.remove("active");
        hotelBtn.classList.remove("active");
        hotelBody.style.display = "none";
        flightBody.style.display = "none";
        rentalBody.style.display = "block";
    })
// }