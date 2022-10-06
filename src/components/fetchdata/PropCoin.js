import "../../App.css";

function PropCoin(props) {
  return (
    <>
      <td className="tableData">{props.rank}</td>
      <td className="tableData">
        <img className="img" src={props.iconUrl} alt="" />
      </td>
      <td className="tableData"> {props.name}</td>
      <td className="tableData">{props.symbol}</td>
      <td className="tableData">{props.price}</td>
      <td className="tableData">{props.marketCap}</td>
      <td className="tableData">{props.listedAt}</td>
    </>
  );
}
export default PropCoin;
