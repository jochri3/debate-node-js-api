function auth(req, res, next) {
  const user = 'osée';
  if (user !== 'chris') return res.json('Pas autorisé').json(403);
  next();
}

exports.auth = auth;
