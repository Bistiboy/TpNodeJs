// UTILISÉ POUR LE TP2

const toDto = entity => ({
  id: entity.id,
  name: entity.name,
  location: entity.location && entity.location.coordinates
});

const toEntity = dto => ({
  id: dto.id,
  name: dto.name,
  location: {
    type: 'Point',
    coordinates: [...dto.location]
  }
});

module.exports = {
  toDto,
  toEntity
};
