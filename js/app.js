let controller;
let slideScene;

function animateSlides() {
    //init controller
    controller = new ScrollMagic.Controller();

    //select some things
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header')

    //loop over each slide
    sliders.forEach(slide => {
        console.log(slide);
        const revealImg = slide.querySelector('.reveal-img')
        const revealText = slide.querySelector('.reveal-text')
        const img = slide.querySelector('img')

        //GSAP
       const slideTl = gsap.timeline({
           defaults: {duration: 1, ease: 'power2.inOut'}
       });

        slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
        slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        slideTl.fromTo(revealText, {x: '0%'}, {x: '100%'}, '-=0.75');
        slideTl.fromTo(nav, {y: '-100%'}, {y: '0%'}, '-=1.2');
    })
}

animateSlides();
