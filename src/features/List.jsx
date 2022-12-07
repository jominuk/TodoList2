import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletTodo, toggleStatusTodo } from "../redux/modules/todos";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const TodoListDelete = (id) => {
    dispatch(deletTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo, index) => {
          if (todo.isDone === false) {
            return (
              <StTodoContainer key={`main-card-${todo.id}`}>
                <div>상세보기</div>
                <div>
                  <h2> {todo.title} </h2>
                  <div> {todo.contens} </div>
                </div>
                <StDialogFooter>
                  <StButton onClick={() => TodoListDelete(todo.id)}>
                    삭제하기
                  </StButton>
                  <StButton onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "실패ㅠㅠ" : "성공 ^^"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>

      <h2 className="list-title">Done..! 🎉</h2>

      <StListWrapper>
        {todos.map((todo, index) => {
          if (todo.isDone === true) {
            return (
              <StTodoContainer key={`main-card-${todo.id}`}>
                <div>상세보기</div>
                <div>
                  <h2> {todo.title} </h2>
                  <div> {todo.contens} </div>
                </div>
                <StDialogFooter>
                  <StButton onClick={() => TodoListDelete(todo.id)}>
                    삭제하기
                  </StButton>
                  <StButton onClick={() => onToggleStatusTodo(todo.id)}>
                    취소
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
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
