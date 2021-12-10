import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
  isDark: boolean;
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

function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );
  // IData 값들은 하루 분량치이며,
  // 이게 2주치, 즉 14개나 가지고있으므로
  // IData옆에 []를 넣어줘야한다.

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: [
                {
                  x: [data?.map((p) => p.time_open)],
                  y: [
                    data?.map((p) => p.open),
                    data?.map((p) => p.high),
                    data?.map((p) => p.low),
                    data?.map((p) => p.close),
                  ],
                },
              ],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,

              background: "transparent",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
              labels: {
                formatter: (value) => `${value.toFixed(0)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
