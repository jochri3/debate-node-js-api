const Post = require('../models/model.post');
const Comment = require('../models/model.comment');

exports.index = (req, res) => {
  const posts = Post;
  res.send(posts);
};

exports.show = ({ params: { id } }, res) => {
  const post = Post.find((post) => post.id === parseInt(id));
  if (!post) return res.json('Pas trouvé').status(404);
  return res.send(post);
};

exports.getComments = ({ params: { id } }, res) => {
  const post = Post.find((post) => post.id === parseInt(id));
  if (!post) return res.josn('Pas trouvé').status(404);
  const comments = Comment.filter((comment) => comment.id_post === post.id);

  const { titre, contenu } = post;
  return res.send({
    post: { titre, contenu },
    comments,
  });
};
