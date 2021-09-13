/* native js navbar slider togler */
const body = document.querySelector("body");
const menu = document.querySelector(".navbar-nav");
const icon = document.querySelector(".icon-social");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  icon.classList.add("hide");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  icon.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};

// navbar scrol sticky
$(window).scroll(function () {
  if (this.scrollY > 100) {
    $(".navbar").addClass("sticky");
    $(".navbar-brand img").attr("src", "/images/logo_neutron_sticky.svg");
  } else {
    $(".navbar").removeClass("sticky");
    $(".navbar-brand img").attr("src", "/images/logo_neutron.svg");
  }
});
