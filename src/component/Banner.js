import React, { Fragment, useEffect } from "react";
import $ from "jquery";
function Banner() {
  useEffect(() => {
    window.$(".bannerSingle").slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  }, []);
  return (
    <section className="bannerWrapper">
      <div className="bannerSingle">
        <div className="bannerItem">
          <img src="assets/images/banner/bannerOne.jpg" alt="" />
        </div>
        <div className="bannerItem">
          <img src="assets/images/banner/bannerTwo.jpg" alt="" />
        </div>
        <div className="bannerItem">
          <img src="assets/images/banner/bannerOne.jpg" alt="" />
        </div>
        <div className="bannerItem">
          <img src="assets/images/banner/bannerTwo.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
