import React, { useState } from "react";
import Table from "./Table";

const LevelTwo = ({ lev2 }) => {
  const [show, setShow] = useState({});
  const toggleCity = (d) => {
    if (lev2.title === d) {
      if (show.show === true) {
        return setShow({ show: false, title: lev2.title });
      }
      return setShow({ show: true, title: lev2.title });
    }
  };

  return (
    <div className="lev2-cont">
      <button onClick={() => toggleCity(lev2.title)}>{lev2.title}</button>
      {show.show && show.title === lev2.title && (
        <div className="flex">
          {lev2.items.map((item) => (
            <Table key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelTwo;
