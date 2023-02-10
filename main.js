let demo = document.querySelector(".demo");

let names = document.querySelector("#name");

let colors = document.querySelector("#color");

let sizes = document.querySelector("#size");

if (window.localStorage.getItem("font-family")) {
  window.localStorage.getItem("font-family", names.value);

  names.value = window.localStorage.getItem("font-family");

  demo.style.fontFamily = window.localStorage.getItem("font-family");
}

if (window.localStorage.getItem("color")) {
  window.localStorage.getItem("color", colors.value);

  colors.value = window.localStorage.getItem("color");

  demo.style.color = window.localStorage.getItem("color");
}

if (window.localStorage.getItem("font-size")) {
  window.localStorage.getItem("font-size", sizes.value);

  sizes.value = window.localStorage.getItem("font-size");

  demo.style.fontSize = window.localStorage.getItem("font-size");
}

names.addEventListener("change", () => {
  window.localStorage.setItem("font-family", names.value);

  demo.style.fontFamily = window.localStorage.getItem("font-family");
});

colors.addEventListener("change", () => {
  window.localStorage.setItem("color", colors.value);

  demo.style.color = window.localStorage.getItem("color");
});

sizes.addEventListener("change", () => {
  window.localStorage.setItem("font-size", sizes.value);

  demo.style.fontSize = window.localStorage.getItem("font-size");
});
