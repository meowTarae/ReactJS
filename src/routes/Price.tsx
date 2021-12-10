import { useQuery } from "react-query";
import { fetchCoinYearHis } from "../api";
import ApexChart from "react-apexcharts";

interface priceProps {
  coinId: string;
  isDark: boolean;
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
}

function Price({ coinId, isDark }: priceProps) {
  const { isLoading, data } = useQuery<IPriceData[]>(
    ["price/weekend", coinId],
    () => fetchCoinYearHis(coinId)
  );

  console.log(data);

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((p) => p.close - p.open),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },

            yaxis: {
              tickAmount: 1,
              labels: {
                formatter: (value) => `${value.toFixed(0)}`,
              },
            },

            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              // labels: { show:   },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            title: {
              text: "Daily variance",
              style: { fontSize: "20px" },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0fbcf9"], stops: [0, 90] },
            },
            colors: ["#9c88ff"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Price;
