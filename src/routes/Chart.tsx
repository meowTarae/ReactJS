import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

interface IData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const [isLoading, data] = useQuery<IData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  // IData 값들은 하루 분량치이며,
  // 이게 2주치, 즉 14개나 가지고있으므로
  // IData옆에 []를 넣어줘야한다.

  return <div>{isLoading ? "Loading Chart.." : <ApexChart />}</div>;
}
export default Chart;
