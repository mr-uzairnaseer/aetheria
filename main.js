const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

// Modal & Toast Logic
const modal = document.getElementById("trip-modal");
const planBtns = document.querySelectorAll(".btn-plan");
const closeBtn = document.querySelector(".modal__close");
const tripForm = document.getElementById("trip-form");
const contactForm = document.querySelector(".contact__form form");
const toast = document.getElementById("success-toast");
const toastMsg = document.getElementById("toast-msg");

function showToast(message) {
  if (!toast) return;
  toastMsg.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

planBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

if (tripForm) {
  tripForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("show");
    showToast("Trip Plan Submitted! We'll get back to you with an itinerary.");
    tripForm.reset();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message Sent! Thank you for reaching out to Aetheria.");
    contactForm.reset();
  });
}
