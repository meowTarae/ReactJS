import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(p) => p.theme.bgColor};
    span {
      color: ${(p) => p.theme.textColor};
    }
  `;
  // const guelZa = styled.h2`
  //   color: ${(p) => p.theme.textColor};
  // `;

  return (
    <Container>
      <span>방가방가</span>
    </Container>
  );
}

export default App;
