import "../../App.css";
import { useState } from "react";

function PropCoin({ item, handleClick, coin, showTable }) {
  const tableNames = [
    {
      name: "UUID",
    },
    {
      name: "Market Cap",
    },
  ];

  const secondTable = (coin) => (
    <table className="tableData">
      <thead>
        <tr>
          {tableNames.map((item, i) => (
            <th key={i} className="tableData">
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tableData">{coin.uuid}</td>
          <td className="tableData">{coin.marketCap}</td>
        </tr>
      </tbody>
    </table>
  );

  // const tableHandler = () => {
  //   setShowTable(true);
  // };

  return (
    <>
      <td className="tableData">{item.rank}</td>
      <td className="tableData">
        <img className="img" src={item.iconUrl} alt="" />
      </td>
      <td className="tableData">
        {item.name}
        <button onClick={() => handleClick(item.uuid)}>click</button>
        {showTable && item.uuid === coin.uuid && <div>{secondTable(coin)}</div>}
      </td>
      <td className="tableData">{item.symbol}</td>
      <td className="tableData">{item.price}</td>
      <td className="tableData">{item.marketCap}</td>
      <td className="tableData">{item.listedAt}</td>
    </>
  );
}
export default PropCoin;
