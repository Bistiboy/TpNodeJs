// UTILISÉ POUR LE TP2

const repository = require('./author.repository');
const mapper = require('./author.mapper');
const {AppError, AppErrorTypes} = require('../error/error');

const findAll = (req, res, next) => {
    repository.findAll()
        .then(entities => {
            const authors = entities.map(mapper.toDto);
            res.json(authors);
        })
        .catch(next)
};

const find = (req, res, next) => {
    const authorId = req.params.id;
    repository.find(authorId)
        .then(entity => {
            const author = mapper.toDto(entity);
            res.json(author);
        })
        .catch(next);
};

const create = (req, res, next) => {
    const author = req.body;
    if (!author) {
        next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
    }
    const entity = mapper.toEntity(author);
    repository.create(entity)
        .then(createdEntity => {
            const createdAuthor = mapper.toDto(createdEntity);
            res.status(201).json(createdAuthor);
        })
        .catch(next);
};

const update = (req, res, next) => {
    const author = req.body;
    const authorId = req.params.id;
    if (!author) {
        return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
    }
    author.id = authorId;
    const entity = mapper.toEntity(author);
    repository.update(entity)
        .then(() => res.sendStatus(204))
        .catch(next);
};

const remove = (req, res, next) => {
    const authorId = req.params.id;
    repository.remove(authorId)
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