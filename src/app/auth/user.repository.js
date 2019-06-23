// UTILISÉ POUR LE TP2
/*
const model = require('./user.model');
const { AppError, AppErrorTypes } = require('../error/error');

const findByCredentials = (name, password) => {
    return model.findOne({ name, password })
        .then(user => {
            if (user) {
                return user;
            } else {
                const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND,
                    `No user with name=${name} & password=${password} has been found`);
                return Promise.reject(error);
            }
        })
};

const findById = id => {
    return model.findById(id)
        .then(user => {
            if (user) {
                return user;
            } else {
                const error = new AppError(AppErrorTypes.RESOURCE_NOT_FOUND, `No user with id=${id} has been found`);
                return Promise.reject(error);
            }
        });
};

module.exports = {
    findByCredentials,
    findById
};
*/