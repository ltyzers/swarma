$(".clients__images").slick({
  nextArrow: document.getElementById("btn-next"),
  prevArrow: document.getElementById("btn-prev"),
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

let btnWrite = document.querySelectorAll(".catalogue.button");
let modal = document.querySelector(".modal");
for (let btn of btnWrite) {
  btn.addEventListener("click", () => {
    let a = btn.getAttribute("id");
    if (a == "btn-classic") {
      $("#name").val("Классическая");
    } else if (a == "btn-special") {
      $("#name").val("Фирменая");
    } else if (a == "btn-mexican") {
      $("#name").val("Мексиканская");
    }
    modal.classList.toggle("modal--active");
    $(".modal__input-label-pers-name").focus();
  });
}

let btn_close = document.getElementById("btn-close");
btn_close.addEventListener("click", () => {
  modal.classList.toggle("modal--active");
});
