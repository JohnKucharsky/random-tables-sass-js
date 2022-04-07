import moment from "moment";
import { useState } from "react";
import TableContent from "./TableContent";

const Table = ({ item }) => {
  const [show, setShow] = useState({});
  let dateEnd = new Date(item.dateEnd);
  let dateStart = new Date(item.dateStart);
  let dEnd = moment(dateEnd).format("DD.MM.YYYY");
  let dStart = moment(dateStart).format("DD.MM.YYYY");
  const [arr, setArr] = useState([]);
  const [sw, setSw] = useState(true);
  const [swNum, setSwNum] = useState(false);
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
  const toggleTable = (d) => {
    handleSortIndex();
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
