// UTILISÉ POUR LE TP1 et 2

const moment = require('moment');

const toDto = entity => ({
  id: entity.id,
  title: entity.title,
  description: entity.description,
  publicationDate: moment(entity.publicationDate).format(),
  authors: [...(entity.authors || [])]
  /*authors: (entity.authors || []).map(author => ({
    id: author.id,
    name: author.name
  }))*/
});

const toEntity = dto => ({
  id: dto.id,
  title: dto.title,
  description: dto.description,
  publicationDate: moment(dto.publicationDate).valueOf(),
  authors: [...(dto.authors || [])]
  //authors: (dto.authors || []).map(author => author.id)
});

module.exports = {
  toDto,
  toEntity
};
