import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// <styled>
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
  margin: 30px 0 40px 0;
  font-weight: 900;
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

const CoinList = styled.div``;

const Coin = styled.div`
  background-color: ${(p) => p.theme.textColor};
  color: ${(p) => p.theme.bgColor};
  padding: 1px;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.1s linear;
    display: flex;
    align-items: center;
    padding: 15px;
  }
  &:hover {
    a {
      color: ${(p) => p.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
// </styled>

// <Props>
interface coinProps {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
// </Props>

function Coins() {
  const [coins, setCoins] = useState<coinProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(json.slice(0, 30));
      setLoading(false);
    })();
  });

  return (
    <Container>
      <Header>
        <Title>꼬인</Title>
      </Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
