// UTILISÉ POUR LE TP1 et 2

const _ = require('lodash');
const Book = require('./book.model');
const { AppError, AppErrorTypes } = require('../error/error');
const books = require('../../assets/books.entities') || [];

const getNextId = () => Math.max(...books.map(book => book.id)) + 1;

const findAll = () => Promise.resolve(books);

//const findAll = () => Book.find().populate('authors');

/* TP3
const findByCriteria = ({ authorIds, title }) => {
  const criteria = _.omitBy({
    authors: authorIds && { '$in': authorIds },
    title: title && new RegExp(title, 'i')
  }, value => value === null || value === undefined);
  return Book.find(criteria).populate('authors');
};*/

const find = id => /*Book.findById(id).populate('authors').then(entity  => */ {
  const entity = books.find(book => book.id === id);
    if (entity) {
      return Promise.resolve(entity);
    } else {
      const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No book with id=${id} has been found`);
      return Promise.reject(error);
    }
  }/*)*/;

const create = entity => {
  /* TP2 et 3
  const book = new Book(entity);
  return book.save();*/
  /* TP1 */
  const book = {...entity, id: getNextId()};
  books.push(book);
  return Promise.resolve(book);
};

const update = entity => {
  /*  TP1 */
  const index = books.findIndex(book => book.id === entity.id);
  if (index > -1) {
    books[index] = entity;
    return Promise.resolve(entity);
  } else {
    const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No book with id=${entity.id} has been found`);
    return Promise.reject(error);
  }
  /* TP2 et 3
  const book = new Book(entity);
  book.isNew = false;
  return book.save().catch(error => {
    if(error.name === "VersionError") {
      return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No book with id=${entity.id} has been found`));
    }
    return Promise.reject()
  });*/
};

const remove = id => /* Book.deleteOne({_id: id}).then(response => */ {
  /* TP1 */
  const index = books.findIndex(book => book.id === id);
  if (index > -1) {
    const [book] = books.splice(index, 1);
    return Promise.resolve(book);
  } else {
    const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No book with id=${id} has been found`);
    return Promise.reject(error);
  }
 /* TP2 et 3
 if (!response.n) {
    return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No book with id=${id} has been found`))
  }*/
};

module.exports = {
  findAll,
  find,
  create,
  update,
  remove
};