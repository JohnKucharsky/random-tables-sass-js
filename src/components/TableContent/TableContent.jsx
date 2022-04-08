import "./tbody.scss";

const TableContent = ({
  arr,
  sw,
  swNum,
  handleSortIndex,
  handleSortNumber,
}) => {
  return (
    <table>
      <tbody className="tbody">
        <tr>
          <th className="tbody__id-header" onClick={() => handleSortIndex()}>
            #{sw ? <span>&#9660;</span> : <span>&#11205;</span>}
          </th>
          <th className="tbody__title">Title</th>
          <th className="tbody__number" onClick={() => handleSortNumber()}>
            Number
            {swNum ? <span>&#9660;</span> : <span>&#11205;</span>}
          </th>
        </tr>
        {arr.map((i) => (
          <tr className="tbody__row" key={i.title}>
            <td className="tbody__id">{i.index + 1}</td>
            <td>{i.title}</td>
            <td className="tbody__number-row">{i.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
