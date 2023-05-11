// function hrparallax(layer, distance, speed) {
//     const item = document.querySelector(layer)
//     item.style.transform = 'translateX(' + -distance * speed + 'px)'
//   }

//   document.addEventListener('scroll', () => {
//     let bird = document.getElementsByClassName('bird')
//     bird.style.transform=`translateX(${-distance*0.5}px)`
// //   }
function scrollElement(){
    window.scrollTo(0, Position(document.getElementById("div")));
   }

function Position(obj){
    var currenttop = 0;
    if (obj.offsetParent){
     do {
      currenttop += obj.offsetTop;
    }while ((obj = obj.offsetParent));
     return [currenttop];
    }

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// const observer= new IntersectionObserver(entries => {})

//     entries.array.forEach(entry => {
//         if (entry.isIntersecting){
//            entry.target.classlist.add('bird_dive')
//            return;
//         }
//         square.classlist.remove('bird_dive');
//     });
// observer.observe(document.querySelector('.bird_wrapper'));