"use strict";

const body = document.querySelector(".js_body");

/*----- btn -----*/
const btn_about = document.querySelector(".js_btn_about");
const btn_service = document.querySelector(".js_btn_service");
const btn_work = document.querySelector(".js_btn_work");
const btn_contact = document.querySelector(".js_btn_contact");
/*----- ttl -----*/
const about = document.querySelector(".js_about");
const service = document.querySelector(".js_service");
const work = document.querySelector(".js_work");
const contact = document.querySelector(".js_contact");
/*----- content -----*/
const about_content = document.querySelector(".js_about_content");
const service_content = document.querySelector(".js_service_content");
const work_content = document.querySelector(".js_work_content");
const contact_content = document.querySelector(".js_contact_content");
const contact_img = document.querySelector(".js_contact_img");

/*----- txt-animation -----*/
btn_about.addEventListener("click", function () {
  btn_about.classList.toggle("is-active");
  setTimeout(function () {
    about.classList.toggle("is-active");
    about_content.classList.toggle("is-active");
  }, 200);

  btn_service.classList.remove("is-active");
  btn_work.classList.remove("is-active");
  btn_contact.classList.remove("is-active");
  service.classList.remove("is-active");
  work.classList.remove("is-active");
  contact.classList.remove("is-active");
  service_content.classList.remove("is-active");
  work_content.classList.remove("is-active");
  contact_content.classList.remove("is-active");
  contact_img.classList.remove("is-active");
});

btn_service.addEventListener("click", function () {
  btn_service.classList.toggle("is-active");
  setTimeout(function () {
    service.classList.toggle("is-active");
    service_content.classList.toggle("is-active");
  }, 200);

  btn_about.classList.remove("is-active");
  btn_work.classList.remove("is-active");
  btn_contact.classList.remove("is-active");
  about.classList.remove("is-active");
  work.classList.remove("is-active");
  contact.classList.remove("is-active");
  about_content.classList.remove("is-active");
  work_content.classList.remove("is-active");
  contact_content.classList.remove("is-active");
  contact_img.classList.remove("is-active");
});

btn_work.addEventListener("click", function () {
  btn_work.classList.toggle("is-active");
  setTimeout(function () {
    work.classList.toggle("is-active");
    work_content.classList.toggle("is-active");
  }, 200);

  btn_about.classList.remove("is-active");
  btn_service.classList.remove("is-active");
  btn_contact.classList.remove("is-active");
  service.classList.remove("is-active");
  about.classList.remove("is-active");
  contact.classList.remove("is-active");
  service_content.classList.remove("is-active");
  about_content.classList.remove("is-active");
  contact_content.classList.remove("is-active");
  contact_img.classList.remove("is-active");
});

btn_contact.addEventListener("click", function () {
  btn_contact.classList.toggle("is-active");
  setTimeout(function () {
    contact.classList.toggle("is-active");
    contact_content.classList.toggle("is-active");
    contact_img.classList.toggle("is-active");
  }, 200);

  btn_about.classList.remove("is-active");
  btn_service.classList.remove("is-active");
  btn_work.classList.remove("is-active");
  service.classList.remove("is-active");
  work.classList.remove("is-active");
  about.classList.remove("is-active");
  service_content.classList.remove("is-active");
  work_content.classList.remove("is-active");
  about_content.classList.remove("is-active");
});

/*----- sample -----*/
const samples = document.querySelector(".js_samples");

const btn_photo = document.querySelector(".js_btn_photo");
const btn_movie = document.querySelector(".js_btn_movie");
const btn_web = document.querySelector(".js_btn_web");

const photo = document.querySelector(".js_photos");
const movie = document.querySelector(".js_movies");
const web = document.querySelector(".js_web");

const x_p = document.querySelector(".js_btn_esc_p");
const x_m = document.querySelector(".js_btn_esc_m");
const x_w = document.querySelector(".js_btn_esc_w");

btn_photo.addEventListener("click", function () {
  photo.classList.toggle("is-active");
});
btn_movie.addEventListener("click", function () {
  movie.classList.toggle("is-active");
});
btn_web.addEventListener("click", function () {
  web.classList.toggle("is-active");
});

x_p.addEventListener("click", function () {
  photo.classList.remove("is-active");
});
x_m.addEventListener("click", function () {
  movie.classList.remove("is-active");
});
x_w.addEventListener("click", function () {
  web.classList.remove("is-active");
});

/*----- op -----*/
gsap
  .timeline()
  .from(".js_opening", {
    delay:0.2,
    autoAlpha:0,
    duration: 3.4,
    scale: 1.3,
  })

  .from(".js_btn_about", {
    autoAlpha: 0,
    scale: 0,
    delay: -0.1,
    duration: 0.2,
    ease: Power2.easeOut,
  })
  .from(".js_btn_service", {
    autoAlpha: 0,
    scale: 0,
    delay: -0.1,
    duration: 0.2,
    ease: Power2.easeOut,
  })
  .from(".js_btn_work", {
    autoAlpha: 0,
    scale: 0,
    delay: -0.1,
    duration: 0.2,
    ease: Power2.easeOut,
  })
  .from(".js_btn_contact", {
    autoAlpha: 0,
    scale: 0,
    delay: -0.1,
    duration: 0.2,
    ease: Power2.easeOut,
  })

  .from(".js_header", {
    delay: -0.5,
    duration: 0.6,
    y: -64,
    ease: Power3.easeOut,
  })

  .from(".js_footer", {
    delay: -0.4,
    duration: 0.5,
    y: 40,
    ease: Power3.easeOut,
  })

  .from(".js_top_area", {
    autoAlpha: 0,
    scale: 0.9,
    duration: 3,
    ease: Power4.easeOut,
  });
