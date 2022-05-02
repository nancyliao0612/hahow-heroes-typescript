import { Spin } from "antd";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <Spin />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  padding-top: 5rem;
  align-items: center;
`;
