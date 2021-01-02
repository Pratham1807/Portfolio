const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to('.text', {y:'0%', duration:1, stagger: 0.25})

tl.to('.slider', {y: "-100%", duration: 1.5, delay:1.5})

tl.to('.intro', {y:'-100%', duration: 1}, '-=1')

tl.fromTo('.unhide-animation', {opacity: '0%'}, {opacity: '100%', duration: 1})

setTimeout(function() {
    document.getElementsByClassName("no-display").item(0).style.display = 'block'
  }, 5000);

//smooth scrolling
$('.menu li a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        $('.menu li a').removeClass("active");
        $(this).addClass("active");

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

document.addEventListener('scroll', function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
})















