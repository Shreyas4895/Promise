import { useState } from "react";
import Loding from "../../Loding";
import Coin from "./coin";
import "./styles.css";

function Coins() {
  const [coins, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState({});

  const fetchCoins = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const data = await fetch(
      "https://coinranking1.p.rapidapi.com/coins",
      options
    )
      .then((response) => response.json())
      .then(({ data: { coins } }) => {
        setRes(coins);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    return data;
  };

  const fetchCoin = async (data) => {
    console.log("in coins", data);
    const options = {
      method: "GET",
      params: { referenceCurrencyUuid: data, timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    await fetch("https://coinranking1.p.rapidapi.com/coin/" + data, options)
      .then((response) => response.json())
      .then(({ data: { coin } }) => {
        setCoin(coin);
      })
      .catch((error) => console.error(error));
  };

  const columns = [
    {
      heading: "Rank",
    },
    {
      heading: "Name",
    },
    {
      heading: "Price",
    },
    {
      heading: "Market Cap",
    },
    {
      heading: "Price",
    },
    {
      heading: "Listed At",
    },
  ];

  return (
    <div>
      <button onClick={fetchCoins} disabled={isLoading}>
        Fetch Data
      </button>
      {isLoading && <Loding />}
      {/* {<Coin coins={coins}/>} */}
      <div>
        <table>
          <thead>
            {columns.map((item) => (
              <th>{item.heading}</th>
            ))}
          </thead>
          <tbody>
            {coins.map((item, index) => {
              return (
                <tr>
                  <Coin
                    handleCoinClick={(data) => fetchCoin(data)}
                    key={item.uuid}
                    details={item}
                    coin={coin}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Coins;
