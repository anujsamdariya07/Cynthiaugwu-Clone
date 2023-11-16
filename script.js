var timeOut;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function(dets) {
        document.getElementById("minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
    });
}

function firstPageAnimation() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10', 
        opacity: 0, 
        duration: 1.5, 
        ease: Expo.easeInOut
    })
    .to(".boundingElement", {
        y: 0, 
        ease: Expo.easeInOut, 
        duration: 1.5, 
        delay: -1, 
        stagger: 0.2
    })
    .from("#links", {
        y: -10, 
        opacity: 0, 
        duration: 1.5, 
        delay: -1, 
        ease: Expo.easeInOut
    })
}

function circleFlattener() {
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", function(dets) {
        var xDiff = dets.clientX - xPrev;
        var yDiff = dets.clientY - yPrev;

        xScale = gsap.utils.clamp(.8, 1.2, xDiff);
        yScale = gsap.utils.clamp(.8, 1.2, yDiff);

        xPrev = dets.clientX;
        yPrev = dets.clientY;

        circleMouseFollower(xScale, yScale);
    });
}

// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;

//     elem.addEventListener("mouseleave", function (dets) {
//         gsap.to(elem.querySelector("img"), {
//             opacity: 0, 
//             ease: Power3, 
//         });
//     });

//     elem.addEventListener("mousemove", function (dets) {
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         diffrot = dets.clientX - rotate;
//         rotate = dets.clientX;
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1, 
//             ease: Power3, 
//             top: diff, 
//             left: dets.clientX, 
//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2) 
//         });
//     });
// });

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  

circleMouseFollower();
firstPageAnimation();
circleFlattener();