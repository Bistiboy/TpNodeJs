// UTILISÉ POUR LE TP1, 2 et 3

const repository = require('./book.repository');
const mapper = require('./book.mapper');
const {AppError, AppErrorTypes} = require('../error/error');

const findAll = (req, res, next) => {
  /* TP1 et 2
  const authorIds = req.query.authors && (Array.isArray(req.query.authors) ? req.query.authors : [req.query.authors]);
  const title = req.query.title;
  return (authorIds || title
      ? repository.findByCriteria({ authorIds, title })
      : repository.findAll())
      .then(entities => {
        const books = entities.map(mapper.toDto);
        res.json(books);
      })
      .catch(next)*/

  return repository.findAll().then(entities => {
      const books = entities.map(mapper.toDto);
      res.json(books);
  }).catch(next)
};

const find = (req, res, next) => {
  /*  TP1

  const bookId = parseInt(req.params.id);
  if (!bookId) {
    return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
  } */

 /*  TP2
    const bookId = req.params.id;
    repository.find(bookId)
    .then(entity => {
      const book = mapper.toDto(entity);
      res.json(book);
    })
    .catch(next);*/

 /*  TP3
 return Promise.resolve().then(() => {
     const bookId = req.params.is;
     if (!bookId) {
         return Promise.reject(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
     }
     return bookId;
    })
     .then(bookId => repository.find(bookId))
     .then(entity => mapper.toDto(entity))
     .then(book => res.json(book))
     .catch(next);*/

    const bookId = parseInt(req.params.id);
    if (!bookId) {
        return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
    }
    repository.find(bookId)
        .then(entity => {
            const book = mapper.toDto(entity);
            res.json(book);
        })
        .catch(next);
};

const create = (req, res, next) => {
  /*  TP2
  const book = req.body;
  if (!book) {
    next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
  }
  const entity = mapper.toEntity(book);
  repository.create(entity)
    .then(createdEntity => {
      const createdBook = mapper.toDto(createdEntity);
      res.status(201).json(createdBook);
    })
    .catch(next);*/

    /* TP3
    return Promise.resolve()
        .then(() => {
            const book = req.body;
            if (!book) {
                return Promise.reject(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
            }
            return book;
        })
        .then(book => mapper.toEntity(book))
        .then(entity => repository.create(entity))
        .then(createdEntity => mapper.toDto(createdEntity))
        .then(createdBook => res.status(201).json(createdBook))
        .catch(next);*/

    const book = req.body;
    if (!book) {
        next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
    }
    const entity = mapper.toEntity(book);
    repository.create(entity)
        .then(createdEntity => {
            const createdBook = mapper.toDto(createdEntity);
            res.status(201).json(createdBook);
        })
        .catch(next);
};

const update = (req, res, next) => {
  /*  TP1 et 2
  const book = req.body;
  // const bookId = parseInt(req.params.id);
  const bookId = req.params.id;
  if (!book) {
    return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
  }
  /!* if (!bookId) {
    return next(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
  } *!/
  book.id = bookId;
  const entity = mapper.toEntity(book);
  repository.update(entity)
    .then(() => res.sendStatus(204))
    .catch(next);*/

    /* TP3
    return Promise.resolve()
        .then(() => {
            const book = req.body;
            if (!book) {
                return Promise.reject(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
            }
            return book;
        })
        .then(book => {
            const bookId = req.params.id;
            if (!bookId) {
                return Promise.reject(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
            }
            book.id = bookId;
            return book;
        })
        .then(book => mapper.toEntity(book))
        .then(entity => repository.update(entity))
        .then(() => res.sendStatus(204))
        .catch(next);*/

    const book = req.body;
    const bookId = parseInt(req.params.id);
    if (!book) {
        return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
    }
    if (!bookId) {
        return next(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
    }
    book.id = bookId;
    const entity = mapper.toEntity(book);
    repository.update(entity)
        .then(() => res.sendStatus(204))
        .catch(next);
};

const remove = (req, res, next) => {
  /*  TP1
  const bookId = parseInt(req.params.id);
  if (!bookId) {
    return next(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
  } */

  /*  TP2
  const bookId = req.params.id;
  repository.remove(bookId)
    .then(() => res.sendStatus(204))
    .catch(next);*/

    /* TP3
    return Promise.resolve()
        .then(() => req.params.id)
        .then(bookId => repository.remove(bookId))
        .then(() => res.sendStatus(204))
        .catch(next);*/
    const bookId = parseInt(req.params.id);
    if (!bookId) {
        return next(new AppError(AppErrorTypes.PARAMETER_INVALID_FORMAT));
    }
    repository.remove(bookId)
        .then(() => res.sendStatus(204))
        .catch(next);

};

module.exports = {
  findAll,
  find,
  create,
  update,
  remove
};