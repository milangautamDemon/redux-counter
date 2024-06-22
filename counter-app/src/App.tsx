import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  updateNumber,
} from "./redux/slices/appSlice";
import { RootState } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.countApp.count);
  const number = useSelector((state: RootState) => state.countApp.number);
  return (
    <div>
      <div>counter app using redux toolkit</div>
      <p>count: {count}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => dispatch(updateNumber(Number(e.target.value)))}
        placeholder="Insert Number to count"
      />
      <button onClick={() => dispatch(increaseCount())}>Increase</button>
      <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
    </div>
  );
};

export default App;
