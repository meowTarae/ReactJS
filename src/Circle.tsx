import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(p) => p.bgColor};
  border-radius: 50%;
  border: 3px solid ${(p) => p.borderColor};
`;

interface CircleProps {
  bgColor: string; // necessary
  borderColor?: string; // optional
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "purple"} />;
}

export default Circle;
