window.onload = function(){
  const scro = document.querySelector('.scroller')
  scro.style.display = "none";
  setTimeout(() => {
    document.querySelector(".preloader").style.opacity = 0;
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 1000)
    setTimeout(() => {
      gsap.registerPlugin(TextPlugin);
      gsap.to(document.querySelector('#work'), { duration: 0.75, delay: 1.2, ease: "back.out", x: 0, opacity: 0.6 });
      gsap.to(document.querySelector('#name'), {
        duration: 1,
        text: "Agik Ananta Priyara",
        delay: 0.3
      });
      scro.style.display = "block";
    }, 1000)
  }, 1500)
}