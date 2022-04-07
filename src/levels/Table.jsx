import moment from "moment";
import React, { useState } from "react";
import TableContent from "./TableContent";

const Table = ({ item }) => {
  const [show, setShow] = useState({});
  let dateEnd = new Date(item.dateEnd);
  let dateStart = new Date(item.dateStart);
  let dEnd = moment(dateEnd).format("DD.MM.YYYY");
  let dStart = moment(dateStart).format("DD.MM.YYYY");

  const toggleTable = (d) => {
    if (item.title === d) {
      if (show.show === true) {
        return setShow({ show: false, title: item.title });
      }
      return setShow({ show: true, title: item.title });
    }
  };

  return (
    <div className="item">
      <div onClick={() => toggleTable(item.title)} className="table-header">
        <div>
          <p className="table-title">{item.title}</p>
          <p className="table-subtitle">{item.subTitle}</p>
        </div>
        <p className="table-date">
          {dStart} - {dEnd}
        </p>
      </div>
      {show.show && item.title === show.title && <TableContent item={item} />}
    </div>
  );
};

export default Table;
