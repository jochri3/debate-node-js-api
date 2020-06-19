const express = require('express');
const PostsController = require('./controllers/posts.controller');
const CommentsController = require('./controllers/comments.controller');
const { auth } = require('./middlewares/auth');

const postsRouter = express.Router();
const commentsRouter = express.Router();

//posts router
postsRouter.get('/', [auth], PostsController.index);
postsRouter.get('/:id', PostsController.show);
postsRouter.get('/:id/comments', PostsController.getComments);

//Routes pour commentaires
commentsRouter.get('/:id', CommentsController.show);

exports.postsRouter = postsRouter;
exports.commentsRouter = commentsRouter;
