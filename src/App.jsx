import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-4xl min-h-screen flex flex-col items-center justify-center gap-5 bg-gray-100">
      {count}

      <div className="flex items-center gap-1">
        <button className="py-2 px-10 rounded-lg bg-blue-500 text-xl font-medium" onClick={() => dispatch(increment())}>+</button>
        <button className="py-2 px-10 rounded-lg bg-blue-500 text-xl font-medium" onClick={() => dispatch(decrement())}>-</button>
      </div>

      <button className="py-2 px-20 rounded-lg bg-blue-500 text-xl font-medium" onClick={() => dispatch(reset())}>0</button>
    </div>
  );
};

export default App;
