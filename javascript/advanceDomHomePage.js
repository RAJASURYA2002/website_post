"use strict";
////////////////////////////////////////////////////////////////
// scction//
const section_1 = document.querySelector(".section");
const section_2 = document.querySelector("#section_2");
const section_3 = document.querySelector("#section_3");
const section_4 = document.querySelector("#section_4");
const nav=document.querySelector('nav');
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
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//smooth scrool//

//operation tabs//
// operationBtnContainer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const clicked = e.target.closest(".button_op");
//   //  console.log(clicked);
//   //guard class
//   if (!clicked) return;

//   btnOperation.forEach((t) => t.classList.remove("above"));
//   clicked.classList.add("above");
//   //  console.log(clicked.dataset.tab);
//   const hidden = document.querySelectorAll(".op_info");
//   hidden.forEach((t) => t.classList.add("hidden"));
//   const remove = document.querySelector(
//     `.hidden_operation_${clicked.dataset.tab}`
//   );
//   //  console.log(document.querySelector(`.hidden_operation_${clicked.dataset.tab}`));
//   remove.classList.remove("hidden");
// });

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


//sticky navication//
const stickycoords=section_2.getBoundingClientRect();
window.addEventListener('scroll',function(){
if(this.window.scrollY>stickycoords.top)
{
  nav.classList.add('sticky');
}
else{
  nav.classList.remove('sticky');
}
});
//sticky navication//