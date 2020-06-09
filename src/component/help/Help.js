import React, { Fragment, useState } from "react";
import { data } from "../../data/HomeData";
import HelpUtil from "./HelpUtil";
function Help() {
  const [state, setSate] = useState(data);
  // console.log(state);
  return (
    <Fragment>
      <section className="howToHelpWrapper">
        <div className="sectionWrapper">
          <div className="row align-items-top justify-content-between no-gutters">
            <div className="col-12 col-md-6 col-lg-4">
              <h3 className="text-capitalize">how we can help</h3>
              <h2>We Make Mobile Repair Stress Free</h2>
            </div>

            {state.map((item) => (
              <HelpUtil key={item.key} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Help;
