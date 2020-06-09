$(".bannerSingle").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});
$(".services").slick({
  dots: false,
  infinite: false,
  nav: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $(".prevAchieve"),
  nextArrow: $(".nextAchieve"),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        variableWidth: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
