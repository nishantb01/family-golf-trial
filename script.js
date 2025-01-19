gsap.to(".nav", {
    background: "#000",
    duration: 1,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top 11%",
        scrub: true,
    }
})

gsap.to(".main", {
    background: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -30%",
        end: "top 80%",
        scrub: 2,
    }
})


