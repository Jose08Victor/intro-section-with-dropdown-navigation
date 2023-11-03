const hamburguer = document.querySelector(".menu-hamburguer");
const container = document.querySelector(".container");

hamburguer.addEventListener("click", () => container.classList.toggle('active'));

const featuresButton = document.querySelector("#features");
const companyButton = document.querySelector("#company");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

featuresButton.addEventListener("click", () => features.classList.toggle('active'));

companyButton.addEventListener("click", () => company.classList.toggle('active'));