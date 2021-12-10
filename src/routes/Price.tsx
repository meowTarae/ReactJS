import { useQuery } from "react-query";
import { fetchCoinYearHis } from "../api";
import ApexChart from "react-apexcharts";

interface priceProps {
  coinId: string;
}

interface IPriceData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
  };
}

function Price({ coinId }: priceProps) {
  const { isLoading, data } = useQuery<IPriceData[]>(["p/m", coinId], () =>
    fetchCoinYearHis(coinId)
  );

  return <div>{isLoading ? "Loading..." : <div>hi</div>}</div>;
}

export default Price;
