/**
 * Created by oscar on 1/1/17.
 */


var circle = document.getElementsByClassName("js-circle");
// var close = document.getElementsByClassName("close");

// close[0].addEventListener('click', closeMe);


for(var i = 0; i < circle.length; i++) {
   circle[i].addEventListener('click', animateCircle);
}


// function closeMe() {
//    console.log("ive been clicked");
// }


function animateCircle(event) {
   var circle = event.target;
   var progressBar = circle.firstChild.nextSibling.nextSibling.nextSibling;
   var arrayCircles = document.getElementsByClassName("js-circle");
   console.log(progressBar);



   var modal = circle.nextSibling.nextSibling;
   var paragraphModal = document.getElementsByClassName("para");

   TweenMax.to(progressBar, 3, {value:100, visibility:"visible", ease:Power1.easeOUt});
   TweenMax.to(progressBar, 1, {value:0, visibility:"hidden", ease:Power1.easeOUt, delay:3});


   if (circle === arrayCircles[0]) {
      TweenMax.to(modal, 1, {
         delay: 3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         top: 0,
         left: 0,
         onComplete: fillModal
      });

      function fillModal() {
         var modal = document.getElementsByClassName("modal")[0];
         var intro1 = document.getElementsByClassName("intro")[0];
         var intro2 = document.getElementsByClassName("intro")[1];
         var intro3 = document.getElementsByClassName("intro")[2];
         var intro4 = document.getElementsByClassName("intro")[3];
         var grouchImg = document.getElementsByClassName('grouchy');
         var dog = document.getElementsByClassName("dog");
         var cat = document.getElementsByClassName("cat");
         var harambe = document.getElementsByClassName("harambe");
         var me = document.getElementsByClassName("me")[0];
         var paraProfile = document.getElementsByClassName("profilePara")[0];
         var close = document.getElementsByClassName("close")[0];

         TweenMax.to(intro1,1, { y: 30, display:"block", ease:Power1.easeIn, delay:.5});
         TweenMax.to(grouchImg,1, {display:"block", ease:Power2.easeOut, delay:2});
         TweenMax.to(intro1,1, { display:"none", ease:Power1.easeIn, delay:2.5});
         TweenMax.to(grouchImg,1, {display:"none", ease:Power2.easeOut, delay:2.5 });
         TweenMax.to(intro2,1, { y: 30, display:"block", ease:Power2.easeOut, delay:4});
         TweenMax.to(dog,1, {x: 250, y: 80, display:"block", ease:Power1.easeIn, delay:4.5});
         TweenMax.to(cat,1, {x: 250, y: 80, display:"block", ease:Power1.easeIn, delay:4.5});
         TweenMax.to(intro2,1, { y: 30, display:"none", ease:Power2.easeOut, delay:6});
         TweenMax.to(dog,1, {x: 250, y: 80, display:"none", ease:Power1.easeIn, delay:6});
         TweenMax.to(cat,1, {x: 250, y: 80, display:"none", ease:Power1.easeIn, delay:6});
         TweenMax.to(intro3,1, { y: 30, display:"block", ease:Power2.easeOut, delay:7});
         TweenMax.to(harambe,1, {y: 50, display:"block", ease:Power1.easeIn, delay:8});
         TweenMax.to(harambe,1, {y: 50, display:"none", ease:Power1.easeIn, delay:9 });
         TweenMax.to(intro3,1, { y: 30, display:"none", ease:Power2.easeOut, delay:9});
         TweenMax.to(intro4,1, { y: 30, display:"block", ease:Power2.easeOut, delay:10});
         TweenMax.to(intro4,1, { y: 30, display:"none", ease:Power2.easeOut, delay:11});
         TweenMax.to(modal, 1, {delay: 11.5, className:"+=shrinkModal"});
         TweenMax.to(modal, 1, {delay: 11.5, zIndex: 5, width: 400 , height: "auto", position: "absolute", display: "flex", flexDirection:"column", justifyContent:"flex-start", top: 20, left: 0,ease:Power2.easeOut});
         TweenMax.to(me,1, {display:"block", ease:Power2.easeOut,delay:12});
         TweenMax.to(paraProfile,1, {display:"flex" ,ease:Power2.easeOut,delay:12});
         TweenMax.to(close,1, {display:"block", ease:Power2.easeOut,delay:12, onComplete: closeMe});
         function closeMe() {
            close.addEventListener('click', function () {
               console.log("I've been clicked");
               close.removeAttribute("style");
               paraProfile.removeAttribute("style");
               me.removeAttribute("style");
               modal.removeAttribute("style");
               modal.classList.remove("shrinkModal");

            })
         }
      }

}

   // modal.removeAttribute("style");
   // modal.className = "modal";

   // display:"flex", position:"fixed", top:20, left:0, width:300, height:"auto"

   if (circle === arrayCircles[1]) {
      TweenMax.to(modal, 1, {
         delay:3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         top: 0
      });
      TweenMax.to(paragraphModal, 8, {opacity: 1, zIndex: 5})
   }

   if (circle === arrayCircles[2]) {
      TweenMax.to(modal, 1, {
         delay:3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         top: 0,
         right: 0
      });
      TweenMax.to(paragraphModal, 8, {opacity: 1, zIndex: 5})
   }

   if (circle === arrayCircles[3]) {
      TweenMax.to(modal, 1, {
         delay:3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         bottom: 0,
         left: 0
      });
      TweenMax.to(paragraphModal, 8, {opacity: 1, zIndex: 5})
   }

   if (circle === arrayCircles[4]) {
      TweenMax.to(modal, 1, {
         delay:3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         bottom: 0
      });
      TweenMax.to(paragraphModal, 8, {opacity: 1, zIndex: 5})
   }

   if (circle === arrayCircles[5]) {
      TweenMax.to(modal, 1, {
         delay:3,
         opacity: 1,
         zIndex: 5,
         width: "100%",
         height: "100%",
         position: "absolute",
         display: "block",
         bottom: 0,
         right:0
      });
      TweenMax.to(paragraphModal, 8, {opacity: 1, zIndex: 5})
   }

}