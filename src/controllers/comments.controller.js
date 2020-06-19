const Comment = require('../models/model.comment');

exports.show = (req, res) => {
  const {
    params: { id },
  } = req;
  const comment = Comment.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return res.json('Not found').status(404);
  }
  return res.send(comment);
};
