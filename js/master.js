// skill.scrollIntoView({ behavior: "smooth" });
let togglebtn = document.querySelector(".icon");
let tlinks = document.querySelector(".header .links");
// console.log(tlinks);
togglebtn.onclick = function (e) {
  e.stopPropagation(); // spans == button
//   this.classList.toggle("menu-active"); // toggle == to add or remove class to button
  tlinks.classList.toggle("open");
};
// //click anywhere outside menu and button
document.addEventListener("click", (e) => {
  if (e.target !== togglebtn && e.target !== tlinks) {
    if (tlinks.classList.contains("open")) {
    //   togglebtn.classList.toggle("menu-active"); // to remove class from button
      tlinks.classList.toggle("open");
    }
  }
});

let up = document.querySelector(".up");
up.onclick = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};