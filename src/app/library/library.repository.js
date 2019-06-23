// UTILISÉ POUR LE TP2

const _ = require('lodash');
const model = require('./library.model');
const { AppError, AppErrorTypes } = require('../error/error');

const findAll = () => model.find();

const findByCriteria = ({ location }) => {
  const criteria = _.omitBy({
    location: location && {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: location
        },
        $maxDistance: 10000
      }
    }
  }, value => value === null || value === undefined);
  return model.find(criteria);
};

const find = id => model.findById(id)
  .then(entity => {
    if (entity) {
      return entity;
    } else {
      const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No library with id=${id} has been found`);
      return Promise.reject(error);
    }
  });

const create = entity => model.create(entity);

const update = entity => model.updateOne({ _id: entity.id }, entity)
  .then(response => {
    if (!response.n) {
      return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No library with id=${entity.id} has been found`));
    }
  });

const remove = id => model.deleteOne({ _id: id })
  .then(response => {
    if (!response.n) {
      return Promise.reject(new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No library with id=${id} has been found`));
    }
  });

module.exports = {
  findAll,
  findByCriteria,
  find,
  create,
  update,
  remove
};