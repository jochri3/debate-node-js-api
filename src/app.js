const express = require('express');

const app = express();
const { commentsRouter, postsRouter } = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/comments/', commentsRouter);
app.use('/api/posts/', postsRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Le serveur a demarré sur le port ${PORT}`));
