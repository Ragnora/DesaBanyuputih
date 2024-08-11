function myFunction(x) {
  x.classList.toggle("change");
  const show = document.querySelector(".side");

  if (show.classList.contains("side-show")) {
      show.classList.remove("side-show");
      setTimeout(() => {
          show.style.display = 'none';
      }, 300);
  } else {
      show.style.display = 'flex';
      setTimeout(() => {
          show.classList.add("side-show");
      }, 10);
  }
}

function subFunction() {
  const showSub = document.querySelector(".side-dropdown-content");
  showSub.classList.toggle("side-sub-show");
}
