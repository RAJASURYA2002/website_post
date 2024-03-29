"use strict";
////////////////////////////////////////////////////////////////
// scction//
const header = document.querySelector(".header");
const section_2 = document.querySelector("#section_2");
const section_3 = document.querySelector("#section_3");
const section_4 = document.querySelector("#section_4");
const nav = document.querySelector("nav");
const top1 = document.querySelector(".a");
// scction//
//button//
const learnMore_btn = document.querySelector(".learn_more");
//button//

//operation tabs//
const operationBtnContainer = document.querySelector(".button_container");
const btnOperation = document.querySelectorAll(".button_op");
//operation tabs//

//opocity hover//
const navOpacity = document.querySelector(".nav_container");

//opocity hover//
///////////////////////////////////////////////////////////////
//smooth scrool//
learnMore_btn.addEventListener("click", function (e) {
  const maincooreds = section_2.getBoundingClientRect();
  console.log(maincooreds); //it will print cooreds of the next page distance

  console.log(e.target.getBoundingClientRect()); //it will print all the value

  console.log("Current scroll (x/y)", window.pageXOffset, window.pageYOffset); //it will cover first to last page which here in the section_2 till; //its is also called as absolute value

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //it will print the height/width of the page
  //its is old school code//
  //scrolling//

  //   window.scrollTo(
  //     maincooreds.left + window.pageXOffset,
  //     maincooreds.top + window.pageYOffset
  //   );

  //animation//

  //   window.scrollTo({
  //    left: maincooreds.left + window.pageXOffset,
  //    top: maincooreds.top + window.pageYOffset,
  //    behavior:'smooth',
  //   });

  //animation//
  //scrolling//

  //its is old school code//

  //modern js ES6//
  section_2.scrollIntoView({ behavior: "smooth" });
  //modern js ES6//
});

//all the nav_links//

//old//
// const link=document.querySelectorAll('.quick_link');
// link.forEach(function(el)
// {
// el.addEventListener('click',function(e)
// {
// e.preventDefault();
// const id=this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({behavior:'smooth'});
// });
// });

//new//
document.querySelector(".nav_links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//smooth scrool//

//operation tabs//

operationBtnContainer.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  const clicked = e.target.closest(".button_op");
  // console.log(clicked);
  //  console.log(clicked);
  //guard class
  if (!clicked) return;

  btnOperation.forEach((t) => t.classList.remove("above"));
  clicked.classList.add("above");
  //  console.log(clicked.dataset.tab);++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const hidden = document.querySelectorAll(".op_info");
  hidden.forEach((t) => t.classList.add("hidden"));
  const remove = document.querySelector(
    `.hidden_operation_${clicked.dataset.tab}`
  );
  //  console.log(document.querySelector(`.hidden_operation_${clicked.dataset.tab}`));
  //remove.classList.remove("hidden");
});

////opocity hover//
const navOpacityController = function (e, opacity) {
  if (e.target.classList.contains("nav_link")) {
    const linkHover = e.target;
    const linkNav = linkHover.closest("nav").querySelectorAll(".nav_link");
    const logo = linkHover.closest("nav").querySelector("img");
    linkNav.forEach((op) => {
      if (op !== linkHover) op.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
navOpacity.addEventListener("mouseover", navOpacityController.bind(0.5));
navOpacity.addEventListener("mouseout", navOpacityController.bind(1));

//important//
//closest is to find the the nearest parrent class on that if will find the class releated to that and store in the node(example:querySelectorAll selecting all the class)
//if we use to select all same class using document.querySelectorAll(it wll select all)
//so what we use closest to select the particular block
//important//
////opocity hover//

//sticky navication_old school//
// const ss = document.querySelector(".features_heading");
// const stickycoords = section_2.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > stickycoords.top - 10) {
//     nav.classList.add("sticky");
//     top1.classList.remove("top_hidden");
//     // console.log(top1);
//   } else {
//     nav.classList.remove("sticky");
//     top1.classList.add("top_hidden");
//     // section_1.scrollIntoView({ behavior: "smooth" });
//   }
// });
//sticky navication-old school//

//sticky navication-new school//
const navheight = nav.getBoundingClientRect().height;
// console.log(navheight);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    top1.classList.remove("top_hidden");
  } else {
    nav.classList.remove("sticky");
    top1.classList.add("top_hidden");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
});
headerObserver.observe(header);
//sticky navication-new school//
//sectionAnimation//
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//sectionAnimation//

// img_lazy
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("img_lazy");
  });
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
imgTargets.forEach((img) => imgObserver.observe(img));

top1.addEventListener("click", function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});
//login_btn
const form = document.querySelector(".container");
const btnForm = document.querySelectorAll(".acbtn");
const op = document.querySelector(".op");

btnForm.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", function (e) {
    e.preventDefault();
    form.classList.remove("hidden_log");
    op.classList.add("opacity");
  });
});
//login_btn
const close = document.querySelector("body");
close.addEventListener("click", function (e) {
  if (e.target.classList.contains("form_1")) return;
  form.classList.add("hidden_log");
  op.classList.remove("opacity");
});
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    form.classList.add("hidden_log");
    op.classList.remove("opacity");
  }
});

//slider_button
const slideEvent = function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slide_container");
  const btnRight = document.querySelector(".slider__btn--right");
  const btnLeft = document.querySelector(".slider__btn--left");
  const dot = document.querySelector(".dot");
  let curSlide = 0;
  let maxSlide = slides.length;
  //function
  const createDots = function () {
    slides.forEach(function (_, i) {
      console.log(i);
      dot.insertAdjacentHTML(
        "beforeend",
        `<button class="dots_dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots_dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots_dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  //event lisner
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });
  setInterval(nextSlide, 10000);
  dot.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots_dot")) {
      console.log(e.target);
      const { slide } = e.target.dataset;
      console.log(slide);
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slideEvent();
//slider_button
