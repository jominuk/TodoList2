import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        <StTodoContainer>
          <div>상세보기</div>

          <div>
            <h2> 제목 </h2>
            <div> 내용 </div>
          </div>
          <StDialogFooter>
            <StButton>삭제하기</StButton>
            <StButton>완료</StButton>
          </StDialogFooter>
        </StTodoContainer>
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        <StTodoContainer>
          <div>상세보기</div>

          <div>
            <h2> 제목 </h2>
            <div> 내용 </div>
          </div>
          <StDialogFooter>
            <StButton>삭제하기</StButton>
            <StButton>취소</StButton>
          </StDialogFooter>
        </StTodoContainer>
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

// const StLink = styled(Link)`
//   text-decoration: none;
// `;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
