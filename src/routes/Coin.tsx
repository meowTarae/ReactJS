import { useParams } from "react-router";

interface paramsProps {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<paramsProps>();
  console.log(coinId);

  return <h1>Coin</h1>;
}

export default Coin;
