

var mobileLetterContentElem = document.querySelector('.letter.mobile .content')

var tl = gsap.timeline();

tl
    // .to(".letter.mobile .content", { position: "relative", duration: 0.01 }, "start")
    .to(".letter.mobile .content h1", { display: "none", duration: 0.1 }, )
    .to(".letter.mobile .content div", { display: "block", duration: 0.1},  )
    .reversed(true);

    mobileLetterContentElem.animation = tl; 

mobileLetterContentElem.addEventListener('click', function () {
    console.log("GSAP in tha house")
    mobileLetterContentElem.animation.reversed(!mobileLetterContentElem.animation.reversed());
})

