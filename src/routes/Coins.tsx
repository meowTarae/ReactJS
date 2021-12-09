import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div``;

const CoinList = styled.div``;

const Coin = styled.div``;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
]; // 3종류의 코인과 정보가 있는 곳

const Title = styled.h1`
  color: ${(p) => p.theme.accentColor};
`;

function Coins() {
  return (
    <Container>
      <Header>
        <Title>꼬인</Title>
      </Header>
      <CoinList>
        {coins.map((coin) => (
          <Coin key={coin.id}>{coin.name}</Coin>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
