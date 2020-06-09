import React from "react";

function HelpUtil({ item }) {
  console.log(item.classColor);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="serviceItem">
        <div className={`itemImage ${item.classColor}`}>
          <img src={item.img} width="80" alt="" />
        </div>
        <div className="contentHolder">
          <h4>{item.head}</h4>
          <p>{item.para}</p>
          <div className="readMore d-flex justify-content-between">
            <p>from Rs {item.price}</p>
            <a href="javascript:void(0)">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpUtil;
