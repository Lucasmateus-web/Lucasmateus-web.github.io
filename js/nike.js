let shoes = document.querySelectorAll(".shoes");
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");

let cores = ["Vermelho", "cinza", "marrom", "verde"];

shoes.forEach((botao, index) => {
  botao.onclick = () => {
    let slideOn = document.querySelector(".slide.active");
    slideOn.classList.remove("active");

    slides[index].classList.add("active");

    let shoesOn = document.querySelector(".shoes.active");
    shoesOn.classList.remove("active");

    shoes[index].classList.add("active");

    cores.forEach((cor) => {
      slider.classList.remove(cor);
    });
    slider.classList.add(cores[index]);
  };
});
