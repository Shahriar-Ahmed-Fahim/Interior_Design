new VenoBox({
  selector: ".project-link",
  numeration: true,
  infinigall: true,
  spinner: "rotating-plane",
});

new VenoBox({
  selector: ".gallery-link",
  numeration: true,
  infinigall: true,
  spinner: "rotating-plane",
});

$(document).ready(function () {
  $(".testimony-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite: true,
  });
  $(".blog-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    dots: false,
    prevArrow: '<i class="d-inline-block fa-solid fa-arrow-left prev-btn"></i>',
    nextArrow: '<i class="d-inline-block fa-solid fa-arrow-right next-btn"></i>',
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },  
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },      
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

