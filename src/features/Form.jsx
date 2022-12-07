import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addSubmit } from "../redux/modules/todos";

const Form = () => {
  const [title, setTitle] = useState(""); //input 값은 state로 저장 관리 해준다.
  const [contens, setContens] = useState("");
  const dispatch = useDispatch(); //어떠한 액션이 일으킨다 했을 때 사용
  const todos = useSelector((state) => state.todos.todos); // 모듈을 스토어에 잘 연결되어 실행되는지 확인

  const addAllSubmit = (event) => {
    event.preventDefault();
    if ((title, contens === "")) return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    console.log(title, contens);

    dispatch(
      addSubmit({
        //타입이랑 페이로드를 반환한다.
        //디스패치 안에 addTodo를 해줄 껀데 그 안에
        id: todos.length + 1, // 자료를 넣어줘라
        title, //페이로드 이 3개 여기있네?
        contens,
        isDone: false,
      })
    );

    setTitle("");
    setContens("");
  };

  return (
    <StAddForm onSubmit={addAllSubmit}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="title"
          value={contens}
          onChange={(e) => setContens(e.target.value)}
        />
      </StInputGroup>
      <StAddButton type="submit">추가하기</StAddButton>
    </StAddForm>
  );
};
export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
