import React, { useState } from "react";
import LevelTwo from "./LevelTwo";

const LevelOne = ({ lev1 }) => {
  const [show, setShow] = useState({});
  const toggleCity = (d) => {
    if (lev1.title === d) {
      if (show.show === true) {
        return setShow({ show: false, title: lev1.title });
      }
      return setShow({ show: true, title: lev1.title });
    }
  };
  return (
    <div className="lev1-cont">
      <button onClick={() => toggleCity(lev1.title)}>{lev1.title}</button>
      {show.show && show.title === lev1.title && (
        <div>
          <span className="line"></span>
          <span className="line-hor"></span>
          {lev1?.items?.map((lev2) => (
            <LevelTwo key={lev2.title} lev2={lev2} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelOne;
