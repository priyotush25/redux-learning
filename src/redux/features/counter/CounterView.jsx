import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 w-[400px] text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter App</h1>

        <div className="bg-green-500 text-white text-5xl font-bold py-6 rounded-xl mb-8 shadow-md">
          {count}
        </div>

        <div className="flex justify-center gap-3">
          <button
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-300"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-300"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            className="px-5 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-xl transition duration-300"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
