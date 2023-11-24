import "./main.css";
import hamburgerImage from "./assets/dropdown-svgrepo-com.svg";
import dropdown from "./dropdown";

const hamburgerIcon = new Image();
hamburgerIcon.classList.add("hamburger-icon");
hamburgerIcon.src = hamburgerImage;

const hamburger = document.querySelector(".hamburger");

hamburger.appendChild(hamburgerIcon);

const dropdownContainer = document.querySelector(".dropdown-container");

hamburgerIcon.addEventListener("click", () => {
  dropdownContainer.classList.toggle("visible");
  hamburger.classList.toggle("toggled");
});

dropdown();
