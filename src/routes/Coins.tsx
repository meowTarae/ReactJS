import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  position: relative;
`;

const Title = styled.h1`
  font-size: 48px;
  padding-top: 20px;
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

const Icon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  font-size: 15px;
  top: -10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.1s linear;
  padding: 6%;
  &:hover {
    color: ${(p) => p.theme.accentColor};
  }
  left: 0%;
  color: ${(p) => p.theme.textColor};
`;

const IconToggleOn = styled.div`
  color: ${(p) => p.theme.accentColor};
`;
// </styled>

// <Props>
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinsProps {
  toggleTheme: () => void;
  isDark: boolean;
}
// </Props>

function Coins({ toggleTheme, isDark }: ICoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coin Tracker</title>
      </Helmet>
      <Header>
        <Title>비뜨꼬인</Title>
        <Icon onClick={toggleTheme}>
          {" "}
          {isDark ? (
            <FontAwesomeIcon icon={faToggleOff} />
          ) : (
            <IconToggleOn>
              <FontAwesomeIcon icon={faToggleOn} />
            </IconToggleOn>
          )}
        </Icon>
      </Header>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
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
