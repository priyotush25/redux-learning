import BooksView from "./redux/features/books/BooksView";
import CounterView from "./redux/features/counter/CounterView";
import TodosView from "./redux/features/todos/TodosView";

const App = () => {
  return (
<div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-8">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
      Redux Toolkit Dashboard
    </h1>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Counter Card */}
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
        <CounterView />
      </div>

      {/* Todos Card */}
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
        <TodosView />
      </div>

      {/* Books Card */}
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
        <BooksView />
      </div>

    </div>

  </div>

</div>
  );
};

export default App;
