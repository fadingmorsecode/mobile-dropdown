export default function dropDownFunc() {
  function dropdownManipulation(event) {
    const dropDownContainer = document.querySelector(".dropdown-container");
    const dropDownIcon = document.querySelector(".hamburger");

    const dropDownBtn = event.target.matches(".dropdown-btn");
    let currentDropDownMenu;

    if (
      event.target.parentNode.classList.contains("dropdown-menu") ||
      event.target.classList.contains("dropdown-menu")
    ) {
      return;
    }

    if (dropDownBtn) {
      const dropDown = event.target.closest(".dropdown");
      const dropDownMenu = dropDown.childNodes[1];
      dropDownMenu.classList.toggle("display");
      currentDropDownMenu = dropDownMenu;
    }

    document.querySelectorAll(".dropdown-menu.display").forEach((active) => {
      if (active !== currentDropDownMenu) {
        active.classList.toggle("display");
      }
      if (!dropDownContainer.contains(event.target)) {
        dropDownContainer.classList.toggle("visible");
        dropDownIcon.classList.toggle("toggled");
      }
    });

    if (
      event.target !== document.querySelector(".hamburger-icon") &&
      !dropDownContainer.contains(event.target) &&
      document.querySelector(".hamburger").classList.contains("toggled")
    ) {
      dropDownContainer.classList.toggle("visible");
      dropDownIcon.classList.toggle("toggled");
    }
  }

  document.addEventListener("click", dropdownManipulation);
}
