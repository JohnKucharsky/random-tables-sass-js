import React, { useState } from "react";
import Table from "./../Table/Table";

const LevelTwo = ({ lev2 }) => {
  const [show, setShow] = useState({});

  // toggle
  const toggle = (d) => {
    if (lev2.title === d) {
      if (show.show === true) {
        return setShow({ show: false, title: lev2.title });
      }
      return setShow({ show: true, title: lev2.title });
    }
  };

  return (
    <div className="lev2">
      <button onClick={() => toggle(lev2.title)}>{lev2.title}</button>
      {show.show && show.title === lev2.title && (
        <div className="lev2__container">
          {lev2.items.map((item) => (
            <Table key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelTwo;
