// UTILISÉ POUR LE TP2

const toDto = entity => ({
    id: entity.id,
    name: entity.name
});

const toEntity = dto => ({
    id: dto.id,
    name: dto.name
});

module.exports = {
    toDto,
    toEntity
};
