import { useState, useEffect } from "react";

const Lec3 = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json.slice(0, 10));
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h4>Lec3...</h4>
      <h1>Coin Tracker! ({coins.length} types)</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Lec3;
