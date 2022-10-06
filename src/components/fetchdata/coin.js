import PropCoin from "./PropCoin";

function Coin(props) {
  const item = props.details;

  return (
    <>
      <PropCoin
        handleClick={(uuid) => props.handleCoinClick(uuid)}
        name={item.name}
        uuid={item.uuid}
        iconUrl={item.iconUrl}
        symbol={item.symbol}
        price={item.price}
        marketCap={item.marketCap}
        rank={item.rank}
      />
      {item.uuid === props.coin.uuid && (
        <p className="para">{props.coin.uuid}</p>
      )}
    </>
  );
}
export default Coin;
