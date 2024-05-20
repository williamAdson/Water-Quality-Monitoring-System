import 'bootstrap/dist/css/bootstrap.min.css';

export const Fivecolumn = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">智能合约</th>
          <th scope="col">交易额度</th>
          <th scope="col">交易方</th>
          <th scope="col">区块链</th>
          <th scope="col">数据库</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
            <td>{row.col5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
