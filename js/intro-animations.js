function cubes() {

    const timeline = gsap.timeline({ defaults: { duration: 1, ease: Power3.easeInOut } })

    timeline
        .from('#name', { x: '100vw' })
        .from('.letter', { x: '-100vw' }, '<0.15')
        .from('#clima', { x: '100vw' }, '<0.15')
        .from('#carousel', {x: '-100vw'}, '<0.15')
        .from('#firstName', { x: '100vw' }, '<-0.15')
        .from('#familyName', { x: '100vw' }, '<');

    return timeline;
}

function logoAndWave() {
    const timeline = gsap.timeline()

    timeline
        .from('#circle', { scale: 0, ease: "elastic.out(0.7, 0.4)", duration: 2 }, 'setOff')
        .from('#initials', { opacity: 0, duration: 0.75 }, '>-1') 
        .from('body', {backgroundPosition: "50% 250%", duration: 1, ease: "power2.inOut"}, 'setOff')

    return timeline;
}



var master = new TimelineMax();

master
    .add(cubes())
    .add(logoAndWave(), '-=0.5')


