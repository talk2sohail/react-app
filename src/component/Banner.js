import React, { Fragment } from "react";

function Banner() {
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
