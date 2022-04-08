import moment from "moment";
import { useState } from "react";
import TableContent from "./../TableContent/TableContent";
import "./table.scss";

const Table = ({ item }) => {
  const [show, setShow] = useState({});
  const [arr, setArr] = useState([]);
  const [sw, setSw] = useState(true);
  const [swNum, setSwNum] = useState(false);

  // dates
  let dateEnd = new Date(item.dateEnd);
  let dateStart = new Date(item.dateStart);
  let dEnd = moment(dateEnd).format("DD.MM.YYYY");
  let dStart = moment(dateStart).format("DD.MM.YYYY");
  // end dates

  // sort table
  let sorted = [];
  item.data.map((element, index) => sorted.push({ ...element, index }));
  const handleSortIndex = () => {
    if (!sw) {
      sorted.sort((a, b) => b.index - a.index);
      setArr(sorted);
      setSw(true);
    } else {
      sorted.sort((a, b) => a.index - b.index);
      setSw(false);
      setArr(sorted);
    }
  };
  const handleSortNumber = () => {
    if (!swNum) {
      sorted.sort((a, b) => b.number - a.number);
      setArr(sorted);
      setSwNum(true);
    } else {
      sorted.sort((a, b) => a.number - b.number);
      setSwNum(false);
      setArr(sorted);
    }
  };
  // end sort table

  // toggle
  const toggleTable = (d) => {
    handleSortIndex();
    if (item.title === d) {
      if (show.show === true) {
        return setShow({ show: false, title: item.title });
      }
      return setShow({ show: true, title: item.title });
    }
  };
  // end toggle

  return (
    <div className="table">
      <div onClick={() => toggleTable(item.title)} className="table__header">
        <div>
          <p className="table__header-title">{item.title}</p>
          <p className="table__header-subtitle">{item.subTitle}</p>
        </div>
        <p className="table__header-date">
          {dStart} - {dEnd}
        </p>
      </div>
      {show.show && item.title === show.title && (
        <TableContent
          arr={arr}
          sw={sw}
          swNum={swNum}
          handleSortIndex={handleSortIndex}
          handleSortNumber={handleSortNumber}
        />
      )}
    </div>
  );
};

export default Table;
