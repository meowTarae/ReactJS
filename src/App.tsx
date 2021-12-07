import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #262626;
`;

const TurnnigBox = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  background-color: skyblue;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 5px solid white;
  animation: ${TurnnigBox} 2s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
