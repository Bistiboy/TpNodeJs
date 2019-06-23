// UTILISÉ POUR LE TP2

const model = require('./author.model');
const { AppError, AppErrorTypes } = require('../error/error');

const findAll = () => model.find();

const find = id => model.findById(id)
    .then(entity => {
        if (entity) {
            return entity;
        } else {
            const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No author with id=${id} has been found`);
            return Promise.reject(error);
        }
    });

const create = entity => model.create(entity);

const update = entity => model.updateOne({ _id: entity.id }, entity)
    .then(response => {
        if (!response.n) {
            return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No author with id=${entity.id} has been found`));
        }
    });

const remove = id => model.deleteOne({ _id: id })
    .then(response => {
        if (!response.n) {
            return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No author with id=${id} has been found`));
        }
    });

module.exports = {
    findAll,
    find,
    create,
    update,
    remove
};