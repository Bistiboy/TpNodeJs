require('chai').should();
const mapper = require('./book.mapper');

describe('Book mapper', () => {
    describe('toDto', () => {
        let entity;
        beforeEach(() => {
            // GIVEN
            entity = {
                id: 'x',
                title: 'HP',
                description: 'T1',
                publicationDate: 852076800000,
                authors: ['Maxime Chattam']
            };
        });

        it('should return a filled DTO', () => {
            // WHEN
            const dto = mapper.toDto(entity);

            // THEN
            dto.should.be.an('object');
            dto.should.be.an.instanceof(Object);
            dto.should.include.all.keys('id', 'title', 'publicationDate', 'authors');
            dto.id.should.be.a('string');
            dto.title.should.be.a('string');
            dto.publicationDate.should.be.a('string');
            dto.authors.should.be.an('array');
            dto.authors.should.be.an.instanceof(Array);
            dto.id.should.be.equal(entity.id);
            dto.title.should.be.equal(entity.title);
        });

        it('should return a typed DTO', () => {
            // WHEN
            const dto = mapper.toDto(entity);

            // THEN
            dto.id.should.be.a('string');
            dto.title.should.be.a('string');
            dto.publicationDate.should.be.a('string');
            dto.authors.should.be.an('array');
            dto.authors.should.be.an.instanceof(Array);
        });

        it('should return a mapped DTO', () => {
            // WHEN
            const dto = mapper.toDto(entity);

            // THEN
            dto.id.should.be.equal(entity.id);
            dto.title.should.be.equal(entity.title);
        });
    });

    describe('toEntity', () => {
        it('should return a filled entity', () => {
            // GIVEN
            const dto = {
                id: 'y',
                title: 'LSDA',
                description: 'T1',
                publicationDate: '2005-01-01T01:00:00+01:00',
                authors: ['JRR Tolkien']
            };

            // WHEN
            const entity = mapper.toEntity(dto);

            // THEN
            entity.should.be.an('object');
            entity.should.be.an.instanceof(Object);
            entity.should.include.all.keys('_id', 'title', 'publicationDate', 'authors');
        });

        it('should return a typed entity', () => {
            // GIVEN
            const dto = {
                id: 'y',
                title: 'LSDA',
                description: 'T1',
                publicationDate: '2005-01-01T01:00:00+01:00',
                authors: ['JRR Tolkien']
            };

            // WHEN
            const entity = mapper.toEntity(dto);

            // THEN
            entity._id.should.be.a('string');
            entity.title.should.be.a('string');
            entity.publicationDate.should.be.a('number');
            entity.authors.should.be.an('array');
            entity.authors.should.be.an.instanceof(Array);
            entity._id.should.be.equal(dto.id);
            entity.title.should.be.equal(dto.title);
        });

        it('should return a mapped entity', () => {
            // GIVEN
            const dto = {
                id: 'y',
                title: 'LSDA',
                description: 'T1',
                publicationDate: '2005-01-01T01:00:00+01:00',
                authors: ['JRR Tolkien']
            };

            // WHEN
            const entity = mapper.toEntity(dto);

            // THEN
            entity._id.should.be.equal(dto.id);
            entity.title.should.be.equal(dto.title);
        });
    });
});
