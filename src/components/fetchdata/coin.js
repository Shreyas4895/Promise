import PropCoin from "./PropCoin";

function Coin(props) {
  const item = props.details;

  return (
    <>
      <PropCoin
        handleClick={(uuid) => props.handleCoinClick(uuid)}
        item={item}
        coin={props.coin}
        showTable={props.showTable}
      />
      {item.uuid === props.coin.uuid && (
        <td className="para">{props.coin.uuid}</td>
      )}
    </>
  );
}
export default Coin;
