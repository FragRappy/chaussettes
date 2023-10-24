import express from 'express';
import dotenv from 'dotenv';
import router from './router.js';
import videos from './data/videos.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use((req, res, next) => {
    res.locals.url = req.url;
    res.locals.videos = videos;
    next()
});

app.use(express.static('./public'));
app.use(router);
app.use((req, res) => {
    res.status(404);
    res.render('404');
  });

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}/`);
  });
  