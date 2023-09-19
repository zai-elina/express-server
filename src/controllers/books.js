const Book = require("../models/book");

const getBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).send(books);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const getBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const book = await Book.findById(book_id);

    if (!book) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send(book);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const createBook = async (request, response) => {
  try {
    const book = await Book.create({ ...request.body });
    response.status(201).send(book);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const updateBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const book = await Book.findByIdAndUpdate(book_id, { ...request.body });

    if (!book) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send(book);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const book = await Book.findByIdAndDelete(book_id);

    if (!book) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send("Success");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
