import React, { useEffect, useState } from "react";

const TableContent = ({ item }) => {
  const [arr, setArr] = useState([]);
  const [sw, setSw] = useState(false);
  const [swNum, setSwNum] = useState(false);
  let sorted = [];
  item.data.map((element, index) => sorted.push({ ...element, index }));

  const handleSortIndex = () => {
    if (!sw) {
      sorted.sort((a, b) => b.index - a.index);
      setArr(sorted);
      setSw(true);
    } else {
      console.log("first");
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
      console.log("first");
      sorted.sort((a, b) => a.number - b.number);
      setSwNum(false);
      setArr(sorted);
    }
  };
  useEffect(() => {
    setArr(sorted);
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <th className="point" onClick={() => handleSortIndex()}>
            #
            {sw ? (
              <span className="span-th">&#9660;</span>
            ) : (
              <span className="span-th">&#11205;</span>
            )}
          </th>
          <th className="th">Title</th>
          <th className="th point" onClick={() => handleSortNumber()}>
            Number
            {swNum ? (
              <span className="span-th">&#9660;</span>
            ) : (
              <span className="span-th">&#11205;</span>
            )}
          </th>
        </tr>
        {arr.map((i) => (
          <tr key={i.title}>
            <td>{i.index + 1}</td>
            <td>{i.title}</td>
            <td className="center-number">{i.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
