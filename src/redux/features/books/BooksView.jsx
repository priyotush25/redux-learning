import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook } from "./bookSlice";

const BooksView = () => {
  const booksList = useSelector((state) => state.bookApp.books);
  const dispatch = useDispatch();

  console.log(booksList);

  const [books, setBooks] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookInformation = (e) => {
    e.preventDefault();

   if (!books.title || !books.author || !books.description) {
  return;
}                                                                                                                                                                                                                                                                         
    dispatch(addBook(books));
    setBooks({
      title: "",
      author: "",
      description: "",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-x rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Book Information
        </h1>

        <form onSubmit={handleBookInformation} className="space-y-5">
          <input
            type="text"
            name="title"
            value={books.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="author"
            value={books.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="description"
            value={books.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Display Books */}
                {/* Display Books */}
        <ul className="mt-6 space-y-2">
          {booksList?.map((book) => (
            <li key={book.id} className="p-2 border rounded flex items-center justify-between">
              <span>{book.text.title}</span>

                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"
                            onClick={() => dispatch(deleteBook(book.id))}
                          >
                            X
                          </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksView;
