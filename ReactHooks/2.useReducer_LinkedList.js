import React, { useReducer } from 'react';

const initialState = { linkedList: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'A':
      if (state.linkedList.includes('A')) {
        const index = state.linkedList.indexOf('A');
        const newList =
          state.linkedList.slice(0, index) + state.linkedList.slice(index + 3);
        return { linkedList: action.payload + newList };
      } else {
        return { linkedList: action.payload + state.linkedList };
      }
    case 'B':
      if (state.linkedList.includes('B')) {
        const index = state.linkedList.indexOf('B');
        const newList =
          state.linkedList.slice(0, index) + state.linkedList.slice(index + 3);
        return { linkedList: action.payload + newList };
      } else {
        return { linkedList: action.payload + state.linkedList };
      }
    case 'C':
      if (state.linkedList.includes('C')) {
        const index = state.linkedList.indexOf('C');
        const newList =
          state.linkedList.slice(0, index) + state.linkedList.slice(index + 3);
        return { linkedList: action.payload + newList };
      } else {
        return { linkedList: action.payload + state.linkedList };
      }
    case 'D':
      if (state.linkedList.includes('D')) {
        const index = state.linkedList.indexOf('D');
        const newList =
          state.linkedList.slice(0, index) + state.linkedList.slice(index + 3);
        return { linkedList: action.payload + newList };
      } else {
        return { linkedList: action.payload + state.linkedList };
      }
    default:
      throw new Error('Invalid');
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='main'>
      <div className='App'>
        <button onClick={() => dispatch({ type: 'A', payload: 'A->' })}>
          A
        </button>
        <button onClick={() => dispatch({ type: 'B', payload: 'B->' })}>
          B
        </button>
        <button onClick={() => dispatch({ type: 'C', payload: 'C->' })}>
          C
        </button>
        <button onClick={() => dispatch({ type: 'D', payload: 'D->' })}>
          D
        </button>
      </div>
      <div>Array Values: {state.linkedList}</div>
    </div>
  );
};
// export default App;
