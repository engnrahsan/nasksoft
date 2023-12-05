$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 3,
    responsive: {
        0:{
          items: 1
        },
        500:{
          items: 1
        },
        768:{
          items: 2
        },
        992:{
            items: 3
          }
    }
})
$('#owl-carousel1').owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  items: 1,
})