import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment} from "./redux/counterSlice";

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

    </div>
  );
}

export default App;
