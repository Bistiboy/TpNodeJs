const chai = require('chai');
const spies = require('chai-spies');
chai.should();
chai.use(spies);
const spy = chai.spy;

const mock = require('mock-require');
const repositoryMock = {};
mock('./book.repository', repositoryMock);
const controller = require('./book.controller');

describe('Book controller', () => {
    describe('findAll', () => {
        let res, next;

        beforeEach(() => {
            Object.assign(repositoryMock, {
                findAll: spy(() => Promise.resolve([]))
            });
            res = spy.interface('res', ['json']);
            next = spy(() => {});
        });

        it('should call repository.findAll()', (done) => {
            controller.findAll(null, res, next)
                .then(() => {
                    repositoryMock.findAll.should.have.been.called();
                    done();
                });
        });

        it('should call res.json()', (done) => {
            controller.findAll(null, res, next)
                .then(() => {
                    res.json.should.have.been.called();
                    next.should.not.have.been.called();
                    done();
                });
        });

        it('should call next() on repository error', (done) => {
            Object.assign(repositoryMock, {
                findAll: () => Promise.reject('Error')
            });
            controller.findAll(null, res, next)
                .then(() => {
                    res.json.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });
    });

    describe('find', () => {
        let req, res, next;

        beforeEach(() => {
            Object.assign(repositoryMock, {
                find: spy(() => Promise.resolve({}))
            });
            req = { params: { id: '1' } };
            res = spy.interface('res', ['json']);
            next = spy(() => {});
        });

        it('should call repository.find()', (done) => {
            controller.find(req, res, next)
                .then(() => {
                    repositoryMock.find.should.have.been.called();
                    done();
                });
        });

        it('should call res.json()', (done) => {

            controller.find(req, res, next)
                .then(() => {
                    res.json.should.have.been.called();
                    next.should.not.have.been.called();
                    done();
                });
        });

        it('should call next() on repository error', (done) => {
            Object.assign(repositoryMock, {
                find: () => Promise.reject('Error')
            });
            controller.find(req, res, next)
                .then(() => {
                    res.json.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });

        it('should call next() on missing id', (done) => {
            req.params = {};
            controller.find(req, res, next)
                .then(() => {
                    res.json.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });
    });

    describe('create', () => {
        let req, res, next;

        beforeEach(() => {
            Object.assign(repositoryMock, {
                create: spy(() => Promise.resolve({}))
            });
            req = { body: {} };
            res = spy.interface('res', ['json']);
            res.status = () => res;
            next = spy(() => {});
        });

        it('should call repository.create()', (done) => {
            controller.create(req, res, next)
                .then(() => {
                    repositoryMock.create.should.have.been.called();
                    done();
                });
        });

        it('should call res.json()', (done) => {
            controller.create(req, res, next)
                .then(() => {
                    res.json.should.have.been.called();
                    next.should.not.have.been.called();
                    done();
                });
        });

        it('should call next() on repository error', (done) => {
            Object.assign(repositoryMock, {
                create: () => Promise.reject('Error')
            });
            controller.create(req, res, next)
                .then(() => {
                    res.json.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });

        it('should call next() on missing body', (done) => {
            req.body = undefined;
            controller.create(req, res, next)
                .then(() => {
                    res.json.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });
    });

    describe('update', () => {
        let req, res, next;

        beforeEach(() => {
            Object.assign(repositoryMock, {
                update: spy(() => Promise.resolve({}))
            });
            req = { body: {}, params: { id: '1'} };
            res = spy.interface('res', ['sendStatus']);
            next = spy(() => {});
        });

        it('should call repository.update()', (done) => {
            controller.update(req, res, next)
                .then(() => {
                    repositoryMock.update.should.have.been.called();
                    done();
                });
        });

        it('should call res.json()', (done) => {
            controller.update(req, res, next)
                .then(() => {
                    res.sendStatus.should.have.been.called();
                    next.should.not.have.been.called();
                    done();
                });
        });

        it('should call next() on repository error', (done) => {
            Object.assign(repositoryMock, {
                update: () => Promise.reject('Error')
            });
            controller.update(req, res, next)
                .then(() => {
                    res.sendStatus.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });

        it('should call next() on missing id', (done) => {
            req.params = {};
            controller.update(req, res, next)
                .then(() => {
                    res.sendStatus.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });

        it('should call next() on missing body', (done) => {
            req.body = undefined;
            controller.update(req, res, next)
                .then(() => {
                    res.sendStatus.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });
    });

    describe('remove', () => {
        let req, res, next;

        beforeEach(() => {
            Object.assign(repositoryMock, {
                remove: spy(() => Promise.resolve({}))
            });
            req = { params: { id: '1'} };
            res = spy.interface('res', ['sendStatus']);
            next = spy(() => {});
        });

        it('should call repository.remove()', (done) => {
            controller.remove(req, res, next)
                .then(() => {
                    repositoryMock.remove.should.have.been.called();
                    done();
                });
        });

        it('should call res.json()', (done) => {
            controller.remove(req, res, next)
                .then(() => {
                    res.sendStatus.should.have.been.called();
                    next.should.not.have.been.called();
                    done();
                });
        });

        it('should call next() on repository error', (done) => {
            Object.assign(repositoryMock, {
                remove: () => Promise.reject('Error')
            });
            controller.remove(req, res, next)
                .then(() => {
                    res.sendStatus.should.not.have.been.called();
                    next.should.have.been.called();
                    done();
                });
        });
    });

});
