// UTILISÉ POUR LE TP1, 2, 3, 5 et 6

class AppError extends Error {
  constructor(type, message) {
    super(message || type && type.description);
    this.type = type;
  }
}

class AppErrorType {
  constructor(httpCode, description) {
    this.httpCode = httpCode;
    this.description = description;
  }
}

const AppErrorTypes = {
  DTO_INVALID_FORMAT: new AppErrorType(400, 'DTO Format Invalide'),
  PARAMETER_INVALID_FORMAT: new AppErrorType(400, 'Format Invalide'),
  NOT_AUTHENTICATED: new AppErrorType(401, 'L\'utilisateur dois etre connecté'),
  RESOURCE_NOT_FOUND: new AppErrorType(404, 'La ressource n\'a pas été trouvé'),
  OTHER_ERROR: new AppErrorType(500, 'Autres erreur')
};

module.exports = {
  AppError,
  AppErrorTypes
};
