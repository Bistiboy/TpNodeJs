// UTILISÉ POUR LE TP1 et 2

const login = (req, res) => {
  res.json({
    username: req.user.name
  });
};

const logout = (req, res) => {
  req.logout();
  res.sendStatus(204);
};

module.exports = {
  login,
  logout
};
