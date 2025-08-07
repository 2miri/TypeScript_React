import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from{
  opacity : 0;
}
to{
opacity: 1;}
`;

const Title = styled.h1<{ $color: string; $decoration: string }>`
  color: ${(props) => props.$color};
  text-decoration: ${(props) => props.$decoration};
  animation: ${fadeIn} 2s ease-in;
`;

const BigTitle = styled(Title)`
  font-size: 50px;
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;

const BlueBorderWrapper = styled(Wrapper)`
  border-color: blue;
`;

export default function App() {
  return (
    <>
      <BlueBorderWrapper>
        <Title $color="blue" $decoration="line-through" as="p">
          Hello, ReactJS!
        </Title>
        <BigTitle $color="purple" $decoration="none">
          hello, big title!
        </BigTitle>
      </BlueBorderWrapper>
    </>
  );
}
