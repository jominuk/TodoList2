// import { type } from "@testing-library/user-event/dist/type";

// Action Value
const ADD_TODO = "ADD_TODO"; //대문자로 입력

// Action Creator
// Todo를 추가하는 action creator
export const addSubmit = (payload) => {
  //매게변수 자리에 payload를 넣어준다.
  return { type: ADD_TODO, payload };
  //type라는 형식을 꼭 넣어줘야한다.
};

// Initial State  초기 상태값이라 쓸일이 없어 그냥 initial로 이름 지정, useState와 동일한 역할을 한다.
const initialState = {
  //타입이 객체다
  todos: [],
};

//Reducer 변화를 일으키는 함수
const todoReducer = (state = initialState, action) => {
  //state는 이니셜 스테이트가 그리고 액션을 넘겨준다
  switch (
    action.type //리덕스에서는 명령을 만드는 것을 action이라 하는데 리듀서에게 어떤 action을 하기 원한다라고 표현
  ) {
    //행동을 코드로 나타내면 객체로 만든다. 이것을 action객체를 말하고 반드시 type이라는 키를 줘야한다.
    case ADD_TODO: //우리가 action객체를 reducer에게 보냈을 때 reducer는 객체 안에서 type라는 키를 확인하기 때문
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
