import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <h1>My Todo List</h1>
      <h3> 재미있는 React </h3>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
