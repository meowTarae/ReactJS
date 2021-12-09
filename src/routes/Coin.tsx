import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

// <Styled>
const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 400px;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(p) => p.theme.accentColor};
`;

const Loading = styled.span`
  text-align: center;
  display: block;
  margin-top: 10vh;
`;
// </Styled>

// <Props>
interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
interface InfoData{

}
interface PriceData{

}
// </Props>

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [Info, setInfo] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      setInfo(infoData);

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setPrice(priceData);
    })();
  });

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : null}
    </Container>
  );
}

export default Coin;
