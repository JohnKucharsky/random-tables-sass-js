const TableContent = ({
  arr,
  sw,
  swNum,
  handleSortIndex,
  handleSortNumber,
}) => {
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
          <tr className="tr-bottom" key={i.title}>
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
