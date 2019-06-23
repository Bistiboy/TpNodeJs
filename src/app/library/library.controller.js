// UTILISÉ POUR LE TP2

const repository = require('./library.repository');
const mapper = require('./library.mapper');
const {AppError, AppErrorTypes} = require('../error/error');

const findAll = (req, res, next) => {
  const location = (req.query.location || '').split(',').map(coordinate => Number(coordinate));
  (location.length === 2 ? repository.findByCriteria({ location }) : repository.findAll())
    .then(entities => {
      const dtos = entities.map(mapper.toDto);
      res.json(dtos);
    })
    .catch(next)
};

const find = (req, res, next) => {
  const entityId = req.params.id;
  repository.find(entityId)
    .then(entity => {
      const dto = mapper.toDto(entity);
      res.json(dto);
    })
    .catch(next);
};

const create = (req, res, next) => {
  const dto = req.body;
  if (!dto) {
    next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
  }
  const entity = mapper.toEntity(dto);
  repository.create(entity)
    .then(createdEntity => {
      const createdDto = mapper.toDto(createdEntity);
      res.status(201).json(createdDto);
    })
    .catch(next);
};

const update = (req, res, next) => {
  const dto = req.body;
  const dtoId = req.params.id;
  if (!dto) {
    return next(new AppError(AppErrorTypes.DTO_INVALID_FORMAT));
  }
  dto.id = dtoId;
  const entity = mapper.toEntity(dto);
  repository.update(entity)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const remove = (req, res, next) => {
  const entityId = req.params.id;
  repository.remove(entityId)
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