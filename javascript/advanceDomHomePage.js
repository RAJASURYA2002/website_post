"use strict";
////////////////////////////////////////////////////////////////
// scction//
const section_1 = document.querySelector("#section_1");
const section_2 = document.querySelector("#section_2");
const section_3 = document.querySelector("#section_3");
const section_4 = document.querySelector("#section_4");

//button//
const learnMore_btn = document.querySelector(".learn_more");

///////////////////////////////////////////////////////////////
//smooth scrool//
learnMore_btn.addEventListener("click", function (e) {
  const maincooreds = section_2.getBoundingClientRect();
  console.log(maincooreds); //it will print cooreds of the next page distance

  console.log(e.target.getBoundingClientRect()); //it will print all the value

  console.log("Current scroll (x/y)", window.pageXOffset, window.pageYOffset);//it will cover first to last page which here in the section_2 till; //its is also called as absolute value

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );//it will print the height/width of the page 
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
    section_2.scrollIntoView({behavior:'smooth'});
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
document.querySelector('.nav_links').addEventListener('click',function(e)
{
         console.log(e.target);
         if(e.target.classList.contains('nav_link'))
         {
            e.preventDefault();
            const id=this.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({behavior:'smooth'});
         }
});
//smooth scrool//
